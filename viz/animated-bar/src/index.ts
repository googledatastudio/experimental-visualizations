import { ObjectFormat, subscribeToData, objectTransform } from '@google/dscc';
import * as local from './localMessage';
import * as d3 from 'd3'
import * as common from './common'

export const LOCAL = true;

const dscc = require('@google/dscc');
let svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;
const previousData: Map<string, number> = new Map();
let height: number;
let width: number;
let resize: NodeJS.Timeout;
let xScale: d3.ScaleLinear<number, number> | d3.AxisScale<d3.AxisDomain>;
let yScale: d3.ScaleBand<number>;
const chartSettings: common.chartSettings = {
  duration: 2000,
  bars: 5

}

function updateDimensions() {
  height = dscc.getHeight() - 25;
  width = dscc.getWidth() - 25;
  xScale = d3.scaleLinear()
    .range([0, width - 45]);
  yScale = d3.scaleBand<number>()
    .rangeRound([15, height - 10])
    .padding(0.25);
}
// write viz code here
const drawViz = async (data: ObjectFormat) => {
  updateDimensions();
  let terminated = false;

  window.addEventListener('resize', function (event) {
    clearTimeout(resize);
    resize = setTimeout(function () { previousData.clear(); terminated = true; drawViz(data); }, 500);
  });

  d3.select('body').selectAll('svg').remove();
  d3.select('body').selectAll('button').remove();


  d3.select('body')
    .append('button')
    .text('Replay')
    .on("click", function () {
      d3.select('body').selectAll('svg').remove()
      previousData.clear();
      terminated = true;
      drawViz(data);
    });

  svg = d3
    .select('body')
    .append('svg')
    .attr('width', width - 20)
    .attr('height', height - 20)
    .on("resize", function () {
      console.log('testing')
    });

  const dataInfo = common.processData(data.tables.DEFAULT);
  const dataMap = dataInfo.dataMap;
  const firstDate = dataInfo.firstDate;


  const dataArray = dataMap.get(firstDate);
  updateGraph(dataArray, firstDate, svg.transition().duration(0).ease(d3.easeLinear));


  let i = firstDate;
  for (const data of dataMap.values()) {
    if (terminated) { break; }

    const transition = svg.transition()
      .duration(chartSettings.duration)
      .ease(d3.easeLinear);

    updateGraph(data, i++, transition);
    await transition.end();

    data.forEach(d =>
      previousData.set(d.name, d.value));
  }

};

function updateYAxis(data: Array<common.MotionChartData>) {
  yScale.domain([...data].filter(a => a.value !== null).sort((a, b) => d3.descending(a.value, b.value)).map((d) => d.rank));

  let yAxis: d3.Selection<SVGGElement, unknown, HTMLElement, any> = svg.select('.axis--y');

  if (yAxis.empty()) {
    yAxis = svg.append('g')
      .attr('class', 'axis axis--y')
      .attr("transform", "translate(15,0)");
  }
};

function updateXAxis(data: Array<common.MotionChartData>, transition: d3.Transition<SVGSVGElement, unknown, HTMLElement, any>) {

  xScale.domain([0, Math.max(...data.map((d) => d.value))]);

  let xAxis: d3.Selection<SVGGElement, unknown, HTMLElement, unknown> = svg.select('.axis--x');

  if (xAxis.empty()) {
    xAxis = svg.append('g')
      .attr('class', 'axis axis--x')
      .attr("transform", "translate(15,25)");
  }
  xAxis
    .transition(transition)
    .call(d3.axisTop(xScale));
};

function updateBars(data: Array<common.MotionChartData>, transition: d3.Transition<SVGSVGElement, unknown, HTMLElement, any>) {
  //console.log(data);
  let barsG = svg.select('.bars-g');

  if (barsG.empty()) {
    barsG = svg.append('g')
      .attr('class', 'bars-g');
  }
  const bars = barsG.selectAll(".bar")
    .data(data)
    .join(
      (enter) => enter
        .append("rect")
        .attr("transform", `translate(15, ${height + 50})`)
        .attr("class", "bar")
        .attr("height", yScale.bandwidth())
        .attr("width", (d) => xScale(d.value))
        .attr('fill', (d) => common.getRandomColor()),

      (update) => update,

      (exit) => exit.transition(transition)
        .attr("transform", `translate(15, ${height + 50})`)
        .remove());


  bars
    .call((bar) => bar.transition(transition)
      .attr("width", (d) => xScale(d.value))
      .attr("transform", (d) => `translate(15, ${yScale(d.rank) || height + 50})`)
      .attr("height", yScale.bandwidth())
    );

};

function updateLabels(data: Array<common.MotionChartData>, transition: d3.Transition<SVGSVGElement, unknown, HTMLElement, any>) {
  let labelG = svg.select('.labels');
  if (labelG.empty()) {
    labelG = svg.append("g")
      .attr('class', 'labels')
      .style("font-size", yScale.bandwidth() / 6)
      .style("font-variant-numeric", "tabular-nums")
      .attr("text-anchor", "end");
  }
  const label =
    labelG.selectAll("text")
      .data(data)
      .join
      (enter => enter
        .append("text")
        .attr("transform", d => `translate(15,${height + 50})`)
        .attr("y", yScale.bandwidth() / 2)
        .attr("x", -6)
        .attr("dy", "-0.25em")
        .text(d => d.name)
        .call(text => text.append("tspan")
          .attr("fill-opacity", 0.7)
          .attr("font-weight", "normal")
          .attr("x", -6)
          .attr("dy", "1.15em")),

        update => update,

        exit => exit.transition(transition)
          .attr("transform", `translate(15, ${height + 50})`)
          .remove())

      .call(bar => bar.transition(transition)
        .attr("transform", (d) => `translate(${xScale(d.value)}, ${yScale(d.rank) || height})`)
        .attr("y", yScale.bandwidth() / 2)
        .call(g => g.select("tspan").tween("text", d => common.textTween((previousData.get(d.name) || d.value), d.value))));


}

function updateTitle(date: number) {
  svg
    .select('.title')
    .remove();
  svg
    .append("g")
    .attr('class', 'title')
    .append('text')
    .attr("transform", "translate(" + (width * .85) + "," + (height * .95) + ")")
    .attr("font-size", "5vmax")
    .attr('opacity', '60%')
    .text(date)
}

function updateGraph(data: Array<common.MotionChartData>, date: number, transition: d3.Transition<SVGSVGElement, unknown, HTMLElement, any>) {

  updateYAxis(data);
  updateXAxis(data, transition);
  updateBars(data, transition);
  updateLabels(data, transition);
  updateTitle(date);

};

// renders locally
if (LOCAL) {
  drawViz(local.message2);
} else {
  subscribeToData(drawViz, { transform: objectTransform });
}
