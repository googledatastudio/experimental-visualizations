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
}

/**
 * Intakes vizData as ObjectRow and processes it into a DataMap.
 * DataMap maps year to an array of MotionCharData.
 * @param vizData
 */
export function processData(vizData: ObjectRow[]) {
    const dataMap: Map<number, Array<MotionChartData>> = new Map();
    const dateArr: Array<number> = new Array();
    let firstDate: number = null;

    const allDims = new Set(vizData.map(row => row.dimID[0] as string));


    for(const row of vizData) {
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
            for(const element of dataMap.get(currentDate)){element.rank = dataMap.get(currentDate).indexOf(element)}
        }
        else {
            dateArr.push(currentDate);
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
        data.sort((a, b) => d3.descending(a.name, b.name))
    }
    dateArr.sort();
    return { dataMap, dateArr };
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

