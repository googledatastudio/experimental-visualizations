import {subscribeToData, objectTransform } from '@google/dscc';
import * as local from './localMessage';
import * as main from './main'
export const LOCAL = false;


// renders locally
if (LOCAL) {
  main.drawViz(local.message);
} else {
  subscribeToData(main.drawViz, { transform: objectTransform });
}
