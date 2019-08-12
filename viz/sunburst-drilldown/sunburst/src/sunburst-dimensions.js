import Helper from '../../js/d3-common';

export default function getDimensions(elementId) {
    const dim = Helper.getMaxDimensions(elementId);
    const vizWitdh = dim.w;
    const vizHeigth = dim.h;
    const vizRadius = dim.max;

    const dimensions = {
        width: vizWitdh,
        height: vizHeigth,
        radius: vizRadius / 2,
        margin: {
            top: 15,
            right: 15,
            bottom: 15,
            left: 15,
        },
    };

    if (this.legend == true) {
        // space for legend
        dimensions.margin.right = dimensions.width/6;
        this.horizontalOffset = dimensions.margin.right - dimensions.margin.left;
    }

    dimensions.boundedWidth = dimensions.radius - dimensions.margin.left/2 - dimensions.margin.right/2;
    dimensions.boundedHeight = dimensions.radius - dimensions.margin.top - dimensions.margin.bottom;
    dimensions.boundedRadius = dimensions.boundedWidth > dimensions.boundedHeight
        ? dimensions.boundedHeight
        : dimensions.boundedWidth;
    dimensions.tooltipRadius = dimensions.boundedRadius*0.4

    return dimensions;
}
