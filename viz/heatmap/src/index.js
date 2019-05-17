const dscc = require('@google/dscc');
const d3 = Object.assign({}, require('d3'), require('d3-axis'), require('d3-scale-chromatic'));
const local = require('./localMessage.js');

const constants = {
  'selected': new Set()
};

const clearFilter = () => {
  const FILTER = dscc.InteractionType.FILTER;
  if ('canvas' in constants) {
    const canvas = constants.canvas;
    const actionId = 'onClick';
    constants.selected.clear();
    canvas.selectAll('rect').style('stroke', 'none');
    dscc.clearInteraction(actionId, FILTER);
  }
}

function click(d) {
  if (constants.enableInteractions === true) {
    const selected = constants.selected;

    const FILTER = dscc.InteractionType.FILTER;
    const actionId = 'onClick';
    const dimIds = constants.dimensions.map((d => d.id))

    if (selected.has(d)) {
      selected.delete(d)
      d3.select(this)
        .style('stroke', 'none');
    } else {
      selected.add(d);
      d3.select(this)
        .style('stroke', 'red')
        .style('stroke-width', 5);
    }
    if (selected.size > 0) {
      const filterVals = []
      for (let item of selected) {
        filterVals.push(item.dimensions)
      }
      const filterData = {
        'concepts': dimIds,
        'values': filterVals
      }
      dscc.sendInteraction(actionId, FILTER, filterData)
    } else {
      clearFilter();
    }
  }

}

const updateLabels = (message) => {

  const xScale = constants.xScale;
  const yScale = constants.yScale;
  const svg = constants.svg;
  const margin = constants.margin;
  const width = constants.width;
  const height = constants.height;
  const fontFamily = message.style.fontFamily.value || message.style.fontFamily.defaultValue;
  const showTitle = message.style.showTitle.value !== undefined ? message.style.showTitle.value : message.style.showTitle.defaultValue;
  const showLabels = message.style.showLabels.value !== undefined ? message.style.showLabels.value : message.style.showLabels.defaultValue;
  const fontSize = message.style.fontSize.value !== undefined ? message.style.fontSize.value : message.style.fontSize.defaultValue;
  svg
    .selectAll('g.text')
    .remove();
  svg
    .selectAll('text')
    .remove();

  if (showLabels) {
    const xLabels = svg
      .append('g')
      .selectAll('text')
      .data(xScale.domain())
      .enter()
      .append('text')
      .attr('x', (d) => xScale(d) + margin.left + xScale.bandwidth() / 2)
      .attr('y', margin.top * 5 / 6)
      .text((d) => d)
      .attr('text-anchor', 'middle')
      .style('font-family', fontFamily)
      .style('font-size', `${fontSize}px`);

    var yLabels = svg
      .append('g')
      .selectAll('text')
      .data(yScale.domain())
      .enter()
      .append('text')
      .attr('x', margin.left)
      .attr('y', (d) => yScale(d) + margin.left + yScale.bandwidth() / 4)
      .attr('text-anchor', 'middle')
      .attr('transform', (d) => `rotate( -90 ${margin.left}, ${yScale(d) + margin.left + yScale.bandwidth() / 3})`)
      .text((d) => d)
      .style('font-family', fontFamily)
      .style('font-size', `${fontSize}px`);

  }

  if (showTitle) {
    const xName = message.fields.dimensions[0].name;
    const yName = message.fields.dimensions[1].name;
    const metricName = message.fields.metric[0].name;

    var chartTitle = svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', height - margin.bottom / 5)
      .text(`${metricName} by ${xName} and ${yName}`)
      .attr('text-anchor', 'middle')
      .style('font-size', '18px')
      .style('font-weight', 'bold')
      .style('font-family', fontFamily);
  }

  constants.showLabels = showLabels;
  constants.fontFamily = fontFamily;
  constants.showTitle = showTitle;
}

const drawHeatmap = (message) => {

  const width = dscc.getWidth();
  const height = dscc.getHeight() - 100;
  const data = message.tables.DEFAULT;
  const margin = constants.margin;
  const enableInteractions = message.interactions.onClick.value.type === "FILTER" ? true : false;

  d3.select('body')
    .selectAll('svg')
    .remove();

  d3.select('body')
    .selectAll('button')
    .remove();

  if (enableInteractions) {
    d3.select('body')
      .append('button')
      .attr('class', 'mdc-button clear-button')
      .html('Clear Filter')
      .on('click', clearFilter);

  }

  var svg = d3
    .select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);


  var canvas = svg
    .append('g')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr('transform', `translate(${margin.left}, ${margin.top})`);


  // create color scale
  var colorScale = d3
    .scaleLinear()
    .domain(d3.extent(data.map((d) => d.metric[0])))
    .range([0, 1]);

  var xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.dimensions[0]))
    .range([0, width - margin.left - margin.right])
    .paddingInner(0.3);

  var yScale = d3
    .scaleBand()
    .domain(data.map((d) => d.dimensions[1]))
    .range([0, height - margin.top - margin.bottom])
    .paddingInner(0.3);

  const cells = canvas
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d) => xScale(d.dimensions[0]))
    .attr('y', (d) => yScale(d.dimensions[1]))
    .attr('width', xScale.bandwidth())
    .attr('height', yScale.bandwidth())
    .style('fill', (d) => d3.interpolateRdBu((1 - colorScale(d.metric[0]))))
    .style('opacity', 1)
    .on('click', click)
    .append('title')
    .text((d) => d.metric[0]);

  constants['svg'] = svg;
  constants['canvas'] = canvas;
  constants['width'] = width;
  constants['height'] = height;
  constants['yScale'] = yScale;
  constants['xScale'] = xScale;
  constants['data'] = data;
  constants['interactions'] = enableInteractions;


}

// write viz code here
const draw = (message) => {
  constants.dimensions = message.fields.dimensions;
  constants.margin = { left: 60, right: 50, top: 50, bottom: 50 };

  const emptyCanvas = d3.select('svg').empty();

  const width = dscc.getWidth();
  const height = dscc.getHeight() - 100;
  const widthChange = width !== constants.width;
  const heightChange = height !== constants.height;

  const enableInteractions = message.interactions.onClick.value.type === "FILTER" ? true : false;
  constants.enableInteractions = enableInteractions;
  let clearInteractions;
  if (enableInteractions) {
    clearInteractions = message.interactions.onClick.value.data === undefined;
    if (clearInteractions) {
      clearFilter();
    }
  }


  const fontFamilyChange = message.style.fontFamily.value != constants.fontFamily;
  const fontSizeChange = message.style.fontSize.value != constants.fontSize;
  const titleChange = message.style.showTitle.value != constants.showTitle;
  const labelChange = message.style.showLabels.value != constants.showLabels;
  const interactionsChange = enableInteractions != constants['interactions'];
  const dataChange = JSON.stringify(message.tables.DEFAULT) != JSON.stringify(constants['data']);


  if (emptyCanvas || widthChange || heightChange || interactionsChange || dataChange) {
    drawHeatmap(message);
    updateLabels(message);
  }
  else if (fontFamilyChange || titleChange || fontSizeChange || labelChange) {
    updateLabels(message)
  }


};


// renders locally
if (false) {
  draw(local.message);
} else {
  dscc.subscribeToData(draw, { transform: dscc.objectTransform });
}

