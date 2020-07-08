import {
    ObjectFormat,
    RowEntry,
    ObjectRow,
    FieldsByConfigId,
    StyleById,
    getHeight,
    getWidth,
    Row
} from '@google/dscc';
import * as d3 from 'd3';

export interface MotionChartData {
    name: string,
    value: number,
    rank: number
}
export interface chartSettings {
    duration: number,
    bars: number,
}
export function processData(vizData: ObjectRow[]) {
    const dataMap: Map<number, Array<MotionChartData>> = new Map();
    let firstDate = 0;

    const allDims = new Set(vizData.map(row => row.dimID[0] as string));

    vizData.forEach(function (row) {
        if (firstDate === 0 || firstDate > +row.dimID[1]) {
            firstDate = +row.dimID[1];
        }

        const data: MotionChartData = {
            name: row.dimID[0].toString(),
            value: +row.metricID[0],
            rank: -1
        }

        if (dataMap.has(+row.dimID[1])) {
            dataMap.get(+row.dimID[1]).push(data);
            // heapSort(dataMap.get(+row.dimID[1]));
            dataMap.get(+row.dimID[1]).forEach(element => element.rank = dataMap.get(+row.dimID[1]).indexOf(element))
        }
        else {
            dataMap.set(+row.dimID[1], [data])
        }
    });

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
        //data.sort((a, b) => a.name.localeCompare(b.name));
    }

    return { dataMap, firstDate };
}

function heap_root(arr: MotionChartData[], i: number, n: number) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < n && arr[left].value < arr[max].value) {
        max = left;
    }

    if (right < n && arr[right].value < arr[max].value) {
        max = right;
    }

    if (max != i) {
        swap(arr, i, max);
        heap_root(arr, max, n);
    }
}

function swap(arr: MotionChartData[], A: number, B: number) {
    const temp: MotionChartData = arr[A];
    arr[A] = arr[B];
    arr[B] = temp;
}

function heapSort(arr: MotionChartData[]) {
    let n = arr.length;

    for (let i = Math.floor(n / 2); i >= 0; i -= 1) {
        heap_root(arr, i, n);
    }
    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        n--;
        heap_root(arr, 0, n);
    }
}

export function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export function textTween(a: number, b: number) {
    const i = d3.interpolateNumber(a, b);
    const formatNumber = d3.format(",d");

    return function (t: number) {
      this.textContent = formatNumber(i(t));
    };
  }

