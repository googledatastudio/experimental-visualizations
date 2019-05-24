export const message = {
  tables: {
    DEFAULT: [
      {
        dimensions: ['Afternoon', 'Sunday'],
        metric: [25],
      },
      {
        dimensions: ['Afternoon', 'Saturday'],
        metric: [25],
      },
      {
        dimensions: ['Afternoon', 'Tuesday'],
        metric: [25],
      },
      {
        dimensions: ['Afternoon', 'Wednesday'],
        metric: [21],
      },
      {
        dimensions: ['Afternoon', 'Monday'],
        metric: [21],
      },
      {
        dimensions: ['Afternoon', 'Thursday'],
        metric: [20],
      },
      {
        dimensions: ['Afternoon', 'Friday'],
        metric: [20],
      },
      {
        dimensions: ['Morning', 'Monday'],
        metric: [19],
      },
      {
        dimensions: ['Morning', 'Saturday'],
        metric: [19],
      },
      {
        dimensions: ['Morning', 'Friday'],
        metric: [19],
      },
      {
        dimensions: ['Evening', 'Tuesday'],
        metric: [18],
      },
      {
        dimensions: ['Morning', 'Wednesday'],
        metric: [18],
      },
      {
        dimensions: ['Morning', 'Sunday'],
        metric: [18],
      },
      {
        dimensions: ['Evening', 'Monday'],
        metric: [17],
      },
      {
        dimensions: ['Evening', 'Saturday'],
        metric: [17],
      },
      {
        dimensions: ['Evening', 'Sunday'],
        metric: [17],
      },
      {
        dimensions: ['Evening', 'Friday'],
        metric: [17],
      },
      {
        dimensions: ['Evening', 'Thursday'],
        metric: [16],
      },
      {
        dimensions: ['Morning', 'Thursday'],
        metric: [15],
      },
      {
        dimensions: ['Evening', 'Wednesday'],
        metric: [15],
      },
      {
        dimensions: ['Morning', 'Tuesday'],
        metric: [15],
      },
    ],
  },
  fields: {
    dimensions: [
      {
        id: 'qt_vqfldhtcxb',
        name: 'Time of Day',
        type: 'TEXT',
        concept: 'DIMENSION',
      },
      {
        id: 'qt_2uomehtcxb',
        name: 'Day',
        type: 'TEXT',
        concept: 'DIMENSION',
      },
    ],
    metric: [
      {
        id: 'qt_lhevfhtcxb',
        name: 'Temperature',
        type: 'NUMBER',
        concept: 'METRIC',
      },
    ],
  },
  style: {
    fontFamily: {
      value: 'Roboto',
      defaultValue: 'Roboto',
    },
    fontSize: {
      value: 10,
      defaultValue: 14,
    },
    showLabels: {
      value: true,
      defaultValue: false,
    },
    showTitle: {
      value: true,
      defaultValue: true,
    },
  },
  theme: {
    themeFillColor: {
      color: '#fff',
      opacity: 1,
    },
    themeFontColor: {
      color: '#616161',
      opacity: 1,
    },
    themeFontFamily: 'Roboto',
    themeAccentFillColor: {
      color: '#4285F4',
      opacity: 1,
    },
    themeAccentFontColor: {
      color: '#EFEFEF',
      opacity: 1,
    },
    themeAccentFontFamily: 'Roboto',
    themeSeriesColor: [
      {
        color: '#4285F4',
        opacity: 1,
      },
      {
        color: '#DB4437',
        opacity: 1,
      },
      {
        color: '#F4B400',
        opacity: 1,
      },
      {
        color: '#0F9D58',
        opacity: 1,
      },
      {
        color: '#AB47BC',
        opacity: 1,
      },
      {
        color: '#00ACC1',
        opacity: 1,
      },
      {
        color: '#FF7043',
        opacity: 1,
      },
      {
        color: '#9E9D24',
        opacity: 1,
      },
      {
        color: '#5C6BC0',
        opacity: 1,
      },
      {
        color: '#F06292',
        opacity: 1,
      },
      {
        color: '#00796b',
        opacity: 1,
      },
      {
        color: '#c2185b',
        opacity: 1,
      },
      {
        color: '#7e57c2',
        opacity: 1,
      },
      {
        color: '#03a9f4',
        opacity: 1,
      },
      {
        color: '#8bc34a',
        opacity: 1,
      },
      {
        color: '#fdd835',
        opacity: 1,
      },
      {
        color: '#fb8c00',
        opacity: 1,
      },
      {
        color: '#8d6e63',
        opacity: 1,
      },
      {
        color: '#9e9e9e',
        opacity: 1,
      },
      {
        color: '#607d8b',
        opacity: 1,
      },
    ],
    themeIncreaseColor: {
      color: '#388e3c',
      opacity: 1,
    },
    themeDecreaseColor: {
      color: '#f44336',
      opacity: 1,
    },
    themeGridColor: {
      color: '#e9e9e9',
      opacity: 1,
    },
  },
  interactions: {
    onClick: {
      value: {},
      supportedActions: ['FILTER'],
    },
  },
};
