/* eslint-disable import/no-extraneous-dependencies */
const d3 = Object.assign({}, require("d3-array"), require("d3-selection"));

export function buildLegend(root, level) {
  // Clear Legend
  d3.select("#legend").remove();
  d3.select("#breadcrumb").remove();

  if (this.legend) {
    //What is the fifference between treedata and the root?

    const legUnit = 20;
    const maxLegend = Math.floor((this.dimensions.boundedRadius * 2) / legUnit);
    let legendLength = root.children.length;

    if (legendLength > maxLegend) {
      legendLength = maxLegend;
    }

    const legHeight = legendLength * legUnit;
    const legStart = legHeight - this.dimensions.boundedRadius;

    // BREADCRUMBS
    const breadcrumb = this.wrapper
      .append("g")
      .attr("id", "breadcrumb")
      .selectAll("g")
      .data(this.dimensionsAccessor.filter((d, i) => i <= level))
      .enter()
      .append("g")
      .attr("id", (d, i) => `breadcrumb-${i}`)
      .style(
        "transform",
        (d, i) =>
          `translate(${this.dimensions.boundedRadius + 50}px, ${i * legUnit -
            legStart -
            (level + 1.5) * legUnit}px)`
      );

    const breadcrumbValues = this.getParentArray(root);

    breadcrumb
      .append("text")
      .attr("class", "breadcrumb-text")
      .attr("x", 21)
      .attr("y", 13)
      .attr("fill", this.fontColor)
      .attr("fill-opacity", this.fontOpacity)
      .text((d, i) => `${d}: ${breadcrumbValues[i]}`);

    // LEGEND

    const legendBar = this.wrapper
      .append("g")
      .attr("id", "legend")
      .selectAll("g")
      .data(
        root
          .descendants()
          .filter((d, i) => i < maxLegend && d.data.depth == level + 1)
      )
      .enter()
      .append("g")
      .attr("id", d => `legend-${d.data.id}`)
      .style(
        "transform",
        (d, i) =>
          `translate(${this.dimensions.boundedRadius + 50}px, ${i * legUnit -
            legStart}px)`
      );

    legendBar
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", level == 0 ? d => this.colorScale(d.data.id) : "black")
      .attr("fill-opacity", level == 0 ? 0.6 : 0.1);

    legendBar
      .append("text")
      .attr("class", "legend-text")
      .attr("x", 21)
      .attr("y", 13)
      .attr("fill", this.fontColor)
      .attr("fill-opacity", this.fontOpacity)
      .text(d => d.data.data.key);
  }
}
export default buildLegend;
