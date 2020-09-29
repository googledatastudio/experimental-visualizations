/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
