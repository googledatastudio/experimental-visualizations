export const TOO_MANY_DIMS = `
If you have too many dimensions, the heatmap cells have no width. Try a lower cardinality dimension or resizing the component.
`;

export const GENERAL_ERROR = `
This community visualization encountered an error. Feel free to check out the source code or file an issue at:
<code>
https://github.com/googledatastudio/experimental-visualizations/viz/heatmap
</code>

`;

export const onError = (msg) => {
  // append a div to the DOM for the README
  document.body.innerHTML = '';

  // append the data to a div
  let readmeDiv = document.createElement('div');
  readmeDiv.innerHTML = msg;;
  document.body.appendChild(readmeDiv);
};
