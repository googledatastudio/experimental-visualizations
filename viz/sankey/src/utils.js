export const GENERAL_ERROR = `
<b>Error.</b> For more information, check out the source code or file an issue at:
<code>
https://github.com/googledatastudio/experimental-visualizations/tree/master/viz/sankey
</code>`;

export const DATA_ERROR = `<b>Error.</b> This Sankey diagram will not render if the 2 dimensions share a value.
Try selecting data fields that do not share a value.
`;

export const C_DATA_ERROR = `Error. This Sankey diagram will not render if the 2 dimensions share a value.
Try selecting data fields that do not share a value. To learn more, visit:
https://github.com/googledatastudio/experimental-visualizations/tree/master/viz/sankey`;

const C_GENERAL = `Error. For more information, check out the source code or file an issue:
https://github.com/googledatastudio/experimental-visualizations/tree/master/viz/sankey`;

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
