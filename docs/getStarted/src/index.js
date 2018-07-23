dscc.subscribeToData(drawViz);

function drawViz(vizData) {
  // Remove the canvas if it exists
  if (document.querySelector('canvas')) {
    var oldCanv = document.querySelector('canvas');
    oldCanv.parentNode.removeChild(oldCanv);
  }
  // Draw a blue rectangle using canvas.
  var canvasElement = document.createElement('canvas');
  var ctx = canvasElement.getContext('2d');
  ctx.canvas.width = dscc.getWidth() - 20;
  ctx.canvas.height = dscc.getHeight() - 20;
  canvasElement.id = 'myViz';
  document.body.appendChild(canvasElement);

  ctx.fillStyle = 'blue';
  ctx.fillRect(10, 10, 100, 100);
}
