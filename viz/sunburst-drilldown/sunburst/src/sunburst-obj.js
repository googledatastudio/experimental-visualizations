/* eslint-disable import/no-extraneous-dependencies */
import getDimensions from "./sunburst-dimensions";
import { prepareData, partitionData, getParentArray, getNodeFromFunnel } from "./sunburst-data";
import drawBase from "./sunburst-drawBase";
import { drawContent, hideToolTip } from "./sunburst-drawContent";
import buildLegend from "./sunburst-legend";
import filterDashbord from "./sunburst-filter";
import Helper from "../../js/d3-common";

const d3 = Object.assign(
    {},
    require("d3-array"),
    require("d3-selection"),
    require("d3-fetch"),
    require("d3-scale"),
    require("d3-interpolate"),
    require("d3-scale-chromatic"),
    require("d3-shape")
);

export default class Sunburst {
    constructor(DOMtarget, data) {
        this.DOMtarget = DOMtarget;
        this.dataset = data;
        this.treeData = null;

        // Scales
        this.colorScheme = "interpolateRainbow"; // Default value
        this.colorScale = null;
        this.arc = null;

        // Accessors
        this.dimensionsAccessor = ["dimension"]; // Default value
        this.metricAccessor = "COUNT"; // Default value

        // Computes
        this.totalMetric = null;

        // Variables
        this.fontColor = "slateGrey";
        this.fontOpacity = 1;
        this.legend = true;
        this.colorSchemeReversed = false;
        this.horizontalOffset = 0;

        this.interactionId = null;
        this.isFilterData = false;
        this.filterEnabled = false;
        this.AnimDuration = 750;

        // Local Storage
        this.localStorageId = "d3_sunburst_v1.0";
        this.locStorage = null;
    }

    init() {
        this.dimensions = this.getDimensions(this.DOMtarget);

        if (localStorage.getItem(this.localStorageId) === null) {

            // set complete ocal storage object
            this.locStorage = {};
            this.locStorage.state = {};
            this.locStorage.state.clickHistory = [];

            window.localStorage.setItem(
                this.localStorageId,
                JSON.stringify(this.locStorage)
            );
        } else {
            this.locStorage = JSON.parse(
                localStorage.getItem(this.localStorageId)
            );

            // check if filter must be removed
            if (this.isFilterData == false) {
                Helper.saveLocStorage(this, "clickHistory", []);
            }
        }

        this.treeData = this.prepareData();
        this.initScales();
    }

    initScales() {
        let colorScheme;
        if (this.colorSchemeReversed) {
            colorScheme = d3
                .quantize(
                    d3[this.colorScheme],
                    this.treeData.children.length + 1
                )
                .reverse();
        } else {
            colorScheme = d3.quantize(
                d3[this.colorScheme],
                this.treeData.children.length + 1
            );
        }
        this.colorScale = d3.scaleOrdinal().range(colorScheme);

        this.arc = d3
            .arc()
            .startAngle(d => d.x0)
            .endAngle(d => d.x1)
            .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
            .padRadius(this.dimensions.boundedRadius / 2)
            .innerRadius(d => d.y0)
            .outerRadius(d => d.y1 - 1);
    }

    draw() {
        this.init();
        this.drawBase();
        this.drawContent();
    }
}

Object.assign(Sunburst.prototype, {
    getDimensions,
    prepareData,
    partitionData,
    getParentArray,
    getNodeFromFunnel,
    drawBase,
    drawContent,
    hideToolTip,
    buildLegend,
    filterDashbord
});
