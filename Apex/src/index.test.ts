import { populateLegend } from './common'

test('popLegend, empty', () => {
    expect(populateLegend([])).toStrictEqual({
        markers: {
            fillColors: []
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
    expect(populateLegend(['1','red',"#ffffff"])).toStrictEqual({
        markers: {
            fillColors: ['1','red',"#ffffff"]
        }
    }
  )});

