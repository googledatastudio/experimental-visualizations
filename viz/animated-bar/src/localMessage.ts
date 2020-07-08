import { ObjectFormat, FieldType, ConceptType } from '@google/dscc';

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
        dimID: ['25-54', 1999],
        metricID: [1500],
      },
      {
        dimID: ['0-14', 1999],
        metricID: [2000],
      },
      {
        dimID: ['65+', 1999],
        metricID: [2500],
      },
      {
        dimID: ['15-24', 1999],
        metricID: [3000],
      },
      {
        dimID: ['55-64', 1999],
        metricID: [5000],
      },
      {
        dimID: ['25-54', 2000],
        metricID: [15000],
      },
      {
        dimID: ['0-14', 2000],
        metricID: [20000],
      },
      {
        dimID: ['65+', 2000],
        metricID: [25000],
      },
      {
        dimID: ['55-64', 2000],
        metricID: [5000],
      },
      {
        dimID: ['25-54', 2001],
        metricID: [128863172],
      },
      {
        dimID: ['0-14', 2001],
        metricID: [61175933],
      },
      {
        dimID: ['65+', 2001],
        metricID: [51055052],
      },
      {
        dimID: ['15-24', 2001],
        metricID: [43351778],
      }, {
        dimID: ['80-90', 2001],
        metricID: [3000000],
      }, {
        dimID: ['90-100', 2001],
        metricID: [89000000],
      },
      {
        dimID: ['25-54', 2002],
        metricID: [128863172],
      },
      {
        dimID: ['0-14', 2002],
        metricID: [61175933],
      },
      {
        dimID: ['65+', 2002],
        metricID: [51055052],
      },
      {
        dimID: ['15-24', 2002],
        metricID: [43351778],
      }, {
        dimID: ['80-90', 2002],
        metricID: [300000000],
      }, {
        dimID: ['90-100', 2002],
        metricID: [89000000],
      }
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


export const message2: ObjectFormat = {
  tables: {
    DEFAULT: [
      {
        dimID: ['Google', 1999],
        metricID: [1500],
      },
      {
        dimID: ['Google', 2001],
        metricID: [2000],
      },
      {
        dimID: ['Google', 2002],
        metricID: [2500],
      },
      {
        dimID: ['Google', 2003],
        metricID: [3000],
      },
      {
        dimID: ['Google', 2004],
        metricID: [3500],
      },
      {
        dimID: ['Google', 2005],
        metricID: [5000],
      },
      {
        dimID: ['Amazon', 1999],
        metricID: [1000],
      },
      {
        dimID: ['Amazon', 2001],
        metricID: [1500],
      },
      {
        dimID: ['Amazon', 2002],
        metricID: [2000],
      },
      {
        dimID: ['Amazon', 2003],
        metricID: [3500],
      },
      {
        dimID: ['Amazon', 2004],
        metricID: [5000],
      },
      {
        dimID: ['Amazon', 2005],
        metricID: [6000],
      },
      {
        dimID: ['Facebook', 1999],
        metricID: [2000],
      },
      {
        dimID: ['Facebook', 2001],
        metricID: [2500],
      },
      {
        dimID: ['Facebook', 2002],
        metricID: [3000],
      },
      {
        dimID: ['Facebook', 2003],
        metricID: [3500],
      },
      {
        dimID: ['Facebook', 2004],
        metricID: [5000],
      },
      {
        dimID: ['Facebook', 2005],
        metricID: [9000],
      },
      {
        dimID: ['Samsung', 1999],
        metricID: [1000],
      },
      {
        dimID: ['Samsung', 2001],
        metricID: [1500],
      },
      {
        dimID: ['Samsung', 2002],
        metricID: [2000],
      },
      {
        dimID: ['Samsung', 2003],
        metricID: [2500],
      },
      {
        dimID: ['Samsung', 2004],
        metricID: [3000],
      },
      {
        dimID: ['Samsung', 2005],
        metricID: [3500],
      },
      {
        dimID: ['Uber', 1999],
        metricID: [2000],
      },
      {
        dimID: ['Uber', 2001],
        metricID: [2500],
      },
      {
        dimID: ['Uber', 2002],
        metricID: [2750],
      },
      {
        dimID: ['Uber', 2003],
        metricID: [3000],
      },
      {
        dimID: ['Uber', 2004],
        metricID: [2000],
      },
      {
        dimID: ['Uber', 2005],
        metricID: [4000],
      },
    ]
  },
  fields: {
    dimID: [
      {
        id: 'qt_nzqx6a0xvb',
        name: 'Company Name',
        type: FieldType.TEXT,
        concept: ConceptType.DIMENSION,
      },
    ],
    metricID: [
      {
        id: 'qt_8isx6a0xvb',
        name: 'Value',
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
  interactions: {}
}
