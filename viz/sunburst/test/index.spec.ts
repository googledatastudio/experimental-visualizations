import * as td from './testData';
import * as ut from '../src/utils';

test('test message works', () => {
  const testMsg = td.dim4Message;
  const outputMsg = td.d4createRoot;
  expect(ut.createRoot(testMsg)).toEqual(outputMsg);
})

test('test new parsing works', () => {
  const testMsg = td.dim4Message;
  const outputMsg = td.d4createRoot;
  const hierarchy = {
    children: ut.buildHierarchy(testMsg.tables.DEFAULT, testMsg.fields)
  };
  expect(hierarchy).toEqual(outputMsg);
})
