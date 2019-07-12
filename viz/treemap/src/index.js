const local = require('./localMessage.js');
const d3 = require('d3');
const dscc = require('@google/dscc');

function draw(message) {
  var data = message.tables.DEFAULT;

  var tabularData1 = data.map(function(row) {
    // create an object {"level": val, "level2": val
    var levels = {};
    row.levels.forEach(function(dim, i) {
      levels['level' + i] = row.levels[i];
    });

    levels['metric'] = row.area[0];
    return levels;
  });

  var colorScale = d3.scaleOrdinal(d3.schemeCategory10).domain(
    Array.from(
      new Set(
        tabularData1.map(function(d) {
          return d['level0'];
        })
      )
    )
  );

  // assuming only 2 dimensions
  var nestedData = d3
    .nest()
    .key(function(d) {
      return d['level0'];
    })
    .key(function(d) {
      return d['level1'];
    })
    .rollup(function(leaves) {
      return d3.sum(leaves, function(d) {
        return +d['metric'];
      });
    })
    .entries(tabularData1);

  var root = d3.hierarchy({values: nestedData}, function(d) {
    return d.values;
  });

  root.sum(function(d) {
    return d.value;
  });

  render(root, message.style, colorScale);
}

function mouseOver(elem, d, tooltip) {
  d3.select(elem).attr('opacity', 1);
  var dataKey = d.data.key ? d.data.key : 'total';
  var tooltipText = dataKey + ': ' + d.value;
  var boundingBox = elem.getBoundingClientRect();
  tooltip
    .text(tooltipText)
    .transition()
    .delay(100)
    .duration(600)
    .style('visibility', 'visible')
    .style('top', boundingBox.top + 5 + 'px')
    .style('left', boundingBox.left + 5 + 'px');
}

function mouseOut(elem, d, tooltip) {
  d3.select(elem).attr('opacity', 0.2);
  tooltip
    .transition()
    .delay(100)
    .duration(600)
    .style('visibility', 'hidden');
}
function render(root, style, colorScale) {
  // remove the canvas if it exists
  d3.select('body')
    .selectAll('svg')
    .remove();

  // set margins
  var margin = {left: 75, right: 75, top: 50, bottom: 50};

  var width = dscc.getWidth();
  var height = dscc.getHeight();

  var svg = d3
    .select('body')
    .append('svg')
    .attr('transform', 'translate(30, 30)')
    .attr('width', width - margin.left)
    .attr('height', height - margin.top);

  // create tooltip
  var tooltip = d3
    .select('body')
    .append('div')
    .style('z-index', '10')
    .style('background-color', '#ffffff')
    .style('color', 'black')
    .style('visibility', 'hidden')
    .style('height', '30px')
    .style('opacity', 0.9)
    .style('position', 'absolute');

  var treemap = d3
    .treemap()
    .size([
      width - margin.left - margin.right,
      height - margin.top - margin.bottom,
    ])
    .paddingOuter(10)
    .paddingTop(20);

  treemap(root);

  var nodes = svg
    .append('g')
    .selectAll('g')
    .data(root.descendants())
    .enter()
    .append('g')
    .attr('transform', function(d) {
      return 'translate(' + [d.x0, d.y0] + ')';
    });

  function assignColor(d) {
    if (d.depth === 0) {
      return '#FFFFFF';
    } else if (d.depth === 1) {
      return colorScale(d.data.key);
    } else {
      return colorScale(d.parent.data.key);
    }
  }
  nodes
    .append('rect')
    .attr('width', function(d) {
      return d.x1 - d.x0;
    })
    .attr('height', function(d) {
      return d.y1 - d.y0;
    })
    .attr('fill', function(d) {
      return assignColor(d);
    })
    .attr('stroke', 'black')
    .attr('opacity', 0.2)
    .on('mouseover', function(d) {
      mouseOver(this, d, tooltip);
    })
    .on('mouseout', function(d) {
      mouseOut(this, d, tooltip);
    });

  if (style.showL1Labels.value) {
    nodes
      .append('text')
      .filter(function(d) {
        return d.depth === 1;
      })
      .attr('dx', +style.textXOffset.value)
      .attr('dy', +style.textYOffset.value)
      .attr('fill', style.fontColor.value.color)
      .attr('font-family', style.fontFamily.value)
      .attr('font-size', style.fontSize.value + 'px')
      .text(function(d) {
        return d.data.key ? d.data.key : 'root';
      });
  }
  if (style.showL2Labels.value) {
    nodes
      .append('text')
      .filter(function(d) {
        return d.depth === 2;
      })
      .attr('dx', +style.textXOffset.value)
      .attr('dy', +style.textYOffset.value)
      .attr('fill', style.fontColor.value.color)
      .attr('font-family', style.fontFamily.value)
      .attr('font-size', style.fontSize.value + 'px')
      .text(function(d) {
        return d.data.key ? d.data.key : 'root';
      });
  }
}

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = false;

// renders locally
if (LOCAL) {
  draw(local.message);
} else {
  dscc.subscribeToData(draw, {transform: dscc.objectTransform});
}
