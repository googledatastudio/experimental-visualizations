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

import {ObjectFormat, FieldType, ConceptType} from '@google/dscc';

/**
 * This file provides the mock "data" received
 * by your visualization code when you develop
 * locally.
 *
 */

export const message: ObjectFormat = {
  tables: {
    DEFAULT: [
      {
        dimID: ['20160228'],
        metricID: [5.497282126241078],
      },
      {
        dimID: ['20160227'],
        metricID: [1.7849991884376002],
      },
      {
        dimID: ['20160226'],
        metricID: [3.6951131605214327],
      },
      {
        dimID: ['20160225'],
        metricID: [4.425749177168392],
      },
      {
        dimID: ['20160224'],
        metricID: [6.02078932905799],
      },
      {
        dimID: ['20160223'],
        metricID: [2.159520908381245],
      },
      {
        dimID: ['20160222'],
        metricID: [1.4574190317115754],
      },
      {
        dimID: ['20160221'],
        metricID: [4.993713844467656],
      },
      {
        dimID: ['20160220'],
        metricID: [5.811167482902135],
      },
      {
        dimID: ['20160219'],
        metricID: [5.466459959022769],
      },
      {
        dimID: ['20160218'],
        metricID: [1.5217095262576177],
      },
      {
        dimID: ['20160217'],
        metricID: [2.7248381125378054],
      },
      {
        dimID: ['20160216'],
        metricID: [3.2216148107443874],
      },
      {
        dimID: ['20160215'],
        metricID: [2.802966655574305],
      },
      {
        dimID: ['20160214'],
        metricID: [2.8325728966815626],
      },
      {
        dimID: ['20160213'],
        metricID: [4.78738448961993],
      },
      {
        dimID: ['20160212'],
        metricID: [3.733526048977902],
      },
      {
        dimID: ['20160211'],
        metricID: [3.3787552698419026],
      },
      {
        dimID: ['20160210'],
        metricID: [4.025778778051834],
      },
      {
        dimID: ['20160209'],
        metricID: [5.35835164970315],
      },
      {
        dimID: ['20160208'],
        metricID: [2.963131601596341],
      },
      {
        dimID: ['20160207'],
        metricID: [4.947689713018692],
      },
      {
        dimID: ['20160206'],
        metricID: [1.8820670314435788],
      },
      {
        dimID: ['20160205'],
        metricID: [4.87865547464154],
      },
      {
        dimID: ['20160204'],
        metricID: [3.4008552077242595],
      },
      {
        dimID: ['20160203'],
        metricID: [5.527218073402578],
      },
      {
        dimID: ['20160202'],
        metricID: [3.74802231619604],
      },
      {
        dimID: ['20160201'],
        metricID: [0.32142154440233073],
      },
    ],
  },
  fields: {
    dimID: [
      {
        id: 'qt_3zx5rwt08b',
        name: '1 Month Times',
        type: FieldType.YEAR_MONTH_DAY,
        concept: ConceptType.DIMENSION,
      },
    ],
    metricID: [
      {
        id: 'qt_0grczm838b',
        name: 'Really small numbers',
        type: FieldType.NUMBER,
        concept: ConceptType.METRIC,
      },
    ],
  },
  style: {
    fillRadar: {
      value: true,
      defaultValue: false,
    },
    fillOpacity: {
      value: 0.5,
      defaultValue: 0.2,
    },
    showMarkers: {
      value: true,
      defaultValue: true,
    },
    markerType: {
      value: 'default',
      defaultValue: 'default',
    },
    fillColor1: {
      value: {
        color: '#CDDC39',
        opacity: 1,
      },
      defaultValue: {
        color: '#008FFB',
      },
    },
    fillColor2: {
      value: {
        color: '#0EE396',
      },
      defaultValue: {
        color: '#0EE396',
      },
    },
    fillColor3: {
      value: {
        color: '#FEB019',
      },
      defaultValue: {
        color: '#FEB019',
      },
    },
    fillColor4: {
      value: {
        color: '#FF4560',
      },
      defaultValue: {
        color: '#FF4560',
      },
    },
    fillColor5: {
      value: {
        color: '#775DD0',
      },
      defaultValue: {
        color: '#775DD0',
      },
    },
    plotColor1: {
      value: {
        color: 'green',
      },
      defaultValue: {
        color: '#FFFFFF',
      },
    },
    plotColor2: {
      value: {
        color: '#FFFFFF',
        opacity: 1,
      },
      defaultValue: {
        color: '#FFFFFF',
      },
    },
    enableXAxis: {
      value: true,
      defaultValue: true,
    },
    enableYAxis: {
      value: true,
      defaultValue: true,
    },
    axisFontColor: {
      value: {
        color: 'red',
        opacity: 1,
      },
      defaultValue: {
        color: '#0000ff',
      },
    },
    axisFontSize: {
      value: 11,
      defaultValue: 10,
    },
    axisFontFamily: {
      value: 'Arial',
      defaultValue: 'auto',
    },
    enableLegend:{
      value:true,
      defaultValue:true
    },
    legendPosition:{
      value:"bottom",
      defaultValue:"bottom"
    }
  },
  theme: {
    themeFillColor: {
      color: '#ffffff',
      themeRef: {
        index: 0,
      },
    },
    themeFontColor: {
      color: '#000000',
      themeRef: {
        index: 1,
      },
    },
    themeFontFamily: 'Roboto',
    themeAccentFillColor: {
      color: '#e0e0e0',
      themeRef: {
        index: 2,
      },
    },
    themeAccentFontColor: {
      color: '#000000',
      themeRef: {
        index: 3,
      },
    },
    themeAccentFontFamily: 'Roboto',
    themeSeriesColor: [
      {
        color: '#0072f0',
        seriesRef: {
          index: 0,
        },
        themeRef: {
          index: 4,
        },
      },
      {
        color: '#00b6cb',
        seriesRef: {
          index: 1,
        },
        themeRef: {
          index: 5,
        },
      },
      {
        color: '#f10096',
        seriesRef: {
          index: 2,
        },
        themeRef: {
          index: 6,
        },
      },
      {
        color: '#f66d00',
        seriesRef: {
          index: 3,
        },
        themeRef: {
          index: 7,
        },
      },
      {
        color: '#ffa800',
        seriesRef: {
          index: 4,
        },
        themeRef: {
          index: 8,
        },
      },
      {
        color: '#7cb342',
        seriesRef: {
          index: 5,
        },
        themeRef: {
          index: 9,
        },
      },
      {
        color: '#5e35b1',
        seriesRef: {
          index: 6,
        },
      },
      {
        color: '#03a9f4',
        seriesRef: {
          index: 7,
        },
      },
      {
        color: '#ec407a',
        seriesRef: {
          index: 8,
        },
      },
      {
        color: '#ff7043',
        seriesRef: {
          index: 9,
        },
      },
      {
        color: '#737373',
        seriesRef: {
          index: 10,
        },
      },
      {
        color: '#f15a60',
        seriesRef: {
          index: 11,
        },
      },
      {
        color: '#7ac36a',
        seriesRef: {
          index: 12,
        },
      },
      {
        color: '#5a9bd4',
        seriesRef: {
          index: 13,
        },
      },
      {
        color: '#faa75a',
        seriesRef: {
          index: 14,
        },
      },
      {
        color: '#9e67ab',
        seriesRef: {
          index: 15,
        },
      },
      {
        color: '#ce7058',
        seriesRef: {
          index: 16,
        },
      },
      {
        color: '#d77fb3',
        seriesRef: {
          index: 17,
        },
      },
      {
        color: '#81d4fa',
        seriesRef: {
          index: 18,
        },
      },
      {
        color: '#f48fb1',
        seriesRef: {
          index: 19,
        },
      },
    ],
    themeIncreaseColor: {
      color: '#388e3c',
    },
    themeDecreaseColor: {
      color: '#f44336',
    },
    themeGridColor: {
      color: '#d1d1d1',
    },
  },
  interactions: {},
};
export const message2: ObjectFormat = {
  tables: {
    DEFAULT: [
      {
        dimID: ['1'],
        metricID: [2, 3],
      },
      {
        dimID: ['2'],
        metricID: [3, 4],
      },
      {
        dimID: ['3'],
        metricID: [4, 5],
      },
      {
        dimID: ['4'],
        metricID: [5, 6],
      },
      {
        dimID: ['5'],
        metricID: [6, 7],
      },
    ],
  },
  fields: {
    dimID: [
      {
        id: 'qt_3zx5rwt08b',
        name: '1 Month Times',
        type: FieldType.YEAR_MONTH_DAY,
        concept: ConceptType.DIMENSION,
      },
    ],
    metricID: [
      {
        id: 'qt_0grczm838b',
        name: 'Really small numbers',
        type: FieldType.NUMBER,
        concept: ConceptType.METRIC,
      },
      {
        id: 'qt_0grczm838a',
        name: 'Kind of small numbers',
        type: FieldType.NUMBER,
        concept: ConceptType.METRIC,
      },
    ],
  },
  style: {
    fillRadar: {
      value: true,
      defaultValue: false,
    },
    fillOpacity: {
      value: 0.5,
      defaultValue: 0.2,
    },
    showMarkers: {
      value: true,
      defaultValue: true,
    },
    markerType: {
      value: 'default',
      defaultValue: 'default',
    },
    fillColor1: {
      value: {
        color: '#CDDC39',
        opacity: 1,
      },
      defaultValue: {
        color: '#008FFB',
      },
    },
    fillColor2: {
      value: {
        color: '#0EE396',
      },
      defaultValue: {
        color: '#0EE396',
      },
    },
    fillColor3: {
      value: {
        color: '#FEB019',
      },
      defaultValue: {
        color: '#FEB019',
      },
    },
    fillColor4: {
      value: {
        color: '#FF4560',
      },
      defaultValue: {
        color: '#FF4560',
      },
    },
    fillColor5: {
      value: {
        color: '#775DD0',
      },
      defaultValue: {
        color: '#775DD0',
      },
    },
    plotColor1: {
      value: {
        color: 'green',
      },
      defaultValue: {
        color: '#FFFFFF',
      },
    },
    plotColor2: {
      value: {
        color: '#FFFFFF',
        opacity: 1,
      },
      defaultValue: {
        color: '#FFFFFF',
      },
    },
    enableXAxis: {
      value: true,
      defaultValue: true,
    },
    enableYAxis: {
      value: true,
      defaultValue: true,
    },
    axisFontColor: {
      value: {
        color: 'red',
        opacity: 1,
      },
      defaultValue: {
        color: '#0000ff',
      },
    },
    axisFontSize: {
      value: 11,
      defaultValue: 10,
    },
    axisFontFamily: {
      value: 'Arial',
      defaultValue: 'auto',
    },
  },
  theme: {
    themeFillColor: {
      color: '#ffffff',
      themeRef: {
        index: 0,
      },
    },
    themeFontColor: {
      color: '#000000',
      themeRef: {
        index: 1,
      },
    },
    themeFontFamily: 'Roboto',
    themeAccentFillColor: {
      color: '#e0e0e0',
      themeRef: {
        index: 2,
      },
    },
    themeAccentFontColor: {
      color: '#000000',
      themeRef: {
        index: 3,
      },
    },
    themeAccentFontFamily: 'Roboto',
    themeSeriesColor: [
      {
        color: '#0072f0',
        seriesRef: {
          index: 0,
        },
        themeRef: {
          index: 4,
        },
      },
      {
        color: '#00b6cb',
        seriesRef: {
          index: 1,
        },
        themeRef: {
          index: 5,
        },
      },
      {
        color: '#f10096',
        seriesRef: {
          index: 2,
        },
        themeRef: {
          index: 6,
        },
      },
      {
        color: '#f66d00',
        seriesRef: {
          index: 3,
        },
        themeRef: {
          index: 7,
        },
      },
      {
        color: '#ffa800',
        seriesRef: {
          index: 4,
        },
        themeRef: {
          index: 8,
        },
      },
      {
        color: '#7cb342',
        seriesRef: {
          index: 5,
        },
        themeRef: {
          index: 9,
        },
      },
      {
        color: '#5e35b1',
        seriesRef: {
          index: 6,
        },
      },
      {
        color: '#03a9f4',
        seriesRef: {
          index: 7,
        },
      },
      {
        color: '#ec407a',
        seriesRef: {
          index: 8,
        },
      },
      {
        color: '#ff7043',
        seriesRef: {
          index: 9,
        },
      },
      {
        color: '#737373',
        seriesRef: {
          index: 10,
        },
      },
      {
        color: '#f15a60',
        seriesRef: {
          index: 11,
        },
      },
      {
        color: '#7ac36a',
        seriesRef: {
          index: 12,
        },
      },
      {
        color: '#5a9bd4',
        seriesRef: {
          index: 13,
        },
      },
      {
        color: '#faa75a',
        seriesRef: {
          index: 14,
        },
      },
      {
        color: '#9e67ab',
        seriesRef: {
          index: 15,
        },
      },
      {
        color: '#ce7058',
        seriesRef: {
          index: 16,
        },
      },
      {
        color: '#d77fb3',
        seriesRef: {
          index: 17,
        },
      },
      {
        color: '#81d4fa',
        seriesRef: {
          index: 18,
        },
      },
      {
        color: '#f48fb1',
        seriesRef: {
          index: 19,
        },
      },
    ],
    themeIncreaseColor: {
      color: '#388e3c',
    },
    themeDecreaseColor: {
      color: '#f44336',
    },
    themeGridColor: {
      color: '#d1d1d1',
    },
  },
  interactions: {},
};
