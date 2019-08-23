/* eslint-disable import/no-extraneous-dependencies */
import Helper from '../../js/d3-common';
const d3 = Object.assign(
  {},
  require('d3-array'),
  require('d3-selection'),
  require('d3-format'),
  require('d3-transition'),
  require('d3-interpolate'),
  require('d3-shape')
);

export function drawContent() {
  const ctx = this;

  const root = this.partitionData(this.treeData);

  root.each(d => {
    d.current = d;
    d.angle = d.x1 - (d.x1 - d.x0) / 2;
    d.radius = d.y1 - (d.y1 - d.y0) / 2;
  });

  const paths = this.g
    .append('g')
    .attr('fill-opacity', 0.8)
    .selectAll('path')
    .data(root.descendants())
    .enter()
    .append('path')
    .attr('fill', d => {
      while (d.depth > 1) d = d.parent;
      return !d.depth ? 'none' : this.colorScale(d.data.id);
    })
    .attr('fill-opacity', d => (d.children ? 0.6 : 0.4))
    .attr('d', this.arc)
    .attr('data-test', d => d.data.id)
    .attr('id', (d, i) => `cp-${i}`)
    .on('mouseover', (d, i, node) => {
      showTooltip(d, i, node);
    })
    .on('mouseout', hideToolTip);

  paths
    .filter(d => d.children)
    .style('cursor', 'pointer')
    .on('click', d => {
      // will update local storage
      manageState(d);
      if (ctx.filterEnabled == false) {
        // enabled filter will refresh the viz
        changeRoot(d, 0);
      } else {
        const target = getTarget(ctx, d);
        callFilter(target, target.depth);
      }
    });

  this.clickHistory = this.locStorage.state.clickHistory;
  const len = this.clickHistory.length;
  if (len > 0) {
    changeRoot(this.clickHistory[len - 1], 1);
  } else {
    this.buildLegend(root, 0);
  }

  // ########################
  // #### MANAGE STATE ####
  function manageState(target) {
    // Clicked Target
    const targetArray = ctx.getParentArray(target);

    // Is the clicked target already in the history?
    let change = 1;
    ctx.clickHistory.forEach(element => {
      // compare two arrays
      const e = element.toString();
      const t = targetArray.toString();
      if (e == t) {
        change = -1;
      }
    });

    // Push or Pop
    change == 1 ? ctx.clickHistory.push(targetArray) : ctx.clickHistory.pop();

    // Write click history to local storage
    Helper.saveLocStorage(ctx, 'clickHistory', ctx.clickHistory);
  }

  // ########################
  // #### CHANGE ROOT ####

  function getTarget(obj, target) {
    // target is always the last element of the click history otherwise the root
    if (obj.clickHistory.length > 0) {
      const targetArray = obj.clickHistory[obj.clickHistory.length - 1];
      return obj.getNodeFromFunnel(targetArray);
    } else {
      return root;
    }
  }
  function changeRoot(p, reload) {
    const target = getTarget(ctx, p);

    root.each(d => {
      d.target = {
        x0:
          Math.max(
            0,
            Math.min(1, (d.x0 - target.x0) / (target.x1 - target.x0))
          ) *
          2 *
          Math.PI,
        x1:
          Math.max(
            0,
            Math.min(1, (d.x1 - target.x0) / (target.x1 - target.x0))
          ) *
          2 *
          Math.PI,
        y0: Math.max(0, d.y0 - target.y0),
        y1: Math.max(0, d.y1 - target.y0),
      };
      d.newAngle = d.target.x1 - (d.target.x1 - d.target.x0) / 2;
      d.newRadius = d.target.y1 - (d.target.y1 - d.target.y0) / 2;
    });

    const t = ctx.g.transition().duration(10);

    // Transition the data on all arcs, even the ones that aren’t visible,
    // so that if this transition is interrupted, entering arcs will start
    // the next transition from the desired position.
    paths
      .transition()
      .duration(ctx.AnimDuration)
      .tween('data', d => {
        const i = d3.interpolate(d.current, d.target);
        return t => (d.current = i(t));
      })
      .attrTween('d', d => () => ctx.arc(d.current));

    // REBUILD LEGEND
    ctx.buildLegend(target, target.depth);
  }

  // #### TOOLTIP ####
  function showTooltip(d, i, node) {
    let angle = d.angle;
    let radius = d.radius;

    // New source if item was clicked
    if (ctx.locStorage.state.clickHistory.length > 0) {
      angle = d.newAngle;
      radius = d.newRadius;
    }

    const tooltip = d3
      .select('#tooltip')
      .style('max-width', `${ctx.dimensions.boundedRadius}px`);

    // TOOLTIP TEXT
    const percentage =
      Math.round((d.value * 100) / d.parent.value) == 0
        ? '< 1%'
        : d3.format('.0%')(d.value / d.parent.value);

    const totalPercentage =
      Math.round((d.value * 100) / ctx.totalMetric) == 0
        ? '< 1%'
        : d3.format('.0%')(d.value / ctx.totalMetric);

    let metricText = `${ctx.metricAccessor}: ${d.value} `;
    metricText += `(${percentage}`;
    if (d.data.depth > 1) {
      metricText += ` | ${totalPercentage}`;
    }
    metricText += `)`;

    tooltip
      .select('#title')
      .text(`${ctx.dimensionsAccessor[d.depth - 1]}: ${d.data.data.key}`);
    tooltip.select('#count').text(metricText);

    // TOOLTIP POSITION
    const w = tooltip.node().offsetWidth;
    const h = tooltip.node().offsetHeight;

    const x =
      Math.cos(angle + Math.PI / 2) * ctx.dimensions.tooltipRadius +
      ctx.dimensions.width / 2;
    const y =
      Math.sin(angle + Math.PI / 2) * ctx.dimensions.tooltipRadius +
      ctx.dimensions.height / 2;

    tooltip
      .style('opacity', 0.8)
      .style(
        'transform',
        `translate(${x - ctx.horizontalOffset - w / 2}px, ${y - h - 10}px)`
      );

    // TOOLTIP LINE + DOT
    const tx =
      Math.cos(angle - Math.PI / 2) * radius +
      ctx.dimensions.width / 2 -
      ctx.dimensions.width / 2;
    const ty =
      Math.sin(angle - Math.PI / 2) * radius +
      ctx.dimensions.height / 2 -
      ctx.dimensions.height / 2;

    ctx.g
      .append('circle')
      .attr('class', 'tooltip-dot')
      .attr('cx', tx)
      .attr('cy', ty)
      .attr('r', 3)
      .style('fill', 'black')
      .style('opacity', 0.7);

    const lineX = x - ctx.dimensions.width / 2;
    const lineY = y - ctx.dimensions.height / 2 - 10;
    ctx.wrapper
      .append('line')
      .attr('class', 'tooltip-line')
      .attr('x1', lineX)
      .attr('y1', lineY)
      .attr('x2', tx)
      .attr('y2', ty)
      .attr('stroke-width', 1)
      .attr('stroke', 'black')
      .style('opacity', 0.7);
  }

  function callFilter(root, level) {
    const filterConcepts = ctx.dimensionsAccessorId.slice(0, level);
    const valueArray = ctx.getParentArray(root, 'key');

    const filterValues = [];
    filterValues.push(valueArray.slice(0, level));

    ctx.filterDashbord(filterConcepts, filterValues);
  }
}

export function hideToolTip() {
  d3.select('#tooltip')
    .style('opacity', 0)
    .style('transform', 'translate(-10000px, -10000px)');

  d3.select('.tooltip-line').remove();
  d3.selectAll('.tooltip-dot').remove();
}

export default drawContent;
