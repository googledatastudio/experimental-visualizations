import * as local from './localMessage';
import {drawViz} from './common';
import {subscribeToData, objectTransform} from '@google/dscc';
// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = false;

// renders locally
if (LOCAL) {
  drawViz(local.message);
} else {
  subscribeToData(drawViz, {transform: objectTransform});
}
