'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const dscc = require('@google/dscc');
const d3 = Object.assign(
  {},
  require('d3'),
  require('d3-scale-chromatic'),
  require('d3-hierarchy'),
  require('d3-array')
);
const utils = require('./utils');
const local = require('./localMessage');
const LOCAL = false;
const styleVal = (message, styleId) => {
  // to account for color styling
  if (
    message.style[styleId].value !== undefined &&
    typeof message.style[styleId].value === 'object'
  ) {
    return message.style[styleId].value.color;
  }
  return message.style[styleId].value !== undefined
    ? message.style[styleId].value
    : message.style[styleId].defaultValue;
};
// TODO just use string formatting and object properties to simplify
const colorSwitch = selectedScheme => {
  switch (selectedScheme) {
    case 'schemeCategory10':
      return d3.schemeCategory10;
    case 'schemeAccent':
      return d3.schemeAccent;
    case 'schemePaired':
      return d3.schemePaired;
    case 'schemePastel1':
      return d3.schemePastel1;
    case 'schemePastel2':
      return d3.schemePastel2;
    case 'schemeSet1':
      return d3.schemeSet1;
    case 'schemeSet2':
      return d3.schemeSet2;
    case 'schemeSet3':
      return d3.schemeSet3;
    default:
      return d3.schemeCategory10;
  }
};
const buildTooltip = (fields, d) => {
  var node = d;
  var tooltip = [];
  if (node.value !== undefined) {
    tooltip.unshift(`value: ${node.value.toLocaleString('en-US')}`);
  }
  while (node.parent !== null) {
    let dimName = fields.dimension[node.depth - 1].name;
    tooltip.unshift(`${dimName}: ${node.data.name}`);
    node = node.parent;
  }
  return tooltip.join('\n');
};
// write viz code here
const drawViz = data => {
  const height = dscc.getHeight();
  const width = dscc.getWidth();
  if (height < 0 || width < 0) {
    utils.displayError(utils.SVG_TOO_SMALL, utils.C_SVG_TOO_SMALL);
    return;
  }
  // remove the canvas if it exists
  d3.select('body')
    .selectAll('svg')
    .remove();
  var svg = d3
    .select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);
  const radius = Math.floor(Math.min(width / 2, height / 2));
  const colorScale = d3
    .scaleOrdinal(colorSwitch(styleVal(data, 'arcColors')))
    .domain(data.tables.DEFAULT.map(row => row.dimension[0]));
  const assignColor = d => {
    if (d.depth === 1) {
      return colorScale(d.data.name);
    } else if (d.depth === 2) {
      return colorScale(d.parent.data.name);
    } else if (d.depth === 3) {
      return colorScale(d.parent.parent.data.name);
    } else if (d.depth === 4) {
      return colorScale(d.parent.parent.parent.data.name);
    }
  };
  const root = d3.hierarchy({
    children: utils.buildHierarchy(data.tables.DEFAULT, data.fields),
  });
  root.sum(d => d.value);
  const layout = d3.partition().size([2 * Math.PI, radius]);
  layout(root);
  const arc = d3.arc();
  const path = svg
    .append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`)
    .selectAll('path')
    .data(root.descendants().slice(1))
    .enter()
    .append('path')
    .attr('d', d => {
      return arc({
        innerRadius: d.y0,
        outerRadius: d.y1,
        startAngle: d.x0,
        endAngle: d.x1,
      });
    })
    .attr('fill', d => assignColor(d))
    .attr('stroke', styleVal(data, 'arcOutline'))
    .attr('stroke-opacity', styleVal(data, 'arcOpacity'));
  path.append('title').text(d => buildTooltip(data.fields, d));
};
// renders locally
const draw = message => {
  d3.select('#error').remove();
  try {
    drawViz(message);
  } catch (err) {
    utils.displayError(utils.GENERAL_ERROR);
    console.log(err);
  }
};
if (LOCAL) {
  draw(local.message);
} else {
  dscc.subscribeToData(draw, {transform: dscc.objectTransform});
}
