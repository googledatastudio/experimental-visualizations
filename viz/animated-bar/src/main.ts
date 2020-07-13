import { ObjectFormat } from '@google/dscc';
import * as d3 from 'd3'
import * as common from './common'

const dscc = require('@google/dscc');
const previousData: Map<string, number> = new Map();
const xScale = d3.scaleLinear();
const yScale = d3.scaleBand<number>();
const chartSettings: common.ChartSettings = {
    duration: 200,
    bars: 7,
    keyframes:20,
}
const PAD_SVG = 25, PAD_YAXIS = 15;

let svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, unknown>;
let transition: d3.Transition<SVGSVGElement, unknown, HTMLElement, unknown>;
let height: number;
let width: number;
let resize: NodeJS.Timeout;

// write viz code here
export async function drawViz(data: ObjectFormat) {
    updateDimensions();
    let terminated = false;

    window.addEventListener('resize', () => {
        clearTimeout(resize);
        resize = setTimeout(() => { previousData.clear(); terminated = true; drawViz(data); }, 500);
    });

    d3.select('body').selectAll('svg').remove();
    d3.select('body').selectAll('button').remove();
    d3.select('body')
        .append('button')
        .text('Replay')
        .on("click", () => {
            d3.select('body').selectAll('svg').remove()
            previousData.clear();
            terminated = true;
            drawViz(data);
        });

    svg = d3
        .select('body')
        .append('svg')
        .attr('width', width - 20)
        .attr('height', height - 20);

    //Process data
    const dataInfo = common.processData(data.tables.DEFAULT,chartSettings.keyframes);
    const keyframes = dataInfo.keyframes;
    const firstDate = dataInfo.firstDate;

    //Initialize Graph
    transition = svg.transition().duration(0).ease(d3.easeLinear);
    updateGraph(keyframes.get(firstDate), firstDate);

    //Iterate through keyframes
    for(const keyframe of keyframes){
        if (terminated) { break; }
        transition = svg.transition().duration(chartSettings.duration).ease(d3.easeLinear)
        updateGraph(keyframe[1],keyframe[0]);
        await transition.end();

        for (const d of keyframe[1]) {
            previousData.set(d.name, d.value);
        }
    }
    console.log(keyframes);
};

function updateYAxis(data: Array<common.MotionChartData>) {
    yScale.domain([...data].filter(a => a.value !== null).sort((a, b) => d3.descending(a.value, b.value)).map((d) => d.rank).slice(0,chartSettings.bars));
    let yAxis: d3.Selection<SVGGElement, unknown, HTMLElement, unknown> = svg.select('.axis--y');
    if (yAxis.empty()) {
        yAxis = svg.append('g')
            .attr('class', 'axis axis--y')
            .attr("transform", "translate(15,0)");
    }
};

function updateXAxis(data: Array<common.MotionChartData>) {
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

function updateBars(data: Array<common.MotionChartData>) {
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

function updateLabels(data: Array<common.MotionChartData>) {
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
};

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
        .text(date.toString().slice(0, 4))
};

function updateGraph(data: Array<common.MotionChartData>, date: number) {
    updateYAxis(data);
    updateXAxis(data);
    updateBars(data);
    updateLabels(data);
    updateTitle(date);
};

function updateDimensions() {
    height = dscc.getHeight() - PAD_SVG;
    width = dscc.getWidth() - PAD_SVG;
    xScale
        .range([0, width - PAD_SVG * 2]);
    yScale
        .rangeRound([PAD_YAXIS, height - PAD_YAXIS])
        .padding(0.25);
};
