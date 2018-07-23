dscc.subscribeToData(function(data) {
  // remove the canvas if it exists
  d3.select('body')
    .selectAll('svg')
    .remove();

  // set margins
  var margin = {left: 20, right: 50, top: 20, bottom: 20};

  // get the width and the height of the iframe
  var width = dscc.getWidth();
  var height = document.documentElement.clientHeight - 20;

  // assuming that metrics are given to me in the order x, y
  var metrics = data.fields.filter(function(field) {
    return field.concept === 'METRIC';
  });

  // picking the first metric as X
  var metricXid = metrics[0].id;
  var metricYid = metrics[1].id;

  var parsedData = data.rows.map(function(d) {
    return {
      x: d[metricXid],
      y: d[metricYid],
    };
  });

  var grouped = d3
    .nest()
    .key(function(d) {
      return d.x;
    })
    .entries(parsedData);

  var lineChartData = grouped.map(function(d) {
    return {
      x: +d.key,
      ymean: d3.mean(d.values, function(el) {
        return el.y;
      }),
      ystdev: d3.deviation(d.values, function(el) {
        return el.y;
      }),
    };
  });

  // make an svg the size of the iframe
  var svg = d3
    .select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  // make a svg just for the chart
  var chartSvg = svg
    .append('svg')
    .attr('width', width - margin.right - margin.left)
    .attr('height', height - margin.top - margin.bottom)
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // the viz should only take up space "inside" the margins
  var xScale = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(
        lineChartData.map(function(d) {
          return d.x;
        })
      ),
    ])
    .range([0, width - margin.right - margin.left]);

  // y has a reverse range because of svg coordinate system
  var yScale = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(
        lineChartData.map(function(d) {
          return d.ymean + d.ystdev;
        })
      ),
    ])
    .range([height - margin.top - margin.bottom, 0]);

  // make the data line
  var lineGenerator = d3
    .line()
    .x(function(d) {
      return xScale(d.x) + margin.left;
    })
    .y(function(d) {
      return yScale(d.ymean);
    });

  chartSvg
    .append('g')
    .append('path')
    .attr('d', lineGenerator(lineChartData))
    .style('fill', 'none')
    .style('stroke', '#999');

  // make the "stdev" generator
  var areaGenerator = d3
    .area()
    .x(function(d) {
      return xScale(d.x) + margin.left;
    })
    .y0(function(d) {
      return yScale(d.ymean + d.ystdev);
    })
    .y1(function(d) {
      return yScale(d.ymean - d.ystdev);
    });

  chartSvg
    .append('g')
    .append('path')
    .attr('d', areaGenerator(lineChartData))
    .style('fill', '#ddd')
    .style('opacity', 0.5);

  // generate axes
  var xAxis = d3.axisBottom(xScale);
  svg
    .append('g')
    .attr(
      'transform',
      'translate(' + margin.left + ',' + (height - margin.bottom) + ')'
    )
    .call(xAxis);

  var yAxis = d3.axisLeft(yScale);
  svg
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .call(yAxis);
});
