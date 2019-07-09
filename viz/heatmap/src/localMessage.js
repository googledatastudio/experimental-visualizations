export const message = {
  tables: {
    DEFAULT: [
      {
        categories: ['2', '5'],
        metric: ['491757'],
      },
      {
        categories: ['2', '4'],
        metric: ['490093'],
      },
      {
        categories: ['2', '1'],
        metric: ['486993'],
      },
      {
        categories: ['2', '3'],
        metric: ['480892'],
      },
      {
        categories: ['2', '2'],
        metric: ['476784'],
      },
      {
        categories: ['1', '5'],
        metric: ['465891'],
      },
      {
        categories: ['1', '4'],
        metric: ['463693'],
      },
      {
        categories: ['2', '7'],
        metric: ['462252'],
      },
      {
        categories: ['1', '1'],
        metric: ['460010'],
      },
      {
        categories: ['1', '3'],
        metric: ['450954'],
      },
      {
        categories: ['1', '2'],
        metric: ['445476'],
      },
      {
        categories: ['3', '5'],
        metric: ['412601'],
      },
      {
        categories: ['3', '4'],
        metric: ['411218'],
      },
      {
        categories: ['3', '1'],
        metric: ['409999'],
      },
      {
        categories: ['1', '7'],
        metric: ['409505'],
      },
      {
        categories: ['3', '3'],
        metric: ['402456'],
      },
      {
        categories: ['2', '6'],
        metric: ['399075'],
      },
      {
        categories: ['3', '2'],
        metric: ['398807'],
      },
      {
        categories: ['3', '7'],
        metric: ['394362'],
      },
      {
        categories: ['1', '6'],
        metric: ['356437'],
      },
      {
        categories: ['3', '6'],
        metric: ['338777'],
      },
      {
        categories: ['4', '7'],
        metric: ['209650'],
      },
      {
        categories: ['4', '5'],
        metric: ['205710'],
      },
      {
        categories: ['4', '1'],
        metric: ['204524'],
      },
      {
        categories: ['4', '3'],
        metric: ['204311'],
      },
      {
        categories: ['4', '4'],
        metric: ['202850'],
      },
      {
        categories: ['4', '2'],
        metric: ['199980'],
      },
      {
        categories: ['4', '6'],
        metric: ['171139'],
      },
    ],
  },
  fields: {
    categories: [
      {
        id: 'qt_7hffei9vyb',
        name: 'Quarter',
        type: 'NUMBER',
        concept: 'DIMENSION',
      },
      {
        id: 'qt_8hffei9vyb',
        name: 'DayOfWeek',
        type: 'NUMBER',
        concept: 'DIMENSION',
      },
    ],
    metric: [
      {
        id: 'qt_9hffei9vyb',
        name: 'Record Count',
        type: 'NUMBER',
        concept: 'METRIC',
      },
    ],
  },
  style: {
    fontFamily: {
      defaultValue: 'Roboto',
    },
    showLabels: {
      value: true,
      defaultValue: false,
    },
    lowColor: {
      value: {
        color: '#1565C0',
        opacity: 1,
      },
      defaultValue: '#00FFFF',
    },
    highColor: {
      value: {
        color: '#B71C1C',
        opacity: 1,
      },
      defaultValue: '#FF0000',
    },
    interpolation: {
      value: 'interpolateCubehelix',
      defaultValue: 'interpolateRgb',
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
      value: {
        type: 'FILTER',
        data: {
          concepts: ['qt_7hffei9vyb', 'qt_8hffei9vyb'],
          values: [['3', '1']],
        },
      },
      supportedActions: ['FILTER'],
    },
  },
};
