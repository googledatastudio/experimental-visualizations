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

import {
    ObjectFormat,
    RowEntry,
    ObjectRow,
    FieldsByConfigId,
    StyleById,
    getHeight,
    getWidth
} from '@google/dscc';
import ApexCharts from 'apexcharts';

interface FontInfo {
    family: string;
    size: number;
    color: string;
}
interface Chart {
    chart: ApexCharts;
    element: Element;
}
let myChart: Chart | undefined;

const CHARTNAME = 'myChart';
const ERRORNAME = 'Error';

/**
 * Main driver function, takes data from DS as ObjectFormat
 * and populates the viz accordingly.
 * @param data 
 */
export function drawViz(data: ObjectFormat): void {
    const hasData: boolean = data.tables.DEFAULT.length > 0;
    const oldErrorMsg = document.getElementById(ERRORNAME);

    if (oldErrorMsg && oldErrorMsg.parentNode) {
        oldErrorMsg.parentNode.removeChild(oldErrorMsg);
    }
    if (!hasData) {
        if (myChart && document.body.contains(myChart.element)) {
            myChart.chart.destroy();
            document.body.removeChild(myChart.element);
            myChart = undefined;
        }
        const errorChartElement = document.createElement('div');
        errorChartElement.id = ERRORNAME;
        const height = getHeight()/2;
        errorChartElement.innerHTML = `
        <div style="
        position:absolute;padding-top:`+height+`px;
        bottom:30%;left:30%;right:30%">
            <h1 style="text-align:center;">No Data</h1>
            <p style="text-align:center;">Data Studio returned no data.</p>
        </div>
        `;
        document.body.appendChild(errorChartElement);
        return;
    }

    const tables = populateTables(data.tables.DEFAULT, data.fields);
    const styling = populateStyle(data.style, tables.labels.length);

    const options = {
        series: tables.series,
        labels: tables.labels,
        tooltip: styling.tooltip,
        chart: styling.chart,
        fill: styling.fill,
        markers: styling.markers,
        dataLabels: styling.datalabels,
        plotOptions: styling.plotoptions,
        xaxis: styling.xaxis,
        yaxis: styling.yaxis,
        stroke: styling.stroke,
        legend: styling.legend,
        responsive: [{
            breakpoint: 5000,
            options: {
                chart:{
                type: 'radar',
                toolbar: {
                    show: false,
                },
                height:getHeight()-20,
                width:getWidth()

            }},
        }]
    };

    if (!myChart) {
        const newChartElement = document.createElement('div');
        newChartElement.id = CHARTNAME;
        document.body.appendChild(newChartElement);
        const newApexChart = new ApexCharts(newChartElement, options);
        newApexChart.render();
        myChart = { element: newChartElement, chart: newApexChart };
    } else {
        myChart.chart.updateOptions(options);
    }
}

/**
 * Logic to translate Dims/Metrics into ApexSeries and ApexLabels
 * @param vizData
 * @param vizFields
 */
export function populateTables(
    vizData: ObjectRow[],
    vizFields: FieldsByConfigId
) {
    const metrics: (number)[][] = [];
    const series: ApexAxisChartSeries = [];
    const labels: (RowEntry)[] = [];
    for (let i = 0; i < vizData.length; ++i) {
        labels[i] = vizData[i].dimID[0];
        for (let j = 0; j < vizData[i].metricID.length; j++) {
            if (!metrics[j]) metrics[j] = [];
            metrics[j][i] = Number(vizData[i].metricID[j]);
        }
    }
    //create a 'Series' for each metric
    for (let i = 0; i < metrics.length; ++i) {
        const newSeries = {
            name: vizFields.metricID[i].name,
            data: metrics[i],
        };
        series.push(newSeries);
    }
    return {
        series: series,
        labels: labels,
    };
}

/**
 * Invokes the other style populate functions:
 * Fill, Markers, DataLabels, PlotOptons, XAxis, YAxis, Stroke, Legend
 * @param vizStyle
 * @param numDims
 */
export function populateStyle(vizStyle: StyleById, numDims: number) {
    const lineColors: string[] = [
        vizStyle.fillColor1.value.color,
        vizStyle.fillColor2.value.color,
        vizStyle.fillColor3.value.color,
        vizStyle.fillColor4.value.color,
        vizStyle.fillColor5.value.color,
    ];
    const axisFontInfo: FontInfo = {
        color: vizStyle.axisFontColor.value.color,
        size: vizStyle.axisFontSize.value,
        family: vizStyle.axisFontFamily.value,
    };
    const chart = {
        type: 'radar',
        toolbar: {
            show: false,
        }
    };
    const tooltip = {
        marker: {
            show: false,
        },
    };
    return {
        tooltip: tooltip,
        chart: chart,
        fill: populateFill(
            vizStyle.fillRadar.value,
            vizStyle.fillOpacity.value,
            lineColors
        ),
        markers: populateMarkers(
            vizStyle.showMarkers.value,
            vizStyle.markerType.value,
            lineColors
        ),
        datalabels: populateDataLabels(
            vizStyle.showMarkers.value,
            vizStyle.markerType.value,
            lineColors,axisFontInfo.family
        ),
        plotoptions: populatePlotOptions(
            vizStyle.plotColor1.value.color,
            vizStyle.plotColor2.value.color
        ),
        xaxis: populateXAxis(vizStyle.enableXAxis.value, axisFontInfo, numDims),
        yaxis: populateYAxis(vizStyle.enableYAxis.value, axisFontInfo),
        stroke: populateStroke(lineColors),
        legend: populateLegend(vizStyle.enableLegend.value,vizStyle.legendPosition.value,lineColors,axisFontInfo),
    };
}

/**
 * Takes fillRadar bool, fillOpacity level and lineColors to generate ApexFill
 * @param fillRadar
 * @param fillOpacity
 * @param lineColors
 */
export function populateFill(
    fillRadar: boolean,
    fillOpacity: number,
    lineColors: string[]
): ApexFill {
    const fill = {
        opacity: fillRadar ? fillOpacity : 0,
        colors: lineColors,
    };
    return fill;
}

/**
 * Takes showMarkers bool, the markerType and lineColors to populate ApexDataLabels
 * @param showMarkers
 * @param markerType
 * @param lineColors
 */
export function populateMarkers(
    showMarkers: boolean,
    markerType: string,
    lineColors: string[]
): ApexMarkers {
    const size = showMarkers && markerType === 'default' ? 4 : 0;
    const markers = {
        size: size,
        colors: lineColors,
    };
    return markers;
}

/**
 * Takes showMarkers bool, the markerType and lineColors to populate ApexDataLabels
 * @param showMarkers
 * @param markerType
 * @param lineColors
 */
export function populateDataLabels(
    showMarkers: boolean,
    markerType: string,
    lineColors: string[],
    fontFamily:string
): ApexDataLabels {
    if (showMarkers && markerType === 'data') {
        const dataLabels = {
            enabled: true,
            style: {
                fontFamily:fontFamily,
                colors: lineColors,
            },
            background: {
                enabled: true,
                borderRadius: 2,
                dropShadow: {
                    enabled: false,
                },
            },
        };
        return dataLabels;
    }
    const dataLabels = {
        enabled: false,
    };
    return dataLabels;
}

/**
 * Takes 2 colors and populates ApexPlotOptions
 * @param color1
 * @param color2
 */
export function populatePlotOptions(color1: string, color2: string): ApexPlotOptions {
    const plotOptions = {
        radar: {
            polygons: {
                strokeColors: 'white',
                fill: {
                    colors: [color1, color2],
                },
            },
        },
    };
    return plotOptions;
}

/**
 * Takes XAxisEnable boolean and fontInfo and creates ApexXAxis
 * Uses numDims to properly add color to axis from fontInfo
 * @param enableAxis
 * @param fontInfo
 * @param numDims
 */
export function populateXAxis(
    enableAxis: boolean,
    fontInfo: FontInfo,
    numDims: number
): ApexXAxis {
    if (enableAxis) {
        //super hacky but it works- creates an array with the desired color n times
        //this lets the color apply to all the labels on the xx axis
        const axisColors = [];
        for (let i = 0; i < numDims; i++) {
            axisColors[i] = fontInfo.color;
        }
        const xAxis = {
            labels: {
                show: enableAxis,
                style: {
                    colors: axisColors,
                    fontSize: fontInfo.size + 'px',
                    fontFamily: fontInfo.family,
                },
            },
        };
        return xAxis;
    }
    const xAxis = {
        labels: {
            show: enableAxis,
        },
    };
    return xAxis;
}

/**
 * Takes YAxisEnable boolean and fontInfo and creates ApexYAxis
 * @param enableAxis
 * @param fontInfo
 */
export function populateYAxis(enableAxis: boolean, fontInfo: FontInfo): ApexYAxis {
    const yAxis: ApexYAxis = {
        show: enableAxis,
        floating: true,
        labels: {
            style: {
                colors: fontInfo.color,
                fontSize: fontInfo.size + 'px',
                fontFamily: fontInfo.family,
            },

        },
    };
    return yAxis;
}

/**
 * Takes lineColors and creates ApexStroke
 * @param lineColors
 */
export function populateStroke(lineColors: string[]): ApexStroke {
    const stroke = {
        show: true,
        curve: 'smooth' as ApexStroke["curve"],
        lineCap: 'butt' as ApexStroke["lineCap"],
        width: 2,
        colors: lineColors,
        dashArray: 0,
    };
    return stroke;
}

/**
 * Takes lineColors and creates ApexLegend
 * @param lineColors
 */
export function populateLegend(enableLegend: boolean,legendPosition:ApexLegend["position"],lineColors: string[],fontInfo:FontInfo): ApexLegend {
    const legend = {
        show:enableLegend,
        showForSingleSeries:true,
        position:legendPosition,
        fontSize:fontInfo.size+'px',
        fontFamily:fontInfo.family,
        labels:{
            colors:fontInfo.color,
        },
        markers: {
            fillColors: lineColors,
        },
    };
    return legend;
}
