const dscc = require('@google/dscc');
import vegaEmbed from 'vega-embed';

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = false;

/**
 * @fileoverview Utilities for community visualizations.
 */

/** @record */
class ThemeColorValue {
  constructor() {
    /** @type {string} */
    this.color;
  }
}

/** @record */
class ThemeStyle {
  constructor() {
    /** @type {?ThemeColorValue} */
    this.themeAccentFillColor;
    /** @type {?ThemeColorValue} */
    this.themeAccentFontColor;
    /** @type {string} */
    this.themeAccentFontFamily;
    /** @type {?ThemeColorValue} */
    this.themeComponentHeaderColor;
    /** @type {string} */
    this.themeComponentHeaderPosition;
    /** @type {?ThemeColorValue} */
    this.themeDecreaseColor;
    /** @type {?ThemeColorValue} */
    this.themeFillColor;
    /** @type {?ThemeColorValue} */
    this.themeFontColor;
    /** @type {string} */
    this.themeFontFamily;
    /** @type {?ThemeColorValue} */
    this.themeGridColor;
    /** @type {?ThemeColorValue} */
    this.themeIncreaseColor;
    /** @type {?Array<?ThemeColorValue>} */
    this.themeSeriesColor;
  }
}

/** @record */
class RowHeader {
  constructor() {
    /** @type {string} */
    this.id;
    /** @type {string} */
    this.name;
    /** @type {string} */
    this.type;
    /** @type {string} */
    this.concept;
    /** @type {string} */
    this.configId;
  }
}

/** @record */
class TableObject {
  constructor() {
    /** @type {!Array<!RowHeader>} */
    this.headers;
    /** @type {!Array<!Array<string|number>>} */
    this.rows;
  }
}

/** @record */
class TablesObject {
  constructor() {
    /** @type {!TableObject} */
    this.DEFAULT;
    /** @type {!TableObject} */
    this.COMPARISON;
  }
}
/** @record */
class RequestObject {
  constructor() {
    /** @type {!TablesObject} */
    this.tables;
  }
}

/**
 * For a tabular data object, formats and returns data in tidy format
 *
 * @param {!RequestObject} tableData Data in tabular format
 * @return {!Object} Data in tidy format
 */
function getTidyData(tableData) {
  const headers = tableData.tables.DEFAULT.headers;
  return tableData.tables.DEFAULT.rows.map(datarow =>
    mapToColumns_(datarow, headers)
  );
}

/**
 * For a single data row, returns data in tidy format
 *
 * @private
 * @param {!Array<string|number>} datarow One row of data
 * @param {!Array<!RowHeader>} headers Header information for columns
 * @return {!Object} A single row data
 */
function mapToColumns_(datarow, headers) {
  const rowDataObj = {};
  let i = 0;
  datarow.forEach((fieldValue, i) => {
    if (headers[i] != undefined) {
      rowDataObj[headers[i].id] = fieldValue;
    }
  });
  return rowDataObj;
}

/**
 * Helper function to find the color value string given non-standard objects
 * and fallback values
 *
 * @param {!Object} obj Non-standard color object from Data Studio post
 *          message
 * @param {!Object} defaultColor Can contain fallback color value in color
 *          property
 * @return {string} Color value
 */
function colorCheck(obj, defaultColor) {
  if (obj.value && obj.value.color) {
    return obj.value.color;
  }
  return defaultColor ? defaultColor.color : defaultColor;
}

/**
 * Helper function to get around potential config issues in Data Studio
 *
 * @param {!Object} config Any configuration parameter for visualization
 * @return {!*} Value of configuration parameter
 */
function getValue(config) {
  // Doing a simple `or` skips over `false` values in config.value.
  let value = config.hasOwnProperty('value')
    ? config.value
    : config.defaultValue;
  if (value == null) {
    value = config.defaultValue;
  }
  return value;
}

/**
 * For a dataset in tidy format, return list of unique values in a field
 *
 * @param {!Array<!Object>} data Data in tidy format
 * @param {string} fieldName Field for which the unique values are returned
 * @return {!Array<string>} with unique values for `fieldName`
 */
function getUniqueValues(data, fieldName) {
  const collector = {};

  data.forEach(row => {
    collector[row[fieldName]] = true;
  });

  return Object.keys(collector).map(value => collector[value]);
}

/**
 * Helps to get field name
 *
 * @class dsField
 */
function getRowData(headers, configId) {
  const finalData = {};
  for (let index = 0; index < headers.length; ++index) {
    const fieldMap = {};
    const field = headers[index];
    fieldMap['name'] = field.name;
    fieldMap['id'] = field.id;
    fieldMap['configId'] = field.configId;
    finalData[index] = fieldMap;
  }
  return finalData;
}

/**
 * @fileoverview Common elements for vega-lite based Data Studio 2p charts.
 */

/**
 * Creates/refreshes a container to create viz in
 *
 * @param {string} containerId id of DOM container
 */
function createContainer(containerId) {
  if (!document.querySelector('div')) {
    const newdiv = document.createElement('div');
    newdiv.setAttribute('id', containerId);
    newdiv.setAttribute('style', 'padding-right:0'); // vega embed adds 32px padding-right
    document.body.appendChild(newdiv);
  }
}

/**
 * Creates the base Data Studio Vega-lite theme used for visualization. This
 * theme tries to emunale Google Charts look and feel. This also defaults to
 * colors values passed by the Data Studio theme.
 *
 * @param {!Object} theme theme information passed from Data Studio
 * @param {!Object=} overrideValues contains values that should be overridden
 *          in the theme
 * @return {!Object} vega-lite theme for viz
 */
function getVegaTheme(theme, overrideValues = {}) {
  const primaryColor =
    overrideValues.primaryColor || theme.themeSeriesColor[0].color;
  const fontFamily = overrideValues.fontFamily || theme.themeFontFamily;
  const baseFontSize = overrideValues.baseFontSize || 12;
  const fontColor = overrideValues.baseFontColor || theme.themeFontColor.color;
  const fontWeight = overrideValues.fontWeight;

  const themeColors = theme.themeSeriesColor.map(
    themeValue => themeValue.color
  );

  const vegaTheme = {
    axis: {
      labelColor: fontColor,
      labelFont: fontFamily,
      labelFontSize: baseFontSize,
      labelFontWeight: fontWeight,
      labelPadding: 10,
      ticks: false,
      titleColor: fontColor,
      tickCount: 8,
      titleFont: fontFamily,
      titleFontWeight: fontWeight,
      titleFontSize: baseFontSize,
      titleAnchor: 'center',
    },

    axisX: {
      titlePadding: 12,
    },

    axisY: {
      domain: false,
      titleAngle: -90,
      titleBaseline: 'line-top',
      titlePadding: 25,
    },

    background: 'transparent',

    legend: {
      labelColor: fontColor,
      labelFont: fontFamily,
      labelFontSize: baseFontSize,
      labelFontWeight: fontWeight,
      labelPadding: 10,
      titleColor: fontColor,
      titleFont: fontFamily,
      titleFontWeight: fontWeight,
      titleFontSize: baseFontSize,
    },

    mark: {opacity: 1},

    view: {stroke: 'transparent'},

    area: {fill: primaryColor},

    rect: {fill: primaryColor},

    line: {color: primaryColor, stroke: primaryColor, strokeWidth: 5},

    trail: {color: primaryColor, stroke: primaryColor, strokeWidth: 0, size: 1},

    path: {stroke: primaryColor, strokeWidth: 0.5},

    point: {
      filled: true,
    },

    style: {bar: {fill: primaryColor, stroke: false}},

    arc: {fill: primaryColor},
    shape: {stroke: primaryColor},
    symbol: {fill: primaryColor, size: 30},
  };

  return vegaTheme;
}

/**
 * @fileoverview Funnel 2P viz for Data Studio.
 */
// Id of the viz container DOM element
const vizContainerId = 'viz';

/**
 * Draws the viz
 *
 * @param {!Object} request POST message from Data Studio
 */
function drawViz(request) {
  const paddingBottom = 5;
  const width = dscc.getWidth();
  const height = dscc.getHeight() - paddingBottom;

  // Generate and refresh container div
  createContainer(vizContainerId);

  // Process data into Tidy format
  const tidyData = getTidyData(request);

  // shorthands for easier code
  const style = request.style;
  const theme = request.theme;

  // Override the following values in the theme for viz pack
  let overrideStyleValues = {
    fontFamily: getValue(style.fontFamily),
    baseFontSize: getValue(style.fontSize),
  };

  if (style.baseFontColor.value) {
    overrideStyleValues.baseFontColor = style.baseFontColor.value.color;
  }

  // address fields using variables
  const headers = request.tables.DEFAULT.headers;
  const dimensionField = getRowData(headers, 'dimension');

  const xbin = getValue(style.xbin);
  const ybin = getValue(style.ybin);
  const byCategoryColor = getValue(style.byCategoryColor);
  const minScale = getValue(style.minScale).color;
  const maxScale = getValue(style.maxScale).color;
  const orient = getValue(style.alignment);

  const hideYAxis = getValue(style.hideYAxis);
  const hideXAxis = getValue(style.hideXAxis);
  const hideXAxisTitle = getValue(style.hideXAxisTitle);

  const hideYAxisBaseline = getValue(style.hideYAxisBaseline);
  const hideXAxisBaseline = getValue(style.hideXAxisBaseline);
  const hideYAxisTitle = getValue(style.hideYAxisTitle);

  let titleOrient;

  const dsThemeColors = theme.themeSeriesColor.map(function(t) {
    return t.color;
  });

  if (orient == 'left' || orient == 'right') {
    titleOrient = 'left';
  } else if (orient == 'top' || orient == 'bottom') {
    titleOrient = 'top';
  }

  let spec = {
    autosize: {type: 'fit', resize: true, contains: 'padding'},
    height: height,
    width: width,
    data: {values: tidyData},
    transform: [
      {
        filter: {
          and: [
            {field: dimensionField[0]['id'], valid: true},
            {field: dimensionField[1]['id'], valid: true},
          ],
        },
      },
    ],
    layer: [],
    config: {
      view: {
        stroke: 'transparent',
      },
    },
  };

  let histogramLayer = {
    mark: {type: 'rect', tooltip: true},
    encoding: {
      x: {
        bin: {maxbins: xbin},
        field: dimensionField[0]['id'],
        type: 'quantitative',
        title: hideXAxisTitle ? null : dimensionField[0]['name'],
        axis: hideXAxisBaseline ? {domain: false} : {domain: true},
      },
      y: {
        bin: {maxbins: ybin},
        field: dimensionField[1]['id'],
        type: 'quantitative',
        title: hideYAxisTitle ? null : dimensionField[1]['name'],
        axis: hideYAxisBaseline ? {domain: false} : {domain: true},
      },
    },
  };

  if (hideXAxis == true) {
    histogramLayer.encoding.x.axis = {
      domain: false,
      labels: false,
      ticks: false,
      title: null,
    };
  }
  if (hideYAxis == true) {
    histogramLayer.encoding.y.axis = {
      domain: false,
      labels: false,
      ticks: false,
      title: null,
    };
  }

  histogramLayer.encoding.color = {
    type: 'quantitative',
    aggregate: 'count',
    legend: {
      orient: orient,
      titleOrient: titleOrient,
    },
  };

  if (byCategoryColor == true) {
    histogramLayer.encoding.color.scale = {range: [minScale, maxScale]};
  } else {
    histogramLayer.encoding.color.scale = {
      range: [dsThemeColors[0], dsThemeColors[1]],
    };
  }
  spec.layer.push(histogramLayer);

  if (getValue(style.boldLabelFont)) {
    overrideStyleValues.fontWeight = 700;
  } else {
    overrideStyleValues.fontWeight = 400;
  }

  const dataStudioTheme = getVegaTheme(theme, overrideStyleValues);
  const embedOptions = {
    renderer: 'svg',
    actions: false,
    padding: {left: 5, top: 5, right: 5, bottom: 5},
    config: dataStudioTheme,
  };

  vegaEmbed('#' + vizContainerId, spec, embedOptions);
}

dscc.subscribeToData(drawViz, {transform: dscc.tableTransform});
