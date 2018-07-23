// create a title element
var titleElement = document.createElement('div');
titleElement.id = 'myVizTitle';
document.body.appendChild(titleElement);

var canvasElement = document.createElement('canvas');
var ctx = canvasElement.getContext('2d');
ctx.canvas.width = dscc.getWidth() - 20;
ctx.canvas.height = dscc.getHeight() - 100;
canvasElement.id = 'myViz';
document.body.appendChild(canvasElement);


// Subscribe to Data and Style changes.
dscc.subscribeToData(drawRectangle);

var barWidth = 50;
var barGap = 10;
var maxBarHeight = 300;
var canvasPadding = 50;

function drawRectangle(vizData) {
  // Place the canvas element on the page.
  var ctx = canvasElement.getContext('2d');

  // Get Dimension and Metric Ids from the fields object.
  // The field id is needed to access data values.
  // There is only 1 metric and 1 dimension as defined in the visualization config.
  var dimensionId = vizData.fields.find(function(d) {
    return d.concept === 'DIMENSION';
  }).id;
  var metricId = vizData.fields.find(function(d) {
    return d.concept === 'METRIC';
  }).id;

  // Clear the canvas.
  ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

  var rowsTotal = 0;
  for (var i = 0; i < vizData.rows.length; i++) {
    rowsTotal += vizData.rows[i][metricId];
  }

  // Use the Bar Color style element value to set the rectangle color.
  ctx.fillStyle = vizData.style.barColor.color;

  // Calculate height and draw bars for each row of data.
  for (var i = 0; i < vizData.rows.length; i++) {
    var barHeight = Math.round(
      -1 * maxBarHeight * (vizData.rows[i][metricId] / rowsTotal)
    );
    var barX = (ctx.canvas.width / vizData.rows.length) * i + barWidth / 2;
    // Draw bars.
    ctx.fillRect(barX, maxBarHeight, barWidth, barHeight);
    // Add dimension labels below bars.
    ctx.fillText(
      vizData.rows[i][dimensionId],
      barX + barWidth / 4,
      maxBarHeight + 20
    );
  }

  // Update the title element using dimension/metric names.
  var titleElement = document.getElementById('myVizTitle');
  var metricName = vizData.fields.find(function(d) {
    return d.id === metricId;
  }).name;
  var dimensionName = vizData.fields.find(function(d) {
    return d.id === dimensionId;
  }).name;
  titleElement.innerText = metricName + ' by ' + dimensionName;
}
