dscc.subscribeToData(function(data) {
  var style = data.style;
  // remove the canvas if it exists
  d3.select('body')
    .selectAll('svg')
    .remove();

  // set margins
  var margin = {left: 10, right: 50, top: 20, bottom: 20};

  // get the width and the height of the iframe
  var width = dscc.getWidth();
  var height = document.documentElement.clientHeight - 20;

  // identifying the dimensions and the metrics
  // TODO: use the new propertyConfig data passing to help
  var dimensionId = data.fields.filter(function(field) {
    return field.concept === 'DIMENSION';
  })[1].id;
  var metricId = data.fields.find(function(field) {
    return field.concept === 'METRIC';
  }).id;

  // parse the data for the bar chart into an array of objects
  var parsedData = data.rows.map(function(d) {
    return {
      dimension: d[dimensionId],
      metric: d[metricId],
    };
  });

  // sort by dimension to order the data
  parsedData.sort(function(x, y) {
    return d3.ascending(x.dimension, y.dimension);
  });

  var grouped = d3
    .nest()
    .key(function(d) {
      return d.dimension;
    })
    .entries(parsedData);

  data = grouped.map(function(d) {
    return {
      key: d.key,
      mean: d3.mean(d.values, function(elem) {
        return elem.metric;
      }),
      stdev: d3.deviation(d.values, function(elem) {
        return elem.metric;
      }),
    };
  });

  // make an svg to draw on
  var svg = d3
    .select('body')
    .append('svg')
    .attr('width', width - margin.left)
    .attr('height', height)
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // create a scale to determine the y-position of a bar
  var yScale = d3
    .scaleBand()
    .domain(
      data.map(function(d) {
        return d.key;
      })
    )
    .range([0, height - margin.bottom - margin.top])
    .paddingInner(0.3);

  // create a scale to determine the length of a bar
  var xScale = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(
        data.map(function(d) {
          return d.mean + d.stdev;
        })
      ),
    ])
    .range([0, width - margin.right]);

  // TODO: get rid of ternarys when the extra postMessage is gone
  var barColor = style.barColor.color;
  var barOpacity = style.barOpacity;
  var bars = svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('y', function(d) {
      return yScale(d.key);
    })
    .attr('width', function(d) {
      return xScale(d.mean);
    })
    .attr('height', yScale.bandwidth())
    .style('fill', barColor)
    .style('opacity', barOpacity);

  // make error lines
  if (style.showError) {
    var lineColor = style.errorColor.color;
    var lineWeight = style.errorWeight;
    var stdevLines = svg
      .selectAll('stdev')
      .data(data)
      .enter()
      .append('line')
      .attr('x1', function(d) {
        return xScale(d.mean - d.stdev);
      })
      .attr('y1', function(d) {
        return yScale(d.key) + yScale.bandwidth() / 2;
      })
      .attr('x2', function(d) {
        return xScale(d.mean + d.stdev);
      })
      .attr('y2', function(d) {
        return yScale(d.key) + yScale.bandwidth() / 2;
      })
      .attr('stroke', lineColor)
      .attr('stroke-width', lineWeight);

    // error left cap
    var leftCap = svg
      .selectAll('leftcap')
      .data(data)
      .enter()
      .append('line')
      .attr('x1', function(d) {
        return xScale(d.mean - d.stdev);
      })
      .attr('y1', function(d) {
        return yScale(d.key) + yScale.bandwidth() / 2 - 10;
      })
      .attr('x2', function(d) {
        return xScale(d.mean - d.stdev);
      })
      .attr('y2', function(d) {
        return yScale(d.key) + yScale.bandwidth() / 2 + 10;
      })
      .attr('stroke', lineColor)
      .attr('stroke-width', lineWeight);

    // error right cap
    var rightCap = svg
      .selectAll('rightcap')
      .data(data)
      .enter()
      .append('line')
      .attr('x1', function(d) {
        return xScale(d.mean + d.stdev);
      })
      .attr('y1', function(d) {
        return yScale(d.key) + yScale.bandwidth() / 2 - 10;
      })
      .attr('x2', function(d) {
        return xScale(d.mean + d.stdev);
      })
      .attr('y2', function(d) {
        return yScale(d.key) + yScale.bandwidth() / 2 + 10;
      })
      .attr('stroke', lineColor)
      .attr('stroke-width', lineWeight);
  }
  // make labals

  if (style.showLabels) {
    var labelOffset = style.labelOffset;
    var labelFontSize = style.labelFontSize;

    var labels = svg
      .append('g')
      .style('font-size', labelFontSize)
      .style('fill', 'black')
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', function(d) {
        return margin.left + Number(labelOffset);
      })
      .attr('y', function(d) {
        return yScale(d.key) + yScale.bandwidth() / 2;
      })
      .attr('text-anchor', 'start')
      .attr('dy', '0.35em')
      .text(function(d) {
        return d.key;
      });
  }
});
