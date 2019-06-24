export const TOO_MANY_DIMS = `
<b>This community visualization encountered an error.</b> If your dimensions have too many unique values, the heatmap may not display correctly. Try lower cardinality dimension(s) or resizing the component.
`;

export const SVG_TOO_SMALL = `
<b>This community visualization encountered an error.</b> Try making the component larger.
`;

export const GENERAL_ERROR = `
<b>This community visualization encountered an error.</b> For more information, check out the source code or file an issue at:
<code>
https://github.com/googledatastudio/experimental-visualizations/viz/heatmap
</code>

`;

export const c_svg_too_small = 'Try making the component larger.';

export const c_general = 'This community visualization encountered an error.';

export const onError = (msg, c_msg = c_general) => {
  // append a div to the DOM for the README
  document.body.innerHTML = '';

  // append the data to a div
  let msgDiv = document.createElement('div');
  msgDiv.id = 'error';
  msgDiv.innerHTML = msg;
  document.body.appendChild(msgDiv);
  console.log(c_msg);
};
