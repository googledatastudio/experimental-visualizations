dscc.subscribeToData(function (vizData) {
  var width = dscc.getWidth();
  var height = 136;
  var cellSize = 17;

  var minRange = parseFloat(vizData['style']['minRange']) || 0.01,
  maxRange = parseFloat(vizData['style']['maxRange']) || 0.07,
  interColor = vizData['style']['interColor'] || "Plasma",
  showLegend = vizData['style']['showLegend'] || true;
  // Format data into object <date: '2017-01-01', value: 0.001> value will between -100%~100%
  var data = {};
  var minYear = new Date().getFullYear();
  var maxYear = new Date().getFullYear();
  if (vizData.rows.length == 0) {
    return;
  }
  var dateId = vizData.fields[0].id;
  var metricId = vizData.fields[1].id;

  vizData.rows.forEach(function (row) {
    // Turn YYYYmmdd to YYYY-mm-dd
    var dateKey = row[dateId].replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3");
    var year = parseInt(dateKey.substring(0,4));
    minYear = Math.min(year, minYear);
    maxYear = Math.max(year, maxYear);
    data[dateKey] = row[metricId];
  })
  var formatPercent = d3.format(".1%");
  var color = d3.scaleSequential(d3['interpolate' + interColor])
      .domain([minRange, maxRange]);
  // Create SVG.
  d3.select(document.body).selectAll('svg').remove();
  d3.select(document.body).selectAll('text').remove();
  // main calendar
  var svg = d3.select("body")
      .selectAll("svg")
      .data(d3.range(minYear, maxYear + 1))
      .enter().append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + ((width - cellSize * 53) / 2) + "," + (height - cellSize * 7 - 1) + ")");

  svg.append("text")
      .attr("transform", "translate(-6," + cellSize * 3.5 + ")rotate(-90)")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "middle")
      .text(function(d) { return d; });

  var rect = svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "#ccc")
      .selectAll("rect")
      .data(function(d) { return d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
      .enter().append("rect")
      .attr("width", cellSize)
      .attr("height", cellSize)
      .attr("x", function(d) { return d3.timeWeek.count(d3.timeYear(d), d) * cellSize; })
      .attr("y", function(d) { return d.getDay() * cellSize; })
      .datum(d3.timeFormat("%Y-%m-%d"));

  svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "#000")
      .selectAll("path")
      .data(function(d) { return d3.timeMonths(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
      .enter().append("path")
      .attr("d", pathMonth);
  // Fill data with color and label
  rect.filter(function(d) { return d in data; })
      .attr("fill", function(d) { return color(data[d]); })
      .append("title")
      .text(function(d) { return d + ": " + formatPercent(data[d]); });

  // legend
  if (showLegend) {
    var colorScale = d3.scaleSequential(d3["interpolate" + interColor])
        .domain([0, 100]);
    d3.select("body").append("text").text(minRange + "  ");
    var legend = d3.select("body")
        .append("svg")
        .attr("width", 100)
        .attr("height", 20)
        .append("g");
    legend.select('text').text(minRange).style('color', '#000');
    var bars = legend.selectAll(".bars")
        .data(d3.range(100), function(d) { return d; })
        .enter().append("rect")
        .attr("class", "bars")
        .attr("x", function(d, i) { return i; })
        .attr("y", 10)
        .attr("height", 10)
        .attr("width", 1)
        .style("fill", function(d, i ) { return colorScale(d); });
    legend.select('text').text(maxRange).style('color', '#000').attr('x', 60);
    d3.select("body").append("text").text("  " + maxRange);
  }

  function pathMonth(t0) {
    var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
    d0 = t0.getDay(), w0 = d3.timeWeek.count(d3.timeYear(t0), t0),
    d1 = t1.getDay(), w1 = d3.timeWeek.count(d3.timeYear(t1), t1);
    return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize
        + "H" + w0 * cellSize + "V" + 7 * cellSize
        + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize
        + "H" + (w1 + 1) * cellSize + "V" + 0
        + "H" + (w0 + 1) * cellSize + "Z";
  }

});
