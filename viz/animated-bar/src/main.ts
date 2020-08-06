/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ObjectFormat, ObjectRow, StyleById, ThemeStyle } from '@google/dscc';
import * as d3 from 'd3';
import * as common from './common';

const dscc = require('@google/dscc');
let previousData: ObjectRow[];
const xScale = d3.scaleLinear();
const yScale = d3.scaleBand<number>();
let chartSettings: common.ChartSettings;

const PAD_SVG = 25, PAD_YAXIS = 15;

let svg: d3.Selection<any, unknown, HTMLElement, unknown>;
let transition: d3.Transition<any, unknown, HTMLElement, unknown>;
let height: number;
let width: number;
let resize: NodeJS.Timeout;
let isPaused: boolean = false;
// write viz code here
export async function drawViz(data: ObjectFormat) {
    updateChartSettings(data.style);
    updateDimensions();
    if (!svg || previousData != data.tables.DEFAULT) { initializeSVG(data); }
    previousData = data.tables.DEFAULT;

    //Process data
    const keyframes = common.processData(data.tables.DEFAULT,chartSettings.keyframes);
    const dates = Array.from(keyframes.keys());
    const previousKeyframe: Map<string, number> = new Map();
    
    //Iterate through keyframe
    let i = 0;
    let iterate = true;
    while (iterate) {
        if (previousData != data.tables.DEFAULT) { break; }
        const tDuration = i ? chartSettings.duration : 0
        transition = svg.transition().duration(tDuration).ease(d3.easeLinear)
        updateGraph(keyframes.get(dates[i])!, dates[i], previousKeyframe, data.theme, chartSettings.kvalue);
        await transition.end();
        for (const d of keyframes.get(dates[i])!) {
            previousKeyframe.set(d.name, d.value);
        }
        if (!isPaused) { i++; }
        if (i === dates.length ) { iterate = false; }
    }
};

function updateYAxis(data: Array<common.MotionChartData>) {
    /* This will take keyframe's data, remove null points for current frame, and determine the position of the top n bars
    According to their name and rank */
    yScale.domain([...data]
        .filter(a => a.value !== null)
        .sort((a, b) => d3.descending(a.value, b.value))
        .map((d) => d.rank).slice(0, chartSettings.bars));
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

function updateBars(data: Array<common.MotionChartData>, theme: ThemeStyle) {
    let barsG = svg.select('.bars-g') as d3.Selection<SVGGElement, unknown, HTMLElement, unknown>;

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
                .attr('fill', (d) => common.getBarColor(chartSettings.colorOption, d.rank, theme, chartSettings.colorSelected)),

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

function updateLabels(data: Array<common.MotionChartData>, previousKeyframe: Map<string, number>) {
    let labelG = svg.select('.labels') as d3.Selection<SVGGElement, unknown, HTMLElement, unknown>;
    if (labelG.empty()) {
        labelG = svg.append("g")
            .attr('class', 'labels')
            .style("font-size", `${yScale.bandwidth() / 5}px`)
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
                .attr("transform", (d: common.MotionChartData) => `translate(${xScale(d.value)}, ${yScale(d.rank) || height})`)
                .attr("y", yScale.bandwidth() / 2)
                .attr("font-size", `${yScale.bandwidth() / 5}px`)
                .call(g => g.select("tspan").attr("font-size", `${yScale.bandwidth() / 6}px`)
                    .tween("text", d => common.textTween((previousKeyframe.get(d.name) || d.value), d.value))));
};

function updateTitle(date: number, k: string) {
    const enumMonth = [undefined, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let text = '';
    if (k === 'y') {
        text = date.toString().slice(0, 4);
    }
    else if (k === 'm') {
        text = enumMonth[+date.toString().slice(4, 6)] + ' ' + date.toString().slice(0, 4);
    }
    else {
        text = date.toString().slice(6, 8) + ' ' + enumMonth[+date.toString().slice(4, 6)] + ' ' + date.toString().slice(0, 4);
    }
    svg
        .select('.title')
        .remove();
    svg
        .append("g")
        .attr('class', 'title')
        .append('text')
        .attr("transform", "translate(" + ((width - 20) * .95) + "," + ((height - 20) * .95) + ")")
        .attr("font-size", "3.5vmax")
        .attr('opacity', '60%')
        .attr("text-anchor", 'end')
        .text(text);
};

function updateGraph(data: Array<common.MotionChartData>, date: number, previousKeyframe: Map<string, number>, theme: ThemeStyle, k: string) {
    updateYAxis(data);
    updateXAxis(data);
    updateBars(data, theme);
    updateLabels(data, previousKeyframe);
    updateTitle(date, k);
};

function updateDimensions() {
    height = dscc.getHeight() - PAD_SVG;
    width = dscc.getWidth() - PAD_SVG;
    xScale
        .range([0, width - PAD_SVG * 2]);
    yScale
        .rangeRound([PAD_YAXIS, height - PAD_YAXIS])
        .padding(0.25);
    d3.select('body')
        .select('svg')
        .attr('width', width - 20)
        .attr('height', height - 20);
};

function updateChartSettings(style: StyleById) {
    chartSettings = {
        duration: (+style.duration.value * 1000),
        bars: +style.bars.value,
        kvalue: style.dataGranularity.value,
        keyframes: style.keyframes.value,
        colorOption: style.colorOption.value,
        colorSelected: style.selectedColor.value.color
    }
};

function initializeSVG(data: ObjectFormat) {
    window.addEventListener('resize', () => {
        clearTimeout(resize);
        resize = global.setTimeout(() => { updateDimensions(); }, 500);
    });

    d3.select('body').selectAll('svg').remove();
    d3.select('body').selectAll('button').remove();

    svg = d3
        .select('body')
        .append('svg')
        .attr('width', width - 20)
        .attr('height', height - 20);
    d3.select('body')
        .append('button')
        .attr('class', '.replay')
        .text('Replay')
        .on("click", () => {
            previousData = undefined;
            setTimeout(() => { drawViz(data); }, 100);
        });
    d3.select('body')
        .append('button')
        .text('Play/Pause')
        .attr('class', '.play')
        .on("click", () => {
            isPaused = !isPaused;
        });
};