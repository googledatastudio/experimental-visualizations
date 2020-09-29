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
import * as local from './localMessage';
import { EXPECTED_DATA, EXPECTED_LABELS, EXPECTED_COLORS } from './ExpectedResults';

describe('populateTables', () => {
  test('local msg, 1 metric', () => {
    expect(
      common.populateTables(local.message.tables.DEFAULT, local.message.fields)
    ).toStrictEqual({
      series: [
        {
          data: EXPECTED_DATA,
          name: 'Really small numbers',
        },
      ],
      labels: EXPECTED_LABELS,
    });
  });

  test('local msg2, 2 metrics', () => {
    expect(
      common.populateTables(
        local.message2.tables.DEFAULT,
        local.message2.fields
      )
    ).toStrictEqual({
      series: [
        {
          data: [2, 3, 4, 5, 6],
          name: 'Really small numbers',
        },
        {
          data: [3, 4, 5, 6, 7],
          name: 'Kind of small numbers',
        },
      ],
      labels: ['1', '2', '3', '4', '5'],
    });
  });
});

describe('populateStyle', () => {
  test('local msg', () => {
    const result = common.populateStyle(local.message.style, 28);
    expect(result.chart).toStrictEqual({
      toolbar: { show: false },
      type: 'radar',
    });
    expect(result.datalabels).toStrictEqual({
      enabled: false
    });
    expect(result.fill).toStrictEqual({
      colors: ['#CDDC39', '#0EE396', '#FEB019', '#FF4560', '#775DD0'],
      opacity: 0.5,
    });
    expect(result.legend).toStrictEqual({
      position: "bottom",
      show: true,
      showForSingleSeries: true,
      fontSize:'11px',
        fontFamily:'Arial',
        labels:{
            colors:'red',
        },
      markers: {
        fillColors: ['#CDDC39', '#0EE396', '#FEB019', '#FF4560', '#775DD0'],
      }
    });
    expect(result.markers).toStrictEqual({
      colors: ['#CDDC39', '#0EE396', '#FEB019', '#FF4560', '#775DD0'],
      size: 4,
    });
    expect(result.plotoptions).toStrictEqual({
      radar: {
        polygons: {
          strokeColors: 'white',
          fill: {
            colors: ['green', '#FFFFFF'],
          }
        }
      }
    });
    expect(result.stroke).toStrictEqual({
      colors: ['#CDDC39', '#0EE396', '#FEB019', '#FF4560', '#775DD0'],
      curve: 'smooth',
      dashArray: 0,
      lineCap: 'butt',
      show: true,
      width: 2,
    });
    expect(result.tooltip).toStrictEqual({
      marker: { show: false }
    });
    expect(result.xaxis).toStrictEqual({
      labels: {
        show: true,
        style: {
          colors: EXPECTED_COLORS,
          fontFamily: 'Arial',
          fontSize: '11px',
        },
      },
    });
    expect(result.yaxis).toStrictEqual({
        show: true,
        floating:true,
        labels: {
          style: {
            colors: 'red',
            fontFamily: 'Arial',
            fontSize: '11px',
          },
        },

    });

  });
});


describe('populateFill', () => {
  test('enabled', () => {
    expect(common.populateFill(true, 0.9, ['red', 'green'])).toStrictEqual({
      opacity: 0.9,
      colors: ['red', 'green'],
    });
  });

  test('disabled', () => {
    expect(common.populateFill(false, 0.9, ['red', 'green'])).toStrictEqual({
      opacity: 0,
      colors: ['red', 'green'],
    });
  });
});

describe('populateMarkers', () => {
  test('enabled, default', () => {
    expect(
      common.populateMarkers(true, 'default', ['red', 'green'])
    ).toStrictEqual({
      size: 4,
      colors: ['red', 'green'],
    });
  });

  test('enabled, not default', () => {
    expect(
      common.populateMarkers(true, 'not default', ['red', 'green'])
    ).toStrictEqual({
      size: 0,
      colors: ['red', 'green'],
    });
  });

  test('disabled, default', () => {
    expect(
      common.populateMarkers(false, 'default', ['red', 'green'])
    ).toStrictEqual({
      size: 0,
      colors: ['red', 'green'],
    });
  });
});

describe('populateDataLabels', () => {
  test('enabled, data', () => {
    expect(
      common.populateDataLabels(true, 'data', ['red', 'green'],'Arial')
    ).toStrictEqual({
      enabled: true,
      style: {
        fontFamily:'Arial',
        colors: ['red', 'green'],
      },
      background: {
        enabled: true,
        borderRadius: 2,
        dropShadow: {
          enabled: false,
        },
      },
    });
  });

  test('enabled, not data', () => {
    expect(
      common.populateDataLabels(true, 'not data', ['red', 'green'],'Arial')
    ).toStrictEqual({
      enabled: false,
    });
  });

  test('disabled', () => {
    expect(
      common.populateDataLabels(true, 'not data', ['red', 'green'],'Arial')
    ).toStrictEqual({
      enabled: false,
    });
  });
});

describe('populatePlotOptions', () => {
  test('2 strings', () => {
    expect(common.populatePlotOptions('red', 'red')).toStrictEqual({
      radar: {
        polygons: {
          strokeColors: 'white',
          fill: {
            colors: ['red', 'red'],
          },
        },
      },
    });
  });

  test('1 string, 1 empty', () => {
    expect(common.populatePlotOptions('red', '')).toStrictEqual({
      radar: {
        polygons: {
          strokeColors: 'white',
          fill: {
            colors: ['red', ''],
          },
        },
      },
    });
  });

  test('empty', () => {
    expect(common.populatePlotOptions('', '')).toStrictEqual({
      radar: {
        polygons: {
          strokeColors: 'white',
          fill: {
            colors: ['', ''],
          },
        },
      },
    });
  });
});

describe('populateXAxis', () => {
  test('enabled, 5 colors', () => {
    expect(
      common.populateXAxis(
        true,
        { color: 'red', size: 10.4352, family: 'Arial' },
        5
      )
    ).toStrictEqual({
      labels: {
        show: true,
        style: {
          colors: ['red', 'red', 'red', 'red', 'red'],
          fontSize: '10.4352px',
          fontFamily: 'Arial',
        },
      },
    });
  });

  test('enabled, 1 color', () => {
    expect(
      common.populateXAxis(
        true,
        { color: 'red', size: 10.4352, family: 'Arial' },
        1
      )
    ).toStrictEqual({
      labels: {
        show: true,
        style: {
          colors: ['red'],
          fontSize: '10.4352px',
          fontFamily: 'Arial',
        },
      },
    });
  });

  test('disabled', () => {
    expect(
      common.populateXAxis(
        false,
        { color: 'red', size: 10.4352, family: 'Arial' },
        5
      )
    ).toStrictEqual({
      labels: {
        show: false,
      },
    });
  });
});

describe('populateYAxis', () => {
  test('enabled', () => {
    expect(
      common.populateYAxis(true, { color: 'red', size: 10.4352, family: 'Arial' })
    ).toStrictEqual({
      show: true,
      floating:true,
      labels: {
        style: {
          colors: 'red',
          fontSize: '10.4352px',
          fontFamily: 'Arial',
        },
      },
    });
  });

  test('disabled', () => {
    expect(
      common.populateYAxis(false, {
        color: 'red',
        size: 10.4352,
        family: 'Arial',
      })
    ).toStrictEqual({
      show: false,
      floating:true,
      labels: {
        style: {
          colors: 'red',
          fontSize: '10.4352px',
          fontFamily: 'Arial',
        },
      },
    });
  });

});

describe('populateStroke', () => {
  test('empty', () => {
    expect(common.populateStroke([])).toStrictEqual({
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      width: 2,
      colors: [],
      dashArray: 0,
    });
  });

  test('one item', () => {
    expect(common.populateStroke(['1'])).toStrictEqual({
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      width: 2,
      colors: ['1'],
      dashArray: 0,
    });
  });

  test('multiple', () => {
    expect(common.populateStroke(['1', 'red', '#ffffff'])).toStrictEqual({
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      width: 2,
      colors: ['1', 'red', '#ffffff'],
      dashArray: 0,
    });
  });
});

describe('populateLegend', () => {
  test('empty', () => {
    expect(common.populateLegend(true, "bottom", [],{ color: 'red', size: 10.4352, family: 'Arial' })).toStrictEqual({
      position: "bottom",
      show: true,
      showForSingleSeries: true,
      fontSize:'10.4352px',
        fontFamily:'Arial',
        labels:{
            colors:'red',
        },
      markers: {
        fillColors: [],
      },
    });
  });

  test('one item', () => {
    expect(common.populateLegend(false, "bottom", ['1'],{ color: 'red', size: 10.4352, family: 'Arial' })).toStrictEqual({
      position: "bottom",
      show: false,
      showForSingleSeries: true,
      fontSize:'10.4352px',
        fontFamily:'Arial',
        labels:{
            colors:'red',
        },
      markers: {
        fillColors: ['1'],
      },
    });
  });

  test('multiple', () => {
    expect(common.populateLegend(true, "bottom", ['1', 'red', '#ffffff'],{ color: 'red', size: 10.4352, family: 'Arial' })).toStrictEqual({
      position: "bottom",
      show: true,
      showForSingleSeries: true,
      fontSize:'10.4352px',
        fontFamily:'Arial',
        labels:{
            colors:'red',
        },
      markers: {
        fillColors: ['1', 'red', '#ffffff'],
      },
    });
  });
});
