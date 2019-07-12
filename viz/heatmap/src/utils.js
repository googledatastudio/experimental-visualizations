export const TOO_MANY_DIMS = `<b>Error.</b> If your dimensions have too many unique values, the heatmap may not display correctly. Try lower cardinality dimension(s) or resizing the component.
`;

export const SVG_TOO_SMALL = `
<b>Error.</b> The component height is less than the visualization margin. Try making the component larger.
`;

export const GENERAL_ERROR = `
<b>Error.</b> For more information, check out the source code or file an issue at:
<code>
https://github.com/googledatastudio/experimental-visualizations/viz/heatmap
</code>

`;

export const C_SVG_TOO_SMALL = 'Error. Try making the component larger.';

const C_GENERAL = `Error. For more information, check out the source code or file an issue:
  https://github.com/googledatastudio/experimental-visualizations/viz/heatmap`;

export const displayError = (msg, consoleMsg = C_GENERAL) => {
  // append a div to the DOM for the README
  document.body.innerHTML = '';

  // append the data to a div
  let msgDiv = document.createElement('div');
  msgDiv.id = 'error';
  msgDiv.innerHTML = msg;
  document.body.appendChild(msgDiv);
  console.log(consoleMsg);
};
