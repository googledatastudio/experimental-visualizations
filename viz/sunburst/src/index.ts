const dscc = require('@google/dscc');
const d3 = Object.assign({}, require('d3'), require('d3-scale-chromatic'), require('d3-hierarchy'), require('d3-array'));
import * as utils from './utils';
const local = require('./localMessage');

//import * as test from '../test/testData';

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = true;



// write viz code here
const drawViz = (data: any) => {
  const margin = {top: 20, bottom: 20, left: 20, right: 20};
  const height = dscc.getHeight() - margin.top - margin.bottom;
  const width = dscc.getWidth() - margin.left - margin.right;

  // remove the canvas if it exists
  d3.select('body')
    .selectAll('svg')
    .remove();

  var svg = d3
    .select('body')
    .append('svg')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)
    .attr('width', width)
    .attr('height', height);

  const radius = Math.min(width / 2, height / 2);

  const colorScale = d3.scaleOrdinal(d3.schemeCategory10).domain(
    data.tables.DEFAULT.map((row: any) => row.dimension[0])
  );

  const assignColor = (d: any) => {
    if (d.depth === 1) {
      return colorScale(d.data.name);
    } else if (d.depth === 2) {
      return colorScale(d.parent.data.name);
    } else if (d.depth === 3) {
      return colorScale(d.parent.parent.data.name);
    } else if (d.depth === 4) {
      return colorScale(d.parent.parent.parent.data.name);
    }

  }

  const root = d3.hierarchy(utils.createRoot(data));

  root.sum((d: any) => d.value);
  const layout = d3.partition().size([2 * Math.PI, radius]);
  layout(root);

  const arc = d3.arc();

  const clicked = (d: any) => {
    console.log(d);
    let FILTER = dscc.InteractionType.FILTER;
    let interactionData = {
      concepts: [d.data.dimId],
      values: [[d.data.name]]
    };
    dscc.sendInteraction("onClick", FILTER, interactionData);
  }

  const path = svg.append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`)
    .selectAll('path')
    .data(root.descendants().slice(1))
    .enter()
    .append('path')
    .attr('d', (d: any) => {
      return arc(
        {
          innerRadius: d.y0,
          outerRadius: d.y1,
          startAngle: d.x0,
          endAngle: d.x1
        }
      )
    })
    .attr('fill', (d: any) => assignColor(d))
    .attr('stroke', 'white')
    .on('click', (d: any) => clicked(d));


  path.append('title')
    .text((d: any) => d.data.name);

};

// renders locally
if (LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
}
