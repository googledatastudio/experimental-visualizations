dscc.subscribeToData(parseData);

// generate the sankey data from a tabular format
function parseData(data) {
  // assuming only 2 dimensions
  var dimensions = data.fields.filter(function(d) {
    return d.concept === 'DIMENSION';
  });
  var dimensionId1 = dimensions[0].id;
  var dimensionId2 = dimensions[1].id;

  // assuming only one metric
  var metricId = data.fields.find(function(d) {
    return d.concept === 'METRIC';
  }).id;

  var dimNodes1 = data.rows.map(function(row) {
    return row[dimensionId1];
  });
  var dimNodes2 = data.rows.map(function(row) {
    return row[dimensionId2];
  });

  var uniqueNodes = Array.from(new Set(dimNodes1.concat(dimNodes2)));

  var nodes = uniqueNodes.map(function(d) {
    return {id: d};
  });

  // this assumes uniqueness of dim x dim in rows
  var links = data.rows.map(function(row) {
    return {
      source: uniqueNodes.indexOf(row[dimensionId1]),
      target: uniqueNodes.indexOf(row[dimensionId2]),
      value: row[metricId],
    };
  });

  drawSankey(nodes, links, data.style);
}

// draw the sankey
function drawSankey(nodes, links, style) {
  // remove the canvas if it exists
  d3.select('body')
    .selectAll('svg')
    .remove();

  // set margins
  var margin = {left: 20, right: 50, top: 20, bottom: 20};

  // get the width and the height of the iframe
  var width = dscc.getWidth() - 20;
  var height = document.documentElement.clientHeight - 20;
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
      width - margin.left - margin.right,
      height - margin.top - margin.bottom,
    ]);

  sankey({nodes: nodes, links: links});

  // draw the nodes
  svg
    .append('g')
    .attr('class', 'nodes')
    .attr('transform', 'translate(0, 10)')
    .selectAll('rect.node')
    .data(nodes)
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
    .style('fill', style.node_color ? style.node_color.color : 'black');

  // draw the links
  svg
    .append('g')
    .attr('fill', 'none')
    .attr('transform', 'translate(0, 10)')
    .attr('stroke', style.link_color ? style.link_color.color : 'black')
    .attr('stroke-opacity', Number(style.link_opacity))
    .selectAll('path')
    .data(links)
    .enter()
    .append('path')
    .attr('d', d3.sankeyLinkHorizontal())
    .attr('stroke-width', function(d) {
      return d.width;
    });

  // if I should show labels
  if (style.show_labels) {
    // add the "left" side labels
    svg
      .append('g')
      .attr('transform', 'translate(0, 10)')
      .style('font-size', style.node_font_size)
      .style('fill', style.node_font_color.color)
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .filter(function(d) {
        return d.x0 < width / 2;
      })
      .attr('x', function(d) {
        return style.left_offset
          ? d.x0 + parseInt(style.left_offset, 10)
          : d.x0 + margin.right / 2;
      })
      .attr('y', function(d) {
        return (d.y0 + d.y1) / 2;
      })
      .attr('text-anchor', 'beginning')
      .attr('dy', '0.35em')
      .text(function(d) {
        return d.id;
      });

    // add the "right" side labels
    svg
      .append('g')
      .attr('transform', 'translate(0, 10)')
      .style('font-size', style.node_font_size)
      .style('fill', style.node_font_color.color)
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .filter(function(d) {
        return d.x0 > width / 2;
      })
      .attr('x', function(d) {
        return style.right_offset
          ? d.x0 - +style.right_offset
          : d.x0 - margin.right / 2;
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
}
