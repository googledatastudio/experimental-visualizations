/**
 * @fileoverview Description of this file.
 */

export const SVG_TOO_SMALL = `
<b>Error.</b> The component height is less than the visualization margin. Try making the component larger.
`;

export const GENERAL_ERROR = `
<b>Error.</b> For more information, check out the source code or file an issue at:
<code>
https://github.com/googledatastudio/experimental-visualizations/viz/timeline-v2
</code>
`;

export const C_SVG_TOO_SMALL = 'Try making the component larger.';

const C_GENERAL =
  'Error. For more information, see: \n https://github.com/googledatastudio/experimental-visualizations/viz/timeline-v2';

export const onError = (msg, consoleMsg = C_GENERAL) => {
  // append a div to the DOM for the README
  document.body.innerHTML = '';

  // append the data to a div
  let msgDiv = document.createElement('div');
  msgDiv.id = 'error';
  msgDiv.innerHTML = msg;
  document.body.appendChild(msgDiv);
  console.log(consoleMsg);
};
