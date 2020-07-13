import {
    ObjectRow,
} from '@google/dscc';
import * as d3 from 'd3';

export interface MotionChartData {
    name: string,
    value: number,
    rank: number,
}
export interface ChartSettings {
    duration: number,
    bars: number,
    keyframes:number,
}
interface YearFrame{
    year:number,
    keyframe:MotionChartData[],
}

/**
 * Intakes vizData as ObjectRow and processes it into a DataMap.
 * DataMap maps year to an array of MotionCharData.
 * @param vizData
 */
export function processData(vizData: ObjectRow[],k:number) {
    const dataMap: Map<number, Array<MotionChartData>> = new Map();
    let firstDate: number = null;
    const allDims = new Set(vizData.map(row => row.dimID[0] as string));

    for (const row of vizData) {
        const currentDate = +row.dateID[0];
        if (firstDate === null || firstDate > currentDate) {
            firstDate = currentDate;
        }

        const data: MotionChartData = {
            name: row.dimID[0].toString(),
            value: +row.metricID[0],
            rank: -1
        }

        if (dataMap.has(currentDate)) {
            dataMap.get(currentDate).push(data);
            for (const element of dataMap.get(currentDate)) { element.rank = dataMap.get(currentDate).indexOf(element) }
        }
        else {
            dataMap.set(currentDate, [data])
        }
    };

    // Populate remaining dims with dummy data
    for (const data of dataMap.values()) {
        const foundDims = new Set(data.map(d => d.name));
        for (const dim of allDims) {
            if (!foundDims.has(dim)) {
                data.push({
                    name: dim,
                    value: null,
                    rank: -1,
                });
            }
        }
    }

    const keyframes = processKeyFrames(dataMap, k);
    return { keyframes, firstDate };
}

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
}

/** 
 * Given two numbers, returns the d3 inerpolation to generate the 'ticker' effect of counting up/down
*/
export function textTween(a: number, b: number) {
    const i = d3.interpolateNumber(a, b);
    const formatNumber = d3.format(",d");

    return function (t: number) {
        this.textContent = formatNumber(i(t));
    };
}

/** 
 * Given the dataMap and desired k number of frames,
 * turns each array in map, into k interpolated arrays
*/
export function processKeyFrames(dataMap: Map<number, MotionChartData[]>, k: number) {
    const keyframes = new Map<number, MotionChartData[]>();
    const yearFrame = new Array<YearFrame>();
    for (const data of dataMap) {
        yearFrame.push({year:data[0],keyframe:data[1]});
    }
    yearFrame.sort((a: YearFrame, b: YearFrame) => d3.ascending(a.year, b.year))

    for (const data of d3.pairs(yearFrame)) {
        for (let i = 0; i < k + 1; ++i) {
            keyframes.set(
                dateInterpolate(data[0].year, data[1].year, i, k),
                valueInterpolate(data[0].keyframe, data[1].keyframe, i, k)
            )
        }
    }
    return keyframes;
}

/**
 * Given two dates, interpolates k values between them 
 * */
function dateInterpolate(d1: number, d2: number, i: number, k: number) {
    const interval = (d2 - d1) / (k);
    return (d1 + (i * interval));
}

/**
 * Given two arrays of MotionChartData, interpolates the k values between them
*/
function valueInterpolate(a1: Array<MotionChartData>, a2: Array<MotionChartData>, i: number, k: number) {
    const copy = new Array<MotionChartData>();
    const sortedA1=[...a1].sort((a, b) => d3.descending(a.name, b.name));
    const sortedA2=[...a2].sort((a, b) => d3.descending(a.name, b.name));
    for (let j = 0; j < a1.length; ++j) { 
        const interval = ((sortedA2[j].value - sortedA1[j].value)) / (k);
        copy.push({
            name:sortedA1[j].name,
            value:(sortedA1[j].value + (i * interval)),
            rank:sortedA1[j].rank
        })
        
     }
    return copy;
}
