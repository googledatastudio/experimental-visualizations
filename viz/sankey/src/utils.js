const ERROR_MESSAGE = `
<p>
The Sankey Diagram encountered an error.

<ol>
<li> Make sure that your two dimensions do not share a value. For example: if your first dimension has the value 'a', and your second dimension also includes the value 'a', this chart will not work. </li>
<li> Review the README/code and file an issue if necessary (you might have to copy the URL into a browser tab)
<a target="_new" href="https://github.com/googledatastudio/experimental-visualizations/tree/master/viz/sankey">https://github.com/googledatastudio/experimental-visualizations/tree/master/viz/sankey</a></li>

</ol>

</p>

<p>
This chart takes 2 dimensions (for the nodes on the left and right) and a metric (for the flows). It works best with two dimensions of low cardinality.
</p>

`;

export const onError = () => {
  // append a div to the DOM for the README
  document.body.innerHTML = '';

  // append the data to a div
  let readmeDiv = document.createElement('div');
  readmeDiv.innerHTML = ERROR_MESSAGE;
  document.body.appendChild(readmeDiv);
};
