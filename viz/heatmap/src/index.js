const dscc = require('@google/dscc');
const d3 = Object.assign(
  {},
  require('d3'),
  require('d3-axis'),
  require('d3-scale-chromatic')
);
const local = require('./localMessage.js');
const ut = require('./utils.js');

// TODO fix this
const clearFilter = () => {
  const FILTER = dscc.InteractionType.FILTER;
  if ('canvas' in vizState) {
    const canvas = vizState.canvas;
    const actionId = 'onClick';
    vizState.selected.clear();
    canvas.selectAll('rect').style('stroke', 'none');
    dscc.clearInteraction(actionId, FILTER);
  }
};

const buildTooltip = (d, fields) => {
  const xDim = `${fields.categories[0].name}: ${d.categories[0]}`;
  const yDim = `${fields.categories[1].name}: ${d.categories[1]}`;
  const met = `${fields.metric[0].name}: ${d.metric[0]}`;
  return (`${xDim}\n ${yDim}\n ${met}` );
}

const styleVal = (message, styleId) => {
  // to account for color styling
  if (message.style[styleId].value !== undefined && typeof message.style[styleId].value === 'object' ){
    return message.style[styleId].value.color;
  }
  return message.style[styleId].value !== undefined
    ? message.style[styleId].value
      : message.style[styleId].defaultValue;
}

const colors = (message) => {
  const lowColor = styleVal(message, 'lowColor');
  const highColor = styleVal(message, 'highColor');
  const interpolation = styleVal(message, 'interpolation');
  return d3[`${interpolation}`](lowColor, highColor);
}

// write viz code here
const draw = message => {
  const margin = {left: 60, right: 50, top: 50, bottom: 50};

  const emptyCanvas = d3.select('svg').remove();

  const width = dscc.getWidth();
  const height = dscc.getHeight() - 4;

  
  if (height < 0) {
    ut.onError(ut.SVG_TOO_SMALL, ut.C_SVG_TOO_SMALL);
    return;
  }

  const data = message.tables.DEFAULT;
  
  var svg = d3
    .select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  var canvas = svg
    .append('g')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  // create color scale
  var metScale = d3
    .scaleLinear()
    .domain(d3.extent(data.map(d => d.metric[0])))
    .range([0, 1]);

  const colorScale = colors(message);

  var xScale = d3
    .scaleBand()
    .domain(data.map(d => d.categories[0]))
    .range([0, width - margin.left - margin.right])
    .paddingInner(0.3);

  var yScale = d3
    .scaleBand()
    .domain(data.map(d => d.categories[1]))
    .range([0, height - margin.top - margin.bottom])
    .paddingInner(0.3);

  // check for too many dimensions
  if (yScale.bandwidth() < 0.01 || xScale.bandwidth() < 0.01) {
    ut.onError(ut.TOO_MANY_DIMS);
    return;
  }

  const cells = canvas
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', d => xScale(d.categories[0]))
    .attr('y', d => yScale(d.categories[1]))
    .attr('width', xScale.bandwidth())
    .attr('height', yScale.bandwidth())
    .style('fill', d => colorScale(metScale(d.metric[0])))
    .style('opacity', 1)
    .append('title')
    .text(d => buildTooltip(d, message.fields));
  
  const fontFamily = styleVal(message, 'fontFamily');
  const showLabels = styleVal(message, 'showLabels');


  svg.selectAll('g.text').remove();
  svg.selectAll('text').remove();

  if (showLabels) {
    const xLabels = svg
      .append('g')
      .selectAll('text')
      .data(xScale.domain())
      .enter()
      .append('text')
      .attr('x', d => xScale(d) + margin.left + xScale.bandwidth() / 2)
      .attr('y', (margin.top * 5) / 6)
      .text(d => d)
      .attr('text-anchor', 'middle')
      .style('font-family', fontFamily);

    const yLabels = svg
      .append('g')
      .selectAll('text')
      .data(yScale.domain())
      .enter()
      .append('text')
      .attr('x', margin.left)
      .attr('y', d => yScale(d) + margin.left + yScale.bandwidth() / 4)
      .attr('text-anchor', 'middle')
      .attr(
        'transform',
        d =>
          `rotate( -90 ${margin.left}, ${yScale(d) +
            margin.left +
            yScale.bandwidth() / 3})`
      )
      .text(d => d)
      .style('font-family', fontFamily);
  }

};

const drawViz = message => {
  d3.select('#error').remove();
  try {
    draw(message);
  } catch (err) {
    ut.onError(ut.GENERAL_ERROR);
    console.log(err);
  }
};

dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
//drawViz(local.message);
