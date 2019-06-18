const dscc = require('@google/dscc');
const d3 = Object.assign({}, require('d3'), require('d3-sankey'));
const local = require('./localMessage.js');
import * as ut from './utils.js'

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = false;

// write viz code here
const parseData = data => {
  // assuming only 2 dimensions
  var dimNodes1 = data.map(function (row) {
    return row['dimensions'][0];
  });
  var dimNodes2 = data.map(function (row) {
    return row['dimensions'][1];
  });

  var uniqueNodes = Array.from(new Set(dimNodes1.concat(dimNodes2)));

  var nodes = uniqueNodes.map(function (d) {
    return { id: d };
  });

  var links = data.map(function (row) {
    return {
      source: uniqueNodes.indexOf(row['dimensions'][0]),
      target: uniqueNodes.indexOf(row['dimensions'][1]),
      value: row['metrics'][0],
    };
  });

  return { nodes, links };
};

const draw = message => {
  const sankeyData = parseData(message.tables.DEFAULT);
  const style = message.style;

  // remove the canvas if it exists
  d3.select('body')
    .selectAll('svg')
    .remove();
  // remove the error handler if exists
  d3.select('body')
    .selectAll('div')
    .remove();

  // set margins
  var margin = { left: 20, right: 50, top: 20, bottom: 20 };
  var padding = { left: 20, right: 50, top: 20, bottom: 20 };
  // get the width and the height of the iframe
  var width = dscc.getWidth() - margin.left - margin.right;
  var height = dscc.getHeight() - margin.top - margin.bottom;

  const onClick = d => {
    var FILTER = dscc.InteractionType.FILTER;
    const fields = message.fields;
    const dimId1 = fields['dimensions'][0].id;
    const dimId2 = fields['dimensions'][1].id;
    const sourceVal = d.source.id;
    const targetVal = d.target.id;
    console.log(fields);
    var intxnData = {
      concepts: [dimId1, dimId2],
      values: [[sourceVal, targetVal]],
    };
    dscc.sendInteraction('onClick', FILTER, intxnData);
    console.log(intxnData);
  };

  function onHover(d) {
    d3.select(this).attr('stroke-opacity', 1);
  }

  function leaveHover(d) {
    d3.select(this).attr('stroke-opacity', Number(style.link_opacity.value));
  }

  // set up the canvas space
  var svg = d3
    .select('body')
    .append('svg')
    .attr('transform', 'translate(30, 30)')
    .attr('width', width - margin.left)
    .attr('height', height - margin.top);

  // configure extent to use margin
  var sankey = d3
    .sankey()
    .nodeWidth(15)
    .nodePadding(10)
    .size([
      width - padding.left - padding.right,
      height - padding.top - padding.bottom,
    ]);

  sankey(sankeyData);

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
    .attr('x', function (d) {
      return d.x0;
    })
    .attr('y', function (d) {
      return d.y0;
    })
    .attr('height', function (d) {
      return d.y1 - d.y0;
    })
    .attr('width', sankey.nodeWidth())
    .style(
      'fill',
      style.node_color.value ? style.node_color.value.color : 'black'
    );

  // draw the links
  const links = svg
    .append('g')
    .attr('fill', 'none')
    .attr('transform', 'translate(0, 10)')
    .attr(
      'stroke',
      style.link_color.value ? style.link_color.value.color : 'black'
    )
    .attr('stroke-opacity', Number(style.link_opacity.value))
    .selectAll('path')
    .data(sankeyData.links)
    .enter()
    .append('path')
    .attr('d', d3.sankeyLinkHorizontal())
    .attr('stroke-width', function (d) {
      return d.width;
    })
    .on('click', onClick)
    .on('mouseover', onHover)
    .on('mouseout', leaveHover);
  // if I should show labels
  if (style.show_labels) {
    // add the "left" side labels
    svg
      .append('g')
      .attr('transform', 'translate(0, 10)')
      .style('font-size', style.node_font_size)
      .style('fill', style.node_font_color.color)
      .selectAll('text')
      .data(sankeyData.nodes)
      .enter()
      .append('text')
      .filter(function (d) {
        return d.x0 < width / 2;
      })
      .attr('x', function (d) {
        return style.left_offset.value
          ? d.x0 + parseInt(style.left_offset.value, 10)
          : d.x0 + margin.right / 2;
      })
      .attr('y', function (d) {
        return (d.y0 + d.y1) / 2;
      })
      .attr('text-anchor', 'beginning')
      .attr('dy', '0.35em')
      .text(d => d.id);

    // add the "right" side labels
    svg
      .append('g')
      .attr('transform', 'translate(0, 10)')
      .style('font-size', style.node_font_size)
      .style('fill', style.node_font_color.color)
      .selectAll('text')
      .data(sankeyData.nodes)
      .enter()
      .append('text')
      .filter(function (d) {
        return d.x0 > width / 2;
      })
      .attr('x', function (d) {
        return style.right_offset.value
          ? d.x0 - +style.right_offset.value
          : d.x0 - margin.right / 2;
      })
      .attr('y', function (d) {
        return (d.y0 + d.y1) / 2;
      })
      .attr('text-anchor', 'end')
      .attr('dy', '0.35em')
      .text(function (d) {
        return d.id;
      });
  }
}
const drawViz = message => {
  try {
    draw(message)
  }
  catch (err) {
    ut.onError()
  }

};




// renders locally
if (LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
}
