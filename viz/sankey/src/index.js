const dscc = require('@google/dscc');
const d3 = Object.assign({}, require('d3'), require('d3-sankey'));
const local = require('./localMessage.js');
import * as ut from './utils.js';

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = false;

// write viz code here
const parseData = data => {
  // assuming only 2 dimensions
  var dimNodes1 = data.map(function(row) {
    return row['dimensions'][0];
  });
  var dimNodes2 = data.map(function(row) {
    return row['dimensions'][1];
  });

  var uniqueNodes = Array.from(new Set(dimNodes1.concat(dimNodes2)));

  var nodes = uniqueNodes.map(function(d) {
    return {id: d};
  });

  var links = data.map(function(row) {
    return {
      source: uniqueNodes.indexOf(row['dimensions'][0]),
      target: uniqueNodes.indexOf(row['dimensions'][1]),
      value: row['metrics'][0],
    };
  });

  return {nodes, links};
};

const styleVal = (message, styleId) => {
  // to account for color styling
  if (typeof message.style[styleId].defaultValue === 'object') {
    return message.style[styleId].value.color !== undefined
      ? message.style[styleId].value.color
      : message.style[styleId].defaultValue.color;
  }
  return message.style[styleId].value !== undefined
    ? message.style[styleId].value
    : message.style[styleId].defaultValue;
};

const draw = message => {
  const sankeyData = parseData(message.tables.DEFAULT);

  // remove the canvas if it exists
  d3.select('body')
    .selectAll('svg')
    .remove();
  // remove the error handler if exists
  d3.select('body')
    .selectAll('div')
    .remove();

  // set margins

  // get the width and the height of the iframe
  var width = dscc.getWidth();
  var height = dscc.getHeight();

  function onHover(d) {
    d3.select(this).attr('stroke-opacity', 1);
  }

  function leaveHover(d) {
    d3.select(this).attr(
      'stroke-opacity',
      Number(styleVal(message, 'link_opacity'))
    );
  }

  // set up the canvas space
  const yMargin = 5;

  var svg = d3
    .select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height - yMargin * 2)
    .attr('transform', `translate(0, -${yMargin})`);

  // configure extent to use margin
  var sankey = d3
    .sankey()
    .nodeWidth(15)
    .nodePadding(yMargin / 2)
    .size([width, height - yMargin * 2]);

  try {
    sankey(sankeyData);
  } catch (e) {
    ut.displayError(ut.DATA_ERROR, ut.C_DATA_ERROR);
    return;
  }
  // draw the nodes
  svg
    .append('g')
    .attr('class', 'nodes')
    .attr('transform', 'translate(0, 10)')
    .selectAll('rect.node')
    .data(sankeyData.nodes)
    .enter()
    .append('rect')
    .classed('node', true)
    .attr('x', function(d) {
      return d.x0;
    })
    .attr('y', function(d) {
      return d.y0;
    })
    .attr('height', function(d) {
      return d.y1 - d.y0;
    })
    .attr('width', sankey.nodeWidth())
    .style('fill', styleVal(message, 'node_color'));

  // draw the links
  const links = svg
    .append('g')
    .attr('fill', 'none')
    .attr('transform', 'translate(0, 10)')
    .attr('stroke', styleVal(message, 'link_color'))
    .attr('stroke-opacity', Number(styleVal(message, 'link_opacity')))
    .selectAll('path')
    .data(sankeyData.links)
    .enter()
    .append('path')
    .attr('d', d3.sankeyLinkHorizontal())
    .attr('stroke-width', function(d) {
      return d.width;
    })
    .on('mouseover', onHover)
    .on('mouseout', leaveHover);
  // if I should show labels
  if (styleVal(message, 'show_labels')) {
    // add the "left" side labels
    svg
      .append('g')
      .style('font-size', styleVal(message, 'node_font_size'))
      .style('fill', styleVal(message, 'node_font_color'))
      .selectAll('text')
      .data(sankeyData.nodes)
      .enter()
      .append('text')
      .filter(function(d) {
        return d.x0 < width / 2;
      })
      .attr('x', function(d) {
        return d.x0 + parseInt(styleVal(message, 'left_offset'));
      })
      .attr('y', function(d) {
        return (d.y0 + d.y1) / 2;
      })
      .attr('text-anchor', 'beginning')
      .attr('dy', '0.35em')
      .text(d => d.id);

    // add the "right" side labels
    svg
      .append('g')
      .style('font-size', styleVal(message, 'node_font_size'))
      .style('fill', styleVal(message, 'node_font_color'))
      .selectAll('text')
      .data(sankeyData.nodes)
      .enter()
      .append('text')
      .filter(function(d) {
        return d.x0 > width / 2;
      })
      .attr('x', function(d) {
        return d.x0 - parseInt(styleVal(message, 'right_offset'));
      })
      .attr('y', function(d) {
        return (d.y0 + d.y1) / 2;
      })
      .attr('text-anchor', 'end')
      .attr('dy', '0.35em')
      .text(function(d) {
        return d.id;
      });
  }
};
const drawViz = message => {
  try {
    draw(message);
  } catch (err) {
    ut.displayError(ut.GENERAL_ERROR);
  }
};

// renders locally
if (LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
}
