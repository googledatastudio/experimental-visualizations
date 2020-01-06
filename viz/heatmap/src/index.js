const dscc = require('@google/dscc');
const d3 = Object.assign(
  {},
  require('d3'),
  require('d3-axis'),
  require('d3-scale-chromatic')
);
const local = require('./localMessage.js');
const ut = require('./utils.js');

function click(d, message) {
  const FILTER = dscc.InteractionType.FILTER;
  const actionId = 'onClick';
  const dimIds = message.fields.categories.map(d => d.id);
  let selected = new Set();

  if (message.interactions.onClick.value.data !== undefined) {
    const selVals = message.interactions[actionId].value.data.values.map(d =>
      JSON.stringify(d)
    );
    selected = new Set(selVals);
    const clickData = JSON.stringify(d.categories);
    if (selected.has(clickData)) {
      selected.delete(clickData);
    } else {
      selected.add(clickData);
    }
  } else {
    const filterData = {
      concepts: dimIds,
      values: [d.categories],
    };
    dscc.sendInteraction(actionId, FILTER, filterData);
    return;
  }

  if (selected.size > 0) {
    const filterData = {
      concepts: dimIds,
      values: Array.from(selected).map(d => JSON.parse(d)),
    };
    dscc.sendInteraction(actionId, FILTER, filterData);
  } else {
    dscc.clearInteraction(actionId, FILTER);
  }
}

const buildTooltip = (d, fields) => {
  const xDim = `${fields.categories[0].name}: ${d.categories[0]}`;
  const yDim = `${fields.categories[1].name}: ${d.categories[1]}`;
  const met = `${fields.metric[0].name}: ${d.metric[0]}`;
  return `${xDim}\n ${yDim}\n ${met}`;
};

const styleVal = (message, styleId) => {
  // to account for color styling
  if (typeof message.style[styleId].defaultValue === 'object') {
    return message.style[styleId].value.color !== undefined
      ? message.style[styleId].value.color
      : message.style[styleId].defaultValue.color;
  }
  return message.style[styleId].value !== undefined
    ? message.style[styleId].value
    : message.style[styleId].defaultValue;
};

const colors = message => {
  const lowColor = styleVal(message, 'lowColor');
  const highColor = styleVal(message, 'highColor');
  const interpolation = styleVal(message, 'interpolation');
  return d3[`${interpolation}`](lowColor, highColor);
};

// write viz code here
const draw = message => {
  console.log(message.style);
  const margin = {left: 20, right: 20, top: 20, bottom: 20};

  const emptyCanvas = d3.select('svg').remove();

  const width = dscc.getWidth();
  const height = dscc.getHeight() - 4;

  if (height < 0) {
    ut.displayError(ut.SVG_TOO_SMALL, ut.C_SVG_TOO_SMALL);
    return;
  }

  const data = message.tables.DEFAULT;

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
  var metScale = d3
    .scaleLinear()
    .domain(d3.extent(data.map(d => d.metric[0])))
    .range([0, 1]);

  const colorScale = colors(message);

  var xScale = d3
    .scaleBand()
    .domain(data.map(d => d.categories[0]))
    .range([0, width - margin.left - margin.right])
    .paddingInner(0.1);

  var yScale = d3
    .scaleBand()
    .domain(data.map(d => d.categories[1]))
    .range([0, height - margin.top - margin.bottom])
    .paddingInner(0.1);

  // check for too many dimensions
  if (yScale.bandwidth() < 0.01 || xScale.bandwidth() < 0.01) {
    ut.displayError(ut.TOO_MANY_DIMS);
    return;
  }

  const cells = canvas
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', d => xScale(d.categories[0]))
    .attr('y', d => yScale(d.categories[1]))
    .attr('width', xScale.bandwidth())
    .attr('height', yScale.bandwidth())
    .attr('data-cat0', d => d.categories[0])
    .attr('data-cat1', d => d.categories[1])
    .style('fill', d => colorScale(metScale(d.metric[0])))
    .style('opacity', 1)
    .on('click', d => click(d, message))
    .append('title')
    .text(d => buildTooltip(d, message.fields));

  const enableInteractions =
    message.interactions.onClick.value.type === 'FILTER' ? true : false;

  if (enableInteractions) {
    if (message.interactions.onClick.value.data !== undefined) {
      const selected = message.interactions.onClick.value.data.values;
      selected.forEach(val => {
        const selector = `[data-cat0="${val[0]}"][data-cat1="${val[1]}"]`;
        d3.select(selector)
          .style('stroke', 'red')
          .style('stroke-width', 5);
      });
    }
  }
  const fontFamily = styleVal(message, 'fontFamily');
  const showLabels = styleVal(message, 'showLabels');

  if (showLabels) {
    const xLabels = svg
      .append('g')
      .selectAll('text')
      .data(xScale.domain())
      .enter()
      .append('text')
      .attr('x', d => xScale(d) + margin.left + xScale.bandwidth() / 2)
      .attr('y', (margin.top * 5) / 6)
      .text(d => d)
      .attr('text-anchor', 'middle')
      .style('font-family', fontFamily);

    const yLabels = svg
      .append('g')
      .selectAll('text')
      .data(yScale.domain())
      .enter()
      .append('text')
      .attr('x', margin.left)
      .attr('y', d => yScale(d) + margin.left + yScale.bandwidth() / 4)
      .attr('text-anchor', 'middle')
      .attr(
        'transform',
        d =>
          `rotate( -90 ${margin.left}, ${yScale(d) +
            margin.left +
            yScale.bandwidth() / 3})`
      )
      .text(d => d)
      .style('font-family', fontFamily);
  }
};

const drawViz = message => {
  d3.select('#error').remove();
  try {
    draw(message);
  } catch (err) {
    ut.displayError(ut.GENERAL_ERROR);
    console.log(err);
  }
};

dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
//drawViz(local.message);
