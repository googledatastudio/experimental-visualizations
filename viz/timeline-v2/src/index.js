const local = require('./localMessage.js');
const d3 = Object.assign(
  {},
  require('d3'),
  require('d3-scale'),
  require('d3-transition'),
  require('d3-axis')
);
const dscc = require('@google/dscc');
const moment = require('moment');

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = false;

// write viz code here
const drawViz = data => {
  const margins = {left: 20, right: 20, top: 20, bottom: 20};
  const height = dscc.getHeight() - margins.top - margins.bottom;
  const width = dscc.getWidth() - margins.right - margins.left;

  var vizData = data.tables.DEFAULT.map(d => {
    return {
      date: moment(d.date[0], 'YYYY-MM-DD'),
      dateStr: d.date[0],
      year: moment(d.date[0], 'YYYY-MM-DD').format('YYYY'),
      title: d.title[0],
      category: d.category[0],
    };
  });

  let style = {
    buttonColor:
      data.style.buttonColor.value !== undefined
        ? data.style.buttonColor.value.color
        : data.style.buttonColor.defaultValue,
    axisColor:
      data.style.axisColor.value !== undefined
        ? data.style.axisColor.value.color
        : data.style.axisColor.defaultValue,
    vizBackground:
      data.style.vizBackground.value !== undefined
        ? data.style.vizBackground.value.color
        : data.style.vizBackground.defaultValue,
    fontFamily:
      data.style.font.value !== undefined
        ? data.style.font.value
        : data.style.font.defaultValue,
  };
  const margin = {top: 20, bottom: 20, left: 20, right: 20};
  const svgHeight = height - margin.top - margin.bottom;
  const svgWidth = width - margin.left - margin.right;

  const buttonHeight = svgHeight * 0.15;
  const vizHeight = svgHeight * 0.5;
  const textHeight = svgHeight * 0.35;

  const timelineMargin = {top: 0, bottom: 50, left: 100, right: 0};

  const lineOffset = 10;
  const lineWidth = svgWidth - 2 * lineOffset - timelineMargin.left;

  const colors = ['#1A73E8', '#D93025', '#F9AB00', '#1E8E3E', '#202124'];

  // remove existing svg
  d3.select('body')
    .selectAll('svg')
    .remove();

  // make a canvas
  const svg = d3
    .select('body')
    .append('svg')
    .attr('transform', `translate (${margin.left}, ${margin.top})`)
    .attr('width', width - margin.right)
    .attr('height', height - margin.bottom);

  // draw buttons
  const years = Array.from(new Set(vizData.map(d => d.year)))
    .sort()
    .reverse();
  years.unshift('SHOW ALL');

  // TODO make the buttons work again
  const buttonCanvas = svg
    .append('svg')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', svgWidth)
    .attr('height', buttonHeight);

  const buttons = buttonCanvas
    .selectAll('g')
    .data(years)
    .enter()
    .append('g');

  const buttonsRect = buttons
    .append('rect')
    .attr('x', (d, i) => svgWidth - (i + 1) * 140)
    .attr('y', buttonHeight / 2)
    .style('width', '120px')
    .attr('height', (buttonHeight * 1) / 3)
    .attr('fill', style.buttonColor)
    .on('click', onClick);

  const buttonText = buttons
    .append('text')
    .attr('x', (d, i) => svgWidth - (i + 1) * 140 + 60)
    .attr('y', buttonHeight / 2 + 25)
    .attr('fill', 'white')
    .style('font-size', '15px')
    .style('font-weight', 'bold')
    .style('font-family', style.fontFamily)
    .attr('text-anchor', 'middle')
    .text(d => d)
    .on('click', onClick);

  // draw the timeline here
  const vizCanvas = svg
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', vizHeight)
    .attr('x', 0)
    .attr('y', margin.top + buttonHeight);

  const bg = vizCanvas
    .append('rect')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', style.vizBackground);

  // TODO: why not background color
  const timelineSvg = vizCanvas
    .append('svg')
    .attr('width', svgWidth - timelineMargin.left)
    .attr('height', vizHeight - timelineMargin.bottom)
    .attr('x', timelineMargin.left)
    .attr('y', 0);

  const categories = Array.from(new Set(vizData.map(d => d.category)));

  // unique categories
  var yScale = d3
    .scaleBand()
    .domain(categories)
    .range([0, vizHeight - timelineMargin.bottom]);

  const colorScale = d3
    .scaleOrdinal()
    .domain(categories)
    .range(colors);

  const lines = timelineSvg
    .selectAll('line')
    .data(categories)
    .enter()
    .append('line')
    .attr('x1', 0)
    .attr('x2', svgWidth)
    .attr('y1', d => yScale(d) + yScale.bandwidth() / 2)
    .attr('y2', d => yScale(d) + yScale.bandwidth() / 2);

  const labels = vizCanvas
    .selectAll('text')
    .data(categories)
    .enter()
    .append('text')
    .style('font-family', style.fontFamily)
    .style('fill', '#3C4043')
    .attr('x', timelineMargin.left - 10)
    .attr('y', d => yScale(d) + yScale.bandwidth() / 2)
    .attr('text-anchor', 'end')
    .text(d => d);

  // make the div for the text
  const textArea = svg
    .append('svg')
    .attr('x', timelineMargin.left)
    .attr('y', buttonHeight + vizHeight)
    .attr('width', svgWidth)
    .attr('height', textHeight);

  function onMouseover(grouped) {
    const sortedBullets = grouped.values.sort(
      (a, b) => a.category > b.category
    );

    const bulletText = textArea
      .selectAll('text')
      .data(sortedBullets)
      .enter()
      .append('text')
      .attr('x', 25)
      .attr('y', (d, i) => i * 25 + 65)
      .style('font-family', style.fontFamily)
      .style('fill', '#3C4043')
      .text(d => d.title);

    textArea
      .append('text')
      .attr('x', 15)
      .attr('y', 40)
      .style('font-family', style.fontFamily)
      .style('font-size', '21px')
      .style('fill', '#3C4043')

      .style('font-weight', 'bold')
      .text(grouped.key);

    const bullets = textArea
      .selectAll('circle')
      .data(sortedBullets)
      .enter()
      .append('circle')
      .attr('cx', 10)
      .attr('cy', (d, i) => i * 25 + 60)
      .attr('r', 5)
      .attr('fill', d => colorScale(d.category));

    d3.select(this).attr('opacity', 0.3);
  }

  function onMouseout(d) {
    d3.select(this).attr('opacity', 0);
    textArea.selectAll('text, circle').remove();
  }

  function drawTimeline(parsedData, timelineSvg) {
    // draw circles

    timelineSvg.selectAll('circle, rect').remove();

    vizCanvas.selectAll('g').remove();

    const nested = d3
      .nest()
      .key(d => d.dateStr)
      .entries(parsedData);

    const categoryNested = d3
      .nest()
      .key(d => d.dateStr)
      .key(d => d.category)
      .entries(parsedData);

    const byDateCategory = categoryNested
      .reduce((acc, d) => {
        return acc.concat(d.values);
      }, [])
      .map(d => {
        return {
          date: d.values[0].date,
          category: d.values[0].category,
          num: d.values.length,
        };
      });

    const minDate = moment.min(...parsedData.map(d => d.date)).toDate();
    const maxDate = moment.max(...parsedData.map(d => d.date)).toDate();

    const xScale = d3
      .scaleTime()
      .domain([d3.timeWeek.ceil(maxDate), d3.timeWeek.floor(minDate)])
      .range([lineWidth, lineOffset]);

    const rScale = d3
      .scaleLinear()
      .domain(d3.extent(byDateCategory.map(d => d.num)))
      .range([5, 10]);

    const timeAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat('%b %Y'));

    const dots = timelineSvg
      .selectAll('circle')
      .data(byDateCategory)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.date))
      .attr('cy', d => yScale(d.category) + yScale.bandwidth() / 2)
      .attr('r', d => rScale(d.num))
      .attr('fill', d => colorScale(d.category))
      .attr('stroke', 'white');

    vizCanvas
      .append('g')
      .call(timeAxis)
      .style('font-family', style.fontFamily)
      .style('font-size', '15px')
      .attr('color', style.axisColor)
      .attr(
        'transform',
        `translate(${timelineMargin.left}, ${vizHeight -
          timelineMargin.bottom})`
      );

    // fix the rect
    const rect = timelineSvg
      .selectAll('rect')
      .data(nested)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.values[0].date) - 4)
      .attr('y', 0)
      .attr('width', 8)
      .attr('height', vizHeight)
      .on('mouseover', onMouseover)
      .on('mouseout', onMouseout)
      .attr('fill-color', 'white')
      .attr('opacity', 0);
  }
  // initial draw
  //
  drawTimeline(vizData, timelineSvg);

  // onclick
  function onClick(year) {
    if (year === 'SHOW ALL') {
      drawTimeline(vizData, timelineSvg);
    } else {
      drawTimeline(vizData.filter(d => d.year === year), timelineSvg);
    }
  }
};

// renders locally
if (LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
}
