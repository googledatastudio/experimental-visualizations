// create and add the canvas
var canvasElement = document.createElement('canvas');
var ctx = canvasElement.getContext('2d');
canvasElement.id = 'myViz';
document.body.appendChild(canvasElement);

dscc.subscribeToData(
  function(data) {
    //console.log(data)
    var dataByConfigId = data.tables.DEFAULT;
    //console.log(dataByConfigId);
    var parsedData = dataByConfigId.map(function(d) {
      return [d['xMetric'][0], d['yMetric'][0], d['valueMetric'][0]];
    });
    //console.log(parsedData);

    var styleByConfigId = data.style;
    //console.log(styleByConfigId);

    var ctx = canvasElement.getContext('2d');
    // clear the canvas.
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

    // set the canvas width and height
    var frameWidth = dscc.getWidth();
    var frameHeight = dscc.getHeight();
    ctx.canvas.width = frameWidth - 20;
    ctx.canvas.height = frameHeight - 20;
    //console.log('width: ' + ctx.canvas.width + ', height: ' + ctx.canvas.height);

    // get axis ranges
    var xmin = styleByConfigId.xmin.value
      ? styleByConfigId.xmin.value
      : styleByConfigId.xmin.defaultValue;
    var xmax = styleByConfigId.xmax.value
      ? styleByConfigId.xmax.value
      : styleByConfigId.xmax.defaultValue;
    var ymin = styleByConfigId.ymin.value
      ? styleByConfigId.ymin.value
      : styleByConfigId.ymin.defaultValue;
    var ymax = styleByConfigId.ymax.value
      ? styleByConfigId.ymax.value
      : styleByConfigId.ymax.defaultValue;

    // get axis reverse option
    var xrev = styleByConfigId.xrev.value ? -1 : 1;
    var yrev = styleByConfigId.yrev.value ? -1 : 1;
    //console.log('xrev: ' + xrev + ', yrev: ' + yrev);
    ctx.scale(xrev, yrev);

    // scale canvas
    var xscale = frameWidth / (xmax - xmin);
    var yscale = frameHeight / (ymax - ymin);
    //console.log('xscale: ' + xscale + ', yscale: ' + yscale);
    ctx.scale(xscale, yscale);

    //translate canvas
    ctx.translate(-xmin * xrev, ymin);

    // create a simpleheat object given an id or canvas reference
    var heat = simpleheat(canvasElement);
    //console.log(heat);

    // set data of [[x, y, value], ...] format
    heat.data(parsedData);

    // set max data value (1 by default)
    var maxValue = styleByConfigId.maxValue.value
      ? styleByConfigId.maxValue.value
      : styleByConfigId.maxValue.defaultValue;
    heat.max(maxValue);

    // set point radius and blur radius (25 and 15 by default)
    var radius = styleByConfigId.radius.value
      ? styleByConfigId.radius.value
      : styleByConfigId.radius.defaultValue;
    var blur = styleByConfigId.blur.value
      ? styleByConfigId.blur.value
      : styleByConfigId.blur.defaultValue;
    heat.radius(radius, blur);

    //set gradient colours
    var gradient = {
      default: {
        '0.4': 'blue',
        '0.6': 'cyan',
        '0.7': 'lime',
        '0.8': 'yellow',
        '1.0': 'red',
      },
      'blue-yellow': {
        '0.4': '#253494',
        '0.6': '#2c7fb8',
        '0.7': '#41b6c4',
        '0.8': '#a1dab4',
        '1.0': '#ffffcc',
      },
      viridis: {
        '1.000': '#fde725',
        '0.975': '#dde318',
        '0.950': '#bade28',
        '0.925': '#95d840',
        '0.900': '#75d054',
        '0.875': '#56c667',
        '0.850': '#3dbc74',
        '0.825': '#29af7f',
        '0.800': '#20a386',
        '0.775': '#1f968b',
        '0.750': '#238a8d',
        '0.725': '#287d8e',
        '0.700': '#2d718e',
        '0.675': '#33638d',
        '0.650': '#39558c',
        '0.625': '#404688',
        '0.600': '#453781',
        '0.575': '#482576',
        '0.550': '#481467',
        '0.525': '#440154',
      },
      inferno: {
        '1.000': '#fcffa4',
        '0.975': '#f1ed71',
        '0.950': '#f6d543',
        '0.925': '#fbba1f',
        '0.900': '#fca108',
        '0.875': '#f8870e',
        '0.850': '#f1711f',
        '0.825': '#e55c30',
        '0.800': '#d74b3f',
        '0.775': '#c43c4e',
        '0.750': '#b1325a',
        '0.725': '#9b2964',
        '0.700': '#87216b',
        '0.675': '#71196e',
        '0.650': '#5c126e',
        '0.625': '#450a69',
        '0.600': '#2f0a5b',
        '0.575': '#180c3c',
        '0.550': '#08051d',
        '0.525': '#000004',
      },
    };
    var grad = styleByConfigId.colourPalette.value
      ? styleByConfigId.colourPalette.value
      : styleByConfigId.colourPalette.defaultValue;
    heat.gradient(gradient[grad]);

    // draw the heatmap
    var minOpacity = styleByConfigId.minOpacity.value
      ? styleByConfigId.minOpacity.value
      : styleByConfigId.minOpacity.defaultValue;
    heat.draw(minOpacity);
  },
  {transform: dscc.objectTransform}
);
