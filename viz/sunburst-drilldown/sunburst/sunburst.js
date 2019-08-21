import * as dscc from "@google/dscc";
import Helper from "../js/d3-common";
import * as msg from "../js/messages";
import Sunburst from "./src/sunburst-obj";
import "./src/d3-sunburst.scss";
import * as _ from "lodash";

const d3 = Object.assign({}, require("d3-fetch"), require("d3-selection"));

// General Settings
const LOCAL = "localhost"; // your local dev hostname
const minSize = 450;

/* 
** Execute only if data studio returns data 
** (https://github.com/googledatastudio/ds-component/issues/33)

** D3 Object requires certain settings
** - DOM ID and dataset when creating the object
** - dimensionsAccessor: Array of dimensions to be rendered (each dimension = 1 ring)
*/

function drawViz(rawData) {
    // First Error check: component size
    prepareDOM();
    const dim = Helper.getMaxDimensions("body");
    if (dim.max < minSize) {
        renderErrorMessage(msg.resizeTitle, msg.sizeError);
        return;
    }

    const data = convertData(rawData);
    if (data) {
        const root = prepareDOM();
        createTooltip(root);

        const sunburst = new Sunburst("body", data.tables);

        // Dimensions and Metric of viz
        sunburst.metricAccessor = rawData.fields.metric[0].name;
        sunburst.dimensionsAccessor = [];
        rawData.fields.dimension.forEach((d, i) => {
            sunburst.dimensionsAccessor[i] = d.name;
        });

        // Color Scheme
        sunburst.colorScheme = Helper.getStyleValue(data.style, "arcColors");
        sunburst.colorSchemeReversed = Helper.getStyleValue(
            data.style,
            "colorSchemeReversed"
        );

        // Font Color
        sunburst.fontColor = Helper.getStyleValue(
            data.style,
            "fontColor"
        ).color;
        sunburst.fontOpacity = Helper.getStyleValue(
            data.style,
            "fontColor"
        ).opacity;

        // Draw Legend
        sunburst.legend = Helper.getStyleValue(data.style, "isLegend");

        // #### Filtering ####

        // Dimensions ID
        sunburst.dimensionsAccessorId = [];
        rawData.fields.dimension.forEach((d, i) => {
            sunburst.dimensionsAccessorId[i] = d.id;
        });

        // interactionId
        const interactionId = "sunburstFilter";
        sunburst.interactionId = interactionId;

        // No filtering for local setup
        sunburst.LOCAL = LOCAL;

        // Clear brush if filter was removed from DS
        const isFilterData = data.interactions[interactionId].value.data;
        if (isFilterData === "undefined" || typeof isFilterData === "undefined") {
            sunburst.isFilterData = false;
            
        } else {
            sunburst.isFilterData = true;
            
        }

        const filterEnabled = data.interactions[interactionId].value.type;
        if (filterEnabled === "undefined" || typeof filterEnabled === "undefined") {
            sunburst.filterEnabled = false;
            sunburst.AnimDuration = 750;
        } else {
            sunburst.filterEnabled = true;
            sunburst.AnimDuration = 0;
        }

        // Draw the visualization
        sunburst.draw();
    } else {
        renderErrorMessage(msg.loadingTitle, msg.dataError);
    }
}

/*
 ** D3 expects an ID in the tag the viz should be rendered
 ** D3 expects a certain DOM structure for the tooltip
 ** Data Studio suggests to delete the svg each time the viz is created
 */

function createTooltip(root) {
    const tooltip = root
        .append("div")
        .attr("id", "tooltip")
        .attr("class", "tooltip");

    tooltip.append("span").attr("id", "title");
    tooltip.append("span").attr("id", "count");
}

function prepareDOM() {
    const root = d3.select("body").attr("id", "body");

    // Clean everything
    d3.select("body")
        .selectAll("svg")
        .remove();

    d3.select("#error").remove();
    d3.select("#tooltip").remove();

    return root;
}

/*
 ** Data expected by the d3 object equals data returned by d3.csv:
 ** Combine Metrics and Dimensions in single object per record
 ** Return object with different sets (data + fields, style, theme, interactions)
 */
function convertData(dsObj) {
    const tableData = dsObj.tables.DEFAULT;
    console.log(`Dataset contains ${tableData.length} records`);

    if (tableData.length == 0) {
        return;
    }

    // CONVERT DS data format into D3 style
    const fields = dsObj.fields.dimension.concat(dsObj.fields.metric);

    const data = [];
    tableData.map(d => {
        const row = d.dimension.concat(d.metric);
        const obj = {};
        fields.forEach((f, i) => {
            obj[f.name] = row[i];
        });
        data.push(obj);
    });

    const returnObj = {};
    returnObj.tables = data;
    returnObj.fields = fields;
    returnObj.style = dsObj.style;
    returnObj.theme = dsObj.theme;
    returnObj.interactions = dsObj.interactions;
    return returnObj;
}

/* try catch only for DS */
function draw(data) {
    if (LOCAL) {
        window.addEventListener("resize", _.debounce(sunburst, 300));
        drawViz(data);
    } else {
        try {
            drawViz(data);
        } catch (err) {
            renderErrorMessage(msg.errorTitle, `${msg.generalError} ${err}`);
        }
    }
}

/* Load data (LOCAL) or take from Google DS */
async function sunburst() {
    if (window.location.hostname == LOCAL) {
        const theDataSet = await d3.json("./data/DS-data-documentation.json");
        draw(theDataSet);
    } else {
        dscc.subscribeToData(draw, { transform: dscc.objectTransform });
    }
}

sunburst();

// ** ERROR HANDLING **
function renderErrorMessage(errTitle, errMsg) {
    const root = prepareDOM();
    Helper.renderErrorMessage(root, errTitle, errMsg);
}
