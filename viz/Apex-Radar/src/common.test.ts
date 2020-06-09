import * as common from './common'
import * as local from './localMessage';



describe('popTables', () => {
    test('local msg, 1 metric', () => {
        expect(common.populateTables(local.message.tables.DEFAULT, local.message.fields)).toStrictEqual({
            series: [{
                data: [5.497282126241078, 1.7849991884376002, 3.6951131605214327, 4.425749177168392, 6.02078932905799, 2.159520908381245, 1.4574190317115754, 4.993713844467656, 5.811167482902135, 5.466459959022769, 1.5217095262576177, 2.7248381125378054, 3.2216148107443874, 2.802966655574305, 2.8325728966815626, 4.78738448961993, 3.733526048977902, 3.3787552698419026, 4.025778778051834, 5.35835164970315, 2.963131601596341, 4.947689713018692, 1.8820670314435788, 4.87865547464154, 3.4008552077242595, 5.527218073402578, 3.74802231619604, 0.32142154440233073],
                name: "Really small numbers"
            }],
            labels: ["20160228", "20160227", "20160226", "20160225", "20160224", "20160223", "20160222", "20160221", "20160220", "20160219", "20160218", "20160217", "20160216", "20160215", "20160214", "20160213", "20160212", "20160211", "20160210", "20160209", "20160208", "20160207", "20160206", "20160205", "20160204", "20160203", "20160202", "20160201"]
        }
        )
    });
    test('local msg2, 2 metrics', () => {
        expect(common.populateTables(local.message2.tables.DEFAULT, local.message2.fields)).toStrictEqual({
            series: [{
                data: [2, 3, 4, 5, 6],
                name: "Really small numbers"
            }, {
                data: [3, 4, 5, 6, 7],
                name: "Kind of small numbers"
            }],
            labels: ["1", "2", "3", "4", "5"]
        }
        )
    });
});
describe('popStyle', () => {
    test('local msg', () => {
        expect(common.populateStyle(local.message.style, 28)).toStrictEqual({
            chart: {
                toolbar: { show: false },
                type: "radar"
            },
            datalabels: { enabled: false },
            fill: {
                colors: ["#CDDC39", "#0EE396", "#FEB019", "#FF4560", "#775DD0"],
                opacity: 0.5
            },
            legend: {
                markers: {
                    fillColors: ["#CDDC39", "#0EE396", "#FEB019", "#FF4560", "#775DD0"]
                }
            },
            markers: {
                colors: ["#CDDC39", "#0EE396", "#FEB019", "#FF4560", "#775DD0"],
                size: 4
            },
            plotoptions: {
                radar: {
                    polygons: {
                        strokeColors: "white",
                        fill: {
                            colors: ["green", "#FFFFFF"]
                        }
                    }
                }
            },
            stroke: {
                colors: ["#CDDC39", "#0EE396", "#FEB019", "#FF4560", "#775DD0"],
                curve: "smooth",
                dashArray: 0,
                lineCap: "butt",
                show: true,
                width: 2
            },
            tooltip: { marker: { show: false } },
            xaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red"],
                        fontFamily: "Arial",
                        fontSize: "11px"
                    }
                },
            },
            yaxis: {
                show: true,
                labels: {
                    style: {
                        colors: "red",
                        fontFamily: "Arial",
                        fontSize: "11px"
                    }

                }
            }
        })
    });
});
describe('popFill', () => {
    test('enabled', () => {
        expect(common.populateFill(true, .9, ['red', 'green'])).toStrictEqual({
            opacity: .9,
            colors: ['red', 'green']
        }
        )
    });
    test('disabled', () => {
        expect(common.populateFill(false, .9, ['red', 'green'])).toStrictEqual({
            opacity: 0,
            colors: ['red', 'green']
        }
        )
    });
});
describe('popMarkers', () => {
    test('enabled, default', () => {
        expect(common.populateMarkers(true, 'default', ['red', 'green'])).toStrictEqual({
            size: 4,
            colors: ['red', 'green']
        }
        )
    });
    test('enabled, not default', () => {
        expect(common.populateMarkers(true, 'not default', ['red', 'green'])).toStrictEqual({
            size: 0,
            colors: ['red', 'green']
        }
        )
    });
    test('disabled, default', () => {
        expect(common.populateMarkers(false, 'default', ['red', 'green'])).toStrictEqual({
            size: 0,
            colors: ['red', 'green']
        }
        )
    });
});
describe('popDataLabels', () => {
    test('enabled, data', () => {
        expect(common.populateDataLabels(true, 'data', ['red', 'green'])).toStrictEqual({
            enabled: true,
            style: {
                colors: ['red', 'green']
            },
            background: {
                enabled: true,
                borderRadius: 2,
                dropShadow: {
                    enabled: false
                }
            }
        }
        )
    });
    test('enabled, not data', () => {
        expect(common.populateDataLabels(true, 'not data', ['red', 'green'])).toStrictEqual({
            enabled: false,
        }
        )
    });
    test('disabled', () => {
        expect(common.populateDataLabels(true, 'not data', ['red', 'green'])).toStrictEqual({
            enabled: false,
        }
        )
    });
});
describe('popPlotOptions', () => {
    test('2 strings', () => {
        expect(common.populatePlotOptions('red', 'red')).toStrictEqual({
            radar: {
                polygons: {
                    strokeColors: 'white',
                    fill: {
                        colors: ['red', 'red']
                    }
                }
            }
        }
        )
    });
    test('1 string, 1 empty', () => {
        expect(common.populatePlotOptions('red', '')).toStrictEqual({
            radar: {
                polygons: {
                    strokeColors: 'white',
                    fill: {
                        colors: ['red', '']
                    }
                }
            }
        }
        )
    });
    test('empty', () => {
        expect(common.populatePlotOptions('', '')).toStrictEqual({
            radar: {
                polygons: {
                    strokeColors: 'white',
                    fill: {
                        colors: ['', '']
                    }
                }
            }
        }
        )
    });

});
describe('popXAxis', () => {
    test('enabled, 5 colors', () => {
        expect(common.populateXAxis(true, { color: 'red', size: 10.4352, family: 'Arial' }, 5)).toStrictEqual({
            labels: {
                show: true,
                style: {
                    colors: ['red', 'red', 'red', 'red', 'red'],
                    fontSize: '10.4352px',
                    fontFamily: 'Arial'
                }
            }
        }
        )
    });
    test('enabled, 1 color', () => {
        expect(common.populateXAxis(true, { color: 'red', size: 10.4352, family: 'Arial' }, 1)).toStrictEqual({
            labels: {
                show: true,
                style: {
                    colors: ['red'],
                    fontSize: '10.4352px',
                    fontFamily: 'Arial'
                }
            }
        }
        )
    });
    test('disabled', () => {
        expect(common.populateXAxis(false, { color: 'red', size: 10.4352, family: 'Arial' }, 5)).toStrictEqual({
            labels: {
                show: false,
            }
        }
        )
    });
});
describe('popYAxis', () => {
    test('enabled', () => {
        expect(common.populateYAxis(true, { color: 'red', size: 10.4352, family: 'Arial' })).toStrictEqual({
            show: true,
            labels: {
                style: {
                    colors: 'red',
                    fontSize: '10.4352px',
                    fontFamily: 'Arial'
                }
            }
        }
        )
    });
    test('disabled', () => {
        expect(common.populateYAxis(false, { color: 'red', size: 10.4352, family: 'Arial' })).toStrictEqual({
            show: false,
            labels: {
                style: {
                    colors: 'red',
                    fontSize: '10.4352px',
                    fontFamily: 'Arial'
                }
            }
        }
        )
    });
});
describe('popStroke', () => {
    test('empty', () => {
        expect(common.populateStroke([])).toStrictEqual({
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            width: 2,
            colors: [],
            dashArray: 0,
        }
        )
    });
    test('one item', () => {
        expect(common.populateStroke(['1'])).toStrictEqual({
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            width: 2,
            colors: ['1'],
            dashArray: 0,
        }
        )
    });
    test('multiple', () => {
        expect(common.populateStroke(['1', 'red', "#ffffff"])).toStrictEqual({
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            width: 2,
            colors: ['1', 'red', "#ffffff"],
            dashArray: 0,
        }
        )
    });
});
describe('popLegend', () => {
    test('empty', () => {
        expect(common.populateLegend([])).toStrictEqual({
            markers: {
                fillColors: []
            }
        }
        )
    });
    test('one item', () => {
        expect(common.populateLegend(['1'])).toStrictEqual({
            markers: {
                fillColors: ['1']
            }
        }
        )
    });
    test('multiple', () => {
        expect(common.populateLegend(['1', 'red', "#ffffff"])).toStrictEqual({
            markers: {
                fillColors: ['1', 'red', "#ffffff"]
            }
        }
        )
    });
});




