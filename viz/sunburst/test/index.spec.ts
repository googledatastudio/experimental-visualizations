import * as td from './testData';
import * as ut from '../src/utils';

test('test message works', () => {
  const testMsg = td.dim4Message;
  const outputMsg = td.d4createRoot;
  expect(ut.createRoot(testMsg)).toEqual(outputMsg);
})

console.log(JSON.stringify(ut.buildHierarchy(td.dim4Message.tables.DEFAULT), null, 2));
