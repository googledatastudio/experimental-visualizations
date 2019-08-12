/* eslint-disable import/no-extraneous-dependencies */
import getDimensions from "./sunburst-dimensions";
import { prepareData, partitionData, getParentArray } from "./sunburst-data";
import drawBase from "./sunburst-drawBase";
import { drawContent, hideToolTip } from "./sunburst-drawContent";
import buildLegend from "./sunburst-legend";

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
    }

    init() {
        this.dimensions = this.getDimensions(this.DOMtarget);

        if (localStorage.getItem("d3_sunburst") === null) {
            const locStorage = {};
            window.localStorage.setItem(
                "d3_sunburst",
                JSON.stringify(locStorage)
            );
        }
        this.treeData = this.prepareData();
        this.initScales();
    }

    initScales() {
        let colorScheme;
        if (this.colorSchemeReversed) {
            colorScheme = d3.quantize(
                d3[this.colorScheme],
                this.treeData.children.length + 1
            ).reverse()
        } else {
            colorScheme = d3.quantize(
                d3[this.colorScheme],
                this.treeData.children.length + 1
            )
        }
        this.colorScale = d3
            .scaleOrdinal()
            .range(colorScheme);

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
    drawBase,
    drawContent,
    hideToolTip,
    buildLegend
});
