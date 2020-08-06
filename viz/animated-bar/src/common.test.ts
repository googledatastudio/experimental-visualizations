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

import * as common from './common';
import * as main from './main';
import * as expected from './expectedResults';
import * as local from './localMessage';
import * as d3 from 'd3';

describe('Date Interpolation', () => {
    test('Mid-point', () => {
        expect(common.dateInterpolate(20010101, 20020101, 5, 10)
        ).toStrictEqual(20010702)
    });
    test('Last value', () => {
        expect(common.dateInterpolate(20010101, 20020101, 10, 10)
        ).toStrictEqual(20020101)
    });
    test('No inbetween', () => {
        expect(common.dateInterpolate(20010101, 20020101, 1, 1)
        ).toStrictEqual(20020101)
    });
});

describe('Value Interpolation', () => {
    test('Mid-point', () => {
        expect(common.valueInterpolate(expected.motionChartDataArr1, expected.motionChartDataArr2, 5, 10)
        ).toStrictEqual(expected.expectedInterpolatedArr.sort((a, b) => d3.descending(a.name, b.name)))
    });
});

describe('Random Color', () => {
    test('Random', () => {
        const value = common.getRandomColor();
        expect(value.charAt(0)).toStrictEqual('#');
        expect(value.length).toStrictEqual(7);
    });
});

describe('Data Processing', () => {
    test('KeyFrames', () => {
        const data = common.processData(expected.sampleInputData.tables.DEFAULT, 2);
        for (const key of data.keys()) {
            data.get(key).sort((a, b) => d3.ascending(a.rank, b.rank));
            expected.expectedKeyFrame.get(key).sort((a, b) => d3.ascending(a.rank, b.rank));
        }
        expect(data).toStrictEqual(expected.expectedKeyFrame);
    });
    test('Missing items', () => {
        const data = common.processData(local.message.tables.DEFAULT, 5);
        const cardinality = data.get(20190101).length;
        for (const key of data.keys()) {
            expect(data.get(key).length).toStrictEqual(cardinality);
        }
    });
});

describe('DOM Elements', () => {
    main.drawViz(expected.sampleInputData);
    test('Y Axis', () => {
        const yAxis = d3.select('body').select('svg').select('.axis--y');
        expect(yAxis.attr('transform')).toStrictEqual("translate(15,0)");
    });
    test('X Axis', () => {
        const xAxis = d3.select('body').select('svg').select('.axis--x');
        expect(xAxis.attr('transform')).toStrictEqual("translate(15,25)");
    });
    test('Bars', () => {
        const barsG = d3.select('body').select('svg').select('.bars-g');
        expect(barsG.selectAll('.bar').size()).toStrictEqual(4);
        expect(barsG.select('.bar').attr('transform')).toStrictEqual('translate(15, 25)');
    });
    test('Labels', () => {
        const labelG = d3.select('body').select('svg').select('.labels');
        expect(labelG.selectAll("text").size()).toStrictEqual(4);
        expect(labelG.select('text').text()).toStrictEqual('Google');
    });
    test('Title', () => {
        const title = d3.select('body').select('svg').select('.title');
        expect(title.text()).toStrictEqual('01 Jan 2001');
    })

});

describe('Color Selection', () => {
    test('Theme in bound', () => {
        expect(common.getBarColor('theme', 1, expected.sampleInputData.theme, "#4682b4")).toStrictEqual(
            "#00b6cb"
        );
    });
    test('Theme out of bound', () => {
        expect(common.getBarColor('theme', 50, expected.sampleInputData.theme, "#4682b4")).toStrictEqual(
            "#737373"
        );
    });
    test('Selected Color', () => {
        expect(common.getBarColor('selected', 50, expected.sampleInputData.theme, "#4682b4")).toStrictEqual(
            "#4682b4"
        );
    });
})
