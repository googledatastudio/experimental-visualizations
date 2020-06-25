import {ObjectFormat, subscribeToData, objectTransform} from '@google/dscc';
import * as viz from '@google/dscc-scripts/viz/initialViz';
import * as local from './localMessage';

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = true;

// write viz code here
const drawViz = (data: ObjectFormat) => {
  viz.readmeViz();
  viz.firstViz(data);
};

// renders locally
if (LOCAL) {
  drawViz(local.message);
} else {
  subscribeToData(drawViz, {transform: objectTransform});
}
