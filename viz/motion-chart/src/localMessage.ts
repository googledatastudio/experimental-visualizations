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
        dimID: ['25-54'],
        metricID: [128863172],
      },
      {
        dimID: ['0-14'],
        metricID: [61175933],
      },
      {
        dimID: ['65+'],
        metricID: [51055052],
      },
      {
        dimID: ['15-24'],
        metricID: [43351778],
      },
      {
        dimID: ['55-64'],
        metricID: [42179856],
      },
    ],
  },
  fields: {
    dimID: [
      {
        id: 'qt_nzqx6a0xvb',
        name: 'Age Group',
        type: FieldType.TEXT,
        concept: ConceptType.DIMENSION,
      },
    ],
    metricID: [
      {
        id: 'qt_8isx6a0xvb',
        name: 'Population',
        type: FieldType.NUMBER,
        concept: ConceptType.METRIC,
      },
    ],
  },
  theme: {
    themeFillColor: {
      color: 'white',
    },
    themeFontColor: {
      color: 'black',
    },
    themeAccentFillColor: {
      color: 'black',
    },
    themeAccentFontColor: {
      color: 'white',
    },
    themeFontFamily: 'Roboto',
    themeAccentFontFamily: 'Roboto',
    themeIncreaseColor: {
      color: 'darkgray',
    },
    themeDecreaseColor: {
      color: 'lightgray',
    },
    themeGridColor: {
      color: 'red',
    },
    themeSeriesColor: [],
  },
  style: {},
  interactions: {},
};
