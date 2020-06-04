import { populateLegend, populateStroke,populateYAxis } from './common'

test('popYAxis, multiple', () => {
    expect(populateYAxis(true,{color:'red',size:10.4352,family:'Arial'})).toStrictEqual({
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
test('popStroke, empty', () => {
    expect(populateStroke([])).toStrictEqual({
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        width: 2,
        colors: [],
        dashArray: 0,
    }
    )
});
test('popStroke, undef', () => {
    expect(populateStroke(undefined)).toStrictEqual({
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        width: 2,
        colors: undefined,
        dashArray: 0,
    }
    )
});
test('popStroke, one item', () => {
    expect(populateStroke(['1'])).toStrictEqual({
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        width: 2,
        colors: ['1'],
        dashArray: 0,
    }
    )
});
test('popStroke, multiple', () => {
    expect(populateStroke(['1', 'red', "#ffffff"])).toStrictEqual({
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        width: 2,
        colors: ['1', 'red', "#ffffff"],
        dashArray: 0,
    }
    )
});
test('popLegend, empty', () => {
    expect(populateLegend([])).toStrictEqual({
        markers: {
            fillColors: []
        }
    }
    )
});
test('popLegend, undef', () => {
    expect(populateLegend(undefined)).toStrictEqual({
        markers: {
            fillColors: undefined
        }
    }
    )
});
test('popLegend, one item', () => {
    expect(populateLegend(['1'])).toStrictEqual({
        markers: {
            fillColors: ['1']
        }
    }
    )
});
test('popLegend, multiple', () => {
    expect(populateLegend(['1', 'red', "#ffffff"])).toStrictEqual({
        markers: {
            fillColors: ['1', 'red', "#ffffff"]
        }
    }
    )
});

