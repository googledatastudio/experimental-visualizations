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

import { ObjectRow, ThemeStyle } from '@google/dscc';
import * as d3 from 'd3';

export interface MotionChartData {
    name: string,
    value: number,
    rank: number,
};
export interface ChartSettings {
    duration: number,
    bars: number,
    kvalue: string,
    keyframes:number,
    colorOption: string,
    colorSelected: string,
};
interface YearFrame {
    year: number,
    keyframe: MotionChartData[],
};

/**
 * Intakes vizData as ObjectRow and processes it into a DataMap.
 * DataMap maps year to an array of MotionCharData. K received
 * is the amount of interpolated frames generated per frame given
 * @param vizData
 */
export function processData(vizData: ObjectRow[], numFrames: number) {
    const dataMap: Map<number, Array<MotionChartData>> = new Map();
    let firstDate: number = 0;
    let lastDate: number = 0;
    const allDims = new Set(vizData.map(row => row.dimID[0] as string));

    for (const row of vizData) {
        const currentDate = +row.dateID[0];
        if (firstDate === 0 || firstDate > currentDate) {
            firstDate = currentDate;
        }
        if (lastDate === 0 || lastDate < currentDate) {
            lastDate = currentDate;
        }


        const data: MotionChartData = {
            name: row.dimID[0].toString(),
            value: +row.metricID[0],
            rank: -1
        }
        const arr = dataMap.get(currentDate);
        if (arr != undefined) {
            arr.push(data);
            for (const element of arr) { element.rank = arr.indexOf(element); }
        }
        else {
            dataMap.set(currentDate, [data]);
        }
    };

    // Populate remaining dims with dummy data
    for (const data of dataMap.values()) {
        const foundDims = new Set(data.map(d => d.name));
        for (const dim of allDims) {
            if (!foundDims.has(dim)) {
                data.push({
                    name: dim.toString(),
                    value: 0,
                    rank: -1,
                });
            }
        }
    }
    //TODO: Granularity algorithm is fully built as show below, however there are some performace issues
    //The viz slows down when resizing and when play/paused. In order to enable it, 'k' needs to be passed into this processData function.
    /*const first = new Date(+firstDate.toString().slice(0, 4), +firstDate.toString().slice(4, 6) - 1, +firstDate.toString().slice(6, 8));
    const last = new Date(+lastDate.toString().slice(0, 4), +lastDate.toString().slice(4, 6) - 1, +lastDate.toString().slice(6, 8));
    const keyframes = processGranularity(dataMap, fetchDateArray(first, last, k));*/
    const keyframes = processKeyFrames(dataMap, numFrames);
    return keyframes;
};

/**
 * Returns a randomly generated 6 character hex color code.
 */
export function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

/** 
 * Given two numbers, returns the d3 inerpolation to generate the 'ticker' effect of counting up/down
*/
export function textTween(a: number, b: number) {
    const i = d3.interpolateNumber(a, b);
    const formatNumber = d3.format(",d");

    return function (this: HTMLElement, t: number) {
        this.textContent = formatNumber(i(t));
    };
};

/** 
 * Given the dataMap and desired k number of frames,
 * turns each array in map, into k interpolated arrays
*/
export function processKeyFrames(dataMap: Map<number, MotionChartData[]>, k: number) {
    const keyframes = new Map<number, MotionChartData[]>();
    const yearFrame = new Array<YearFrame>();
    for (const data of dataMap) {
        yearFrame.push({ year: data[0], keyframe: data[1] });
    }
    yearFrame.sort((a: YearFrame, b: YearFrame) => d3.ascending(a.year, b.year));

    for (const data of d3.pairs(yearFrame)) {
        for (let i = 0; i < k + 1; ++i) {
            keyframes.set(
                dateInterpolate(data[0].year, data[1].year, i, k),
                valueInterpolate(data[0].keyframe, data[1].keyframe, i, k)
            );
        }
    }
    return keyframes;
};

/**
 * Given two dates, interpolates k values between them 
 * */
export function dateInterpolate(date1: number, date2: number, i: number, k: number) {
    if (k < 1) { return date1; }
    const distance = Math.floor(daysBetweenDates(date1, date2) * i / k);
    const currentDate = new Date(+date1.toString().slice(0, 4), +date1.toString().slice(4, 6) - 1, +date1.toString().slice(6, 8))
    currentDate.setDate(currentDate.getUTCDate() + distance);
    let dateString = currentDate.getFullYear().toString();

    if (currentDate.getMonth() < 9) {
        dateString += '0' + (currentDate.getMonth() + 1);
    }
    else {
        dateString += currentDate.getMonth() + 1;
    }
    if (currentDate.getDate() < 10) {
        dateString += '0' + currentDate.getDate();
    }
    else {
        dateString += currentDate.getDate();
    }
    return +dateString;
};

/**
 * Given two arrays of MotionChartData, interpolates the k values between them
*/
export function valueInterpolate(a1: Array<MotionChartData>, a2: Array<MotionChartData>, i: number, k: number) {
    const copy = new Array<MotionChartData>();
    const sortedA1 = [...a1].sort((a, b) => d3.descending(a.name, b.name));
    const sortedA2 = [...a2].sort((a, b) => d3.descending(a.name, b.name));
    if (k < 1) { return sortedA1; }
    for (let j = 0; j < a1.length; ++j) {
        const interval = ((sortedA2[j].value - sortedA1[j].value)) / (k);
        copy.push({
            name: sortedA1[j].name,
            value: (sortedA1[j].value + (i * interval)),
            rank: sortedA1[j].rank
        });

    }
    return copy;
};

/**
 * Given the color option selected, returns the appropriate color for the bar
 * Returns randomized color if option is not recognized
 */
export function getBarColor(option: string, d: number, theme: ThemeStyle, selectedColor: string) {
    if (option === 'theme') {
        let i = d;
        const limit = theme.themeSeriesColor.length;
        if (d < 0) { i = Math.floor(Math.random() * limit) }
        return theme.themeSeriesColor[i % limit].color;
    }
    else if (option === 'selected') {
        return selectedColor;
    }
    else {
        return getRandomColor()
    }
};

/** 
 * Given a dataMap and an array of dates, it will return a Map<number, MotionChartData[]>
 * mapping each date in the date array to a corresponding MCD[] using interpolation
 * @param dataMap dataMap from user inputted data
 * @param dates array of the desired dates to be interpolated for
*/
export function processGranularity(dataMap: Map<number, MotionChartData[]>, dates: Array<number>) {
    const keyframes = new Map<number, MotionChartData[]>();
    const yearFrame = new Array<YearFrame>();
    for (const data of dataMap) {
        yearFrame.push({ year: data[0], keyframe: data[1] });
    }
    yearFrame.sort((a: YearFrame, b: YearFrame) => d3.ascending(a.year, b.year));
    for (const d of dates) {
        if (dataMap.has(d)) {
            const sortedData = [...dataMap.get(d)].sort((a, b) => d3.descending(a.name, b.name));
            keyframes.set(d, sortedData);
        }
        else {
            for (const data of d3.pairs(yearFrame)) {
                if (d >= data[0].year && d <= data[1].year) {
                    const i = daysBetweenDates(data[0].year, d); //distance between lower and given date
                    const k = daysBetweenDates(data[0].year, data[1].year); //distance between upper and lower dates
                    keyframes.set(
                        d,
                        valueInterpolate(data[0].keyframe, data[1].keyframe, i, k)
                    );
                    break;
                }
            }
        }
    }
    return keyframes;

};

/** 
 * Given a starting and ending date, this function returns every date in the range iterating by the
 * input paramter k. 
 * Ex; If k is 'w', for week, it will return every 7th day in between the two dates
 * @param first The starting date
 * @param last The ending date
 * @param k User inputted granularity option (i.e y=year, m=month, w=week, d=day)
*/
export function fetchDateArray(first: Date, last: Date, k: string) {
    const numDates = new Array<number>();
    let currentDate: Date = new Date(first);
    while (currentDate <= last) {
        let dateString = currentDate.getFullYear().toString();
        if (currentDate.getMonth() < 9) {
            dateString += '0' + (currentDate.getMonth() + 1);
        }
        else {
            dateString += currentDate.getMonth() + 1;
        }
        if (currentDate.getDate() < 10) {
            dateString += '0' + currentDate.getDate();
        }
        else {
            dateString += currentDate.getDate();
        }
        numDates.push(+dateString)

        if (k === 'y') {
            currentDate.setFullYear(currentDate.getFullYear() + 1);
        }
        else if (k === 'm') {
            currentDate.setMonth(currentDate.getMonth() + 1);
        }
        else if (k === 'w') {
            currentDate.setDate(currentDate.getDate() + 7);
        }
        else {
            currentDate.setDate(currentDate.getDate() + 1);
        }
    }
    return numDates;
};

/**
 * Given two dates, returns the number of days between the two dates
 * @param date1 Starting date
 * @param date2 Ending date
 */
export function daysBetweenDates(date1: number, date2: number) {
    const a = new Date(+date1.toString().slice(0, 4), +date1.toString().slice(4, 6) - 1, +date1.toString().slice(6, 8));
    const b = new Date(+date2.toString().slice(0, 4), +date2.toString().slice(4, 6) - 1, +date2.toString().slice(6, 8));
    return Math.abs(b.getTime() - a.getTime()) / (1000 * 3600 * 24);
};