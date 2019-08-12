import * as dscc from '@google/dscc';
import Helper from '../js/d3-common';
import './src/getdata.scss';

const d3 = Object.assign({}, require('d3-fetch'), require('d3-selection'));

const LOCAL = 'localhost';

function drawViz(dsObj) {
  const root = prepareDOM();
  const dim = Helper.getMaxDimensions('body');

  const tableData = dsObj.tables.DEFAULT;
  if (tableData) {
    const margin = {top: 10, bottom: 10, right: 10, left: 10};
    const width = dim.w - margin.left - margin.right;

    // Create rect with text (number of records) and make clickable
    const svg = root
      .append('svg')
      .attr('height', 150)
      .attr('width', width)
      .attr('x', 0)
      .attr('y', 0);

    svg
      .append('text')
      .attr('text-anchor', 'middle')
      .text(`dataset contains ${tableData.length} records`)
      .attr('height', 40)
      .attr('width', 250)
      .attr('x', width / 2)
      .attr('y', 30);

    svg
      .append('text')
      .attr('text-anchor', 'middle')
      .text('download')
      .attr('height', 40)
      .attr('width', 120)
      .attr('x', width / 2)
      .attr('y', 70);

    svg
      .append('rect')
      .attr('height', 40)
      .attr('width', 120)
      .attr('fill', 'slategrey')
      .attr('opacity', 0.4)
      .attr('x', width / 2 - 60)
      .attr('y', 45)
      .style('cursor', 'pointer')
      .on('click', d => {
        download(JSON.stringify(dsObj), 'json.txt', 'text/plain');
      });
  }
}

function prepareDOM() {
  const root = d3.select('body').attr('id', 'body');

  // Clean everything
  d3.select('body')
    .selectAll('svg')
    .remove();

  return root;
}

function download(content, fileName, contentType) {
  var a = document.createElement('a');
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

/* try catch only for DS */
function draw(data) {
  if (LOCAL) {
    drawViz(data);
  } else {
    try {
      drawViz(data);
    } catch (err) {
      console.log(err);
    }
  }
}

/* Load data (LOCAL) or take from Google DS */
async function getData() {
  if (window.location.hostname == LOCAL) {
    const theDataSet = await d3.json('./data/DS-data.json');
    draw(theDataSet);
  } else {
    dscc.subscribeToData(draw, {transform: dscc.objectTransform});
  }
}

getData();
