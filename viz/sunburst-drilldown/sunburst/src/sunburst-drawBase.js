// eslint-disable-next-line import/no-extraneous-dependencies
const d3 = Object.assign({}, require("d3-selection"));

export default function drawBase() {
    const ctx = this;

    this.wrapper = d3
        .select(`#${this.DOMtarget}`)
        .append("svg")
        .attr("width", this.dimensions.width)
        .attr("height", this.dimensions.height)
        .attr("x", 0)
        .attr("y", 0)
        .attr("class", "wrapper")
        .attr("id", "d3-root")
        .attr(
            "viewBox",
            `-${this.dimensions.width / 2 - this.horizontalOffset} -${this
                .dimensions.height / 2} ${this.dimensions.width} ${
                this.dimensions.height
            }`
        );

    this.g = this.wrapper.append("g");
}
