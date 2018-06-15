dscc.subscribeToData(function(data) {
  // remove the canvas if it exists
  d3.select("body").selectAll("svg").remove();

  // set margins
  var margin = {'left': 10, 'right': 10, 'top': 20, 'bottom': 20};
  
  // get the width and the height of the iframe 
  var width = dscc.getWidth();
  var height = document.documentElement.clientHeight - 20;

  // identifying the dimensions and the metrics
  var dimensionId = data.fields.find(function(field) {return field.concept === "DIMENSION";}).id;
  var metricId = data.fields.find(function(field) {return field.concept === "METRIC";}).id;

  // parse the data for the bar chart into an array of objects
  var parsedData = data.rows.map(function(d){
    return {dimension: d[dimensionId],
            metric: d[metricId]}
  });

  // sort by dimension to order the data
  parsedData.sort(function(x, y){
    return d3.ascending(x.dimension, y.dimension);
  });

  // make an svg to draw on
  var svg = d3.select("body").append("svg")
      .attr("width", width - margin.left - margin.right)
      .attr("height", height)
      .attr("transform", "translate(" + margin.left + "," + margin.top +")");

  // create a scale to determine the y-position of a bar
  var yScale = d3.scaleBand()
      .domain(parsedData.map(function(d){return d.dimension;}))
      .range([0, height - margin.bottom])
      .paddingInner(0.3);

  // create a scale to determine the length of a bar
  var xScale = d3.scaleLinear()
      .domain([0, d3.max(parsedData.map(function(d){return d.metric;}))])
      .range([0, width - margin.right]);

  // create bars
  var bars = svg.selectAll("rect")
      .data(parsedData)
      .enter()
      .append("rect")
      .attr("y", function(d, i) { return yScale(d.dimension);})
      .attr("width", function(d) {return xScale(d.metric);})
      .attr("height", yScale.bandwidth())
      .style("fill", data.style.barColor ? data.style.barColor.color : "#6B7FD7");

  // add text to the bars
  var labels = svg.selectAll("text")
      .data(parsedData)
      .enter()
      .append('text')
      .text(function(d){return d["dimension"]})
      .attr("y", function(d, i) { return yScale(d.dimension) + yScale.bandwidth()/2;})
      .attr("x", 10);

});
