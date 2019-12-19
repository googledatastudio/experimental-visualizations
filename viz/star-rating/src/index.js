const dscc = require('@google/dscc');
const d3 = require('d3');
const local = require('./localMessage.js');

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = true;

const drawViz = (data) => {

  // Set margins + canvas size
  const padding = { top: 5, bottom: 5 };
  let height = dscc.getHeight();
  let width = dscc.getWidth();

  // Remove the vis if it already exists so a new one isn't created on top of the old one if a user updates the vis
  if (document.querySelector("svg")) {
    let oldSvg = document.querySelector("svg");
    oldSvg.parentNode.removeChild(oldSvg);
  }
  
  // Create elements
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.id = "starsContainer";
  document.body.appendChild(svg);

  d3.select('svg#starsContainer').classed('svg-container', true)
  .attr('preserveAspectRatio', 'xMinYMin meet')
  // .attr('viewBox', '0 0 ' + width + ' ' + height)
  .attr('viewBox', '0 0 300 100')
  .classed('svg-content-responsive', true);

  const rating = document.createElementNS('http://www.w3.org/2000/svg', 'text')
  rating.id = 'rating';
  svg.appendChild(rating);

  const gEle = document.createElementNS('http://www.w3.org/2000/svg', 'g')
  svg.appendChild(gEle);

  const tableData = data.tables.DEFAULT;
  // console.log(data);
  
  if (tableData.length < 1 || typeof tableData[0].starMetric === 'undefined') {
    // no data
    console.error("D3.js visualization failed. No metric provided. There must be one metric within the range of 1 to 5.");

    d3.select('svg').append("text")
    .attr('x', '0')
    .attr('y', '20')
    .text('Error: There must be one metric within the range of 1 to 5.')
    .attr('font-size', '5pt');

    return; 
  }
  const metric = tableData[0].starMetric[0];
  const starColor = data.style.starColor.value.color;
  const themeFontColor = data.theme.themeFontColor.color;
  const themeFontFamily = data.theme.themeFontFamily;

  /** Check that metric is anything from 1 to 5 ONLY
      If not, show user some kind of error
  **/
  
  if (metric < 1 || metric > 5) {
    console.error("D3.js visualization failed. The metric provided must be within the range of 1 to 5.");
    d3.select('svg').append("text")
        .attr('x', '20')
        .attr('y', '20')
        .text('Error: The metric provided must be from 1 to 5.')
        .attr('font-size', '5pt');
    return;
  } 

  // Set metric text
  d3.select('svg#starsContainer text#rating')
    .text(metric)
    .attr('transform', 'translate(5, 32)')
    .style('fill', themeFontColor)
    .style('font-family', themeFontFamily);
  
  // Returns metric without possible decimal
  const fullStars = parseInt(metric); 

  /**
    Determine whether or not a partially-filled star is needed
    
  **/
  let partialStar;
  let digits;
  let partialStarPercentage;
  let dynamicGradientStop;

  // If decimal, get decimal
  if (metric.toString().indexOf('.') > -1) { 
    partialStar = metric.toString().split('.')[1];
    digits = partialStar.length;

    if (digits == 1) {
        partialStarPercentage = (partialStar * 10).toString() + "%";
    } else if (digits == 2) {
        partialStarPercentage = (partialStar).toString() + "%";
    }

  }
  
  if (partialStar) {
    dynamicGradientStop = partialStarPercentage;
  }

  /**
    Dynamic Gradients
    Define left and right 'stops' of the gradient. Stops determine where the gradient should end.
    
    stop-left class is orange and it starts on the left and goes 50% of the width of the element to the right
    stop-right class is white and starts on the right and goes 50% of the width of the element to the left

  **/

  if (dynamicGradientStop !== undefined) {

    const dynamicRatingGradient = d3.select('svg').append('defs').append('linearGradient')
    .attr('id', 'dynamicRatingGradient')
    .attr("x1", "0%").attr("x2", "100%").attr("y1", "100%").attr("y2", "100%");

    dynamicRatingGradient.append('stop')
    .attr('class', 'stop-left')
    .attr('offset', dynamicGradientStop);

    dynamicRatingGradient.append('stop')
    .attr('class', 'stop-right')
    .attr('offset', dynamicGradientStop);

  }

  /**
    Create the stars
    Currently one size only - TODO make this dynamic with 
    the user's resizing of the window
  **/

  let symbolGenerator = d3.symbol()
    .type(d3.symbolStar)
    .size(350);

  const pathData = symbolGenerator();

  // x,y where each star should be placed within its g element
  const starsByPosition = [
    [90,20],
    [130,20],
    [170,20],
    [210,20],
    [250,20]
  ];

  // Loop through starsByPosition (data), create individual stars   
  for (var i = 0; i < starsByPosition.length; i++){
    d3.select('g')
    .selectAll('path')
    .data(starsByPosition)
    .enter()
    .append('path')
    .attr('transform', function(d) {
      // set position
      return 'translate(' + d + ')';
    })
    .attr('class', function(d) {
      // determine fill
      if (starsByPosition.indexOf(d) +1 <= fullStars) {
        return 'percent100';

      } else if (starsByPosition.indexOf(d) +1 === fullStars +1 && partialStar) { 
        // we are one star past full stars and a partial star is needed
        return 'percentageDynamic';
      }
      // Return placementDict[starsByPosition.indexOf(d)];
    })
    .attr('d', pathData);  // d = path of the star

  };

  // Update star fill color
  d3.select('g')
    .selectAll('path.percent100')
    .style('fill', starColor);

  d3.select('defs')
    .selectAll('linearGradient#dynamicRatingGradient stop.stop-left')
    .style('stop-color', starColor);

}
/*
dscc.subscribeToData(drawViz, {transform: dscc.objectTransform})
*/

// renders locally
if (LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
}
