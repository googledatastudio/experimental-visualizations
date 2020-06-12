import {
    ObjectFormat,
    RowEntry,
    ObjectRow,
    FieldsByConfigId,
    StyleById,
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

/**
 * Main driver function, takes data from DS as ObjectFormat
 * and populates the viz accordingly.
 * @param data 
 */
export function drawViz(data: ObjectFormat): void {
    const hasData:boolean =data.tables.DEFAULT.length>0;
    const oldErrorMsg=document.querySelector('h1');
    
    if(oldErrorMsg && oldErrorMsg.parentNode){
        oldErrorMsg.parentNode.removeChild(oldErrorMsg);
    }
    if(!hasData){
        if(myChart && document.body.contains(myChart.element)){
            myChart.chart.destroy();
            console.log('chart destroyed');
            document.body.removeChild(myChart.element);
            myChart=undefined;
        }
        const errorChartElement = document.createElement('h1');
        errorChartElement.id='Error';
        const errorText=document.createTextNode("No data");
        errorChartElement.appendChild(errorText);
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
        },
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
            lineColors
        ),
        plotoptions: populatePlotOptions(
            vizStyle.plotColor1.value.color,
            vizStyle.plotColor2.value.color
        ),
        xaxis: populateXAxis(vizStyle.enableXAxis.value, axisFontInfo, numDims),
        yaxis: populateYAxis(vizStyle.enableYAxis.value, axisFontInfo),
        stroke: populateStroke(lineColors),
        legend: populateLegend(vizStyle.enableLegend.value,vizStyle.legendPosition.value,lineColors),
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
    lineColors: string[]
): ApexDataLabels {
    if (showMarkers && markerType === 'data') {
        const dataLabels = {
            enabled: true,
            style: {
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
    const yAxis:ApexYAxis = {
        show: enableAxis,
        floating:true,
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
        lineCap: 'butt'as ApexStroke["lineCap"],
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
export function populateLegend(enableLegend: boolean,legendPosition:ApexLegend["position"],lineColors: string[]): ApexLegend {
    const legend = {
        show:enableLegend,
        showForSingleSeries:true,
        position:legendPosition,
        markers: {
            fillColors: lineColors,
        },
    };
    return legend;
}
