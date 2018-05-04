# Sunburst Visualization

This is an incomplete set of instructions for using and deploying community
visualizations for Google's [Data Studio](https://datastudio.google.com). More
complete instructions can be found in the [developer
guides](https://developers.google.com/datastudio/visualization).

## Creating the sunburst.js file
1. cat [d3.js](https://d3js.org) into a new file called `sunburst.js`
2. add an empty line to `sunburst.js`
3. append the Data Studio visualization helper library into `sunburst.js`
4. add an empty line to `sunburst.js`
5. cat the [viz code](./src/index.js) into `sunburst.js` 

## Deploying the viz
1. Upload `sunburst.js` and [sunburst.json](./src/sunburst.json) to a GCP
   bucket.
2. Create an apps script project using [the provided
   manifest](./appsscript-src/appsscript.json)



