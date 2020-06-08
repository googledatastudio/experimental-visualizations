import * as common from './common'

describe('popTables', () => {
});
describe('popStyle', () => {
});
describe('popFill', () => {
    test('enabled', () => {
        expect(common.populateFill(true,.9,['red','green'])).toStrictEqual({
            opacity: .9,
            colors: ['red','green']
        }
        )
    });
    test('disabled', () => {
        expect(common.populateFill(false,.9,['red','green'])).toStrictEqual({
            opacity: 0,
            colors: ['red','green']
        }
        )
    });
});
describe('popMarkers', () => {
    test('enabled, default', () => {
        expect(common.populateMarkers(true,'default',['red','green'])).toStrictEqual({
            size: 4,
            colors: ['red','green']
        }
        )
    });
    test('enabled, not default', () => {
        expect(common.populateMarkers(true,'not default',['red','green'])).toStrictEqual({
            size: 0,
            colors: ['red','green']
        }
        )
    });
    test('disabled, default', () => {
        expect(common.populateMarkers(false,'default',['red','green'])).toStrictEqual({
            size: 0,
            colors: ['red','green']
        }
        )
    });
});
describe('popDataLabels', () => {
    test('enabled, data', () => {
        expect(common.populateDataLabels(true,'data',['red','green'])).toStrictEqual({
            enabled: true,
            style: {
                colors: ['red','green']
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
        expect(common.populateDataLabels(true,'not data',['red','green'])).toStrictEqual({
            enabled: false,
        }
        )
    });
    test('disabled', () => {
        expect(common.populateDataLabels(true,'not data',['red','green'])).toStrictEqual({
            enabled: false,
        }
        )
    });
});
describe('popPlotOptions', () => {
    test('2 strings', () => {
        expect(common.populatePlotOptions('red','red')).toStrictEqual({
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
        expect(common.populatePlotOptions('red','')).toStrictEqual({
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
        expect(common.populatePlotOptions('','')).toStrictEqual({
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




