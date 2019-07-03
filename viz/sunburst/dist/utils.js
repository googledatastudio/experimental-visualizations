'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const d3 = Object.assign(
  {},
  require('d3'),
  require('d3-scale-chromatic'),
  require('d3-hierarchy'),
  require('d3-array')
);
exports.buildHierarchy = (table, fields, level = 0) => {
  const dimensionNum = table[0].dimension.length;
  if (level < dimensionNum - 1) {
    const grouped = d3.group(table, d => d.dimension[level]);
    const entries = Array.from(grouped.keys());
    return entries.map(k => ({
      name: k,
      dimId: fields.dimension[level].id,
      children: exports.buildHierarchy(grouped.get(k), fields, level + 1),
    }));
  } else {
    const grouped = d3.group(table, d => d.dimension[level]);
    const entries = Array.from(grouped.keys());
    return entries.map(k => ({
      name: k,
      dimId: fields.dimension[level].id,
      value: grouped.get(k).reduce((acc, d) => acc + d.metric[0], 0),
    }));
  }
};
exports.GENERAL_ERROR = `
<b>Error.</b> For more information, check out the source code or file an issue at:
<code>
https://github.com/googledatastudio/experimental-visualizations/viz/sunburst
</code>
`;
exports.SVG_TOO_SMALL = `
<b>Error.</b> The component is smaller than the visualization margins. Try making the component larger.
`;
exports.C_SVG_TOO_SMALL = 'Error. Try making the component larger.';
const C_GENERAL =
  'Error. For more information, check out the source code or file an issue at \n https://github.com/googledatastudio/experimental-visualizations/viz/sunburst';
exports.displayError = (msg, consoleMsg = C_GENERAL) => {
  // append a div to the DOM for the README
  document.body.innerHTML = '';
  // append the data to a div
  let msgDiv = document.createElement('div');
  msgDiv.id = 'error';
  msgDiv.innerHTML = msg;
  document.body.appendChild(msgDiv);
  console.log(consoleMsg);
};
