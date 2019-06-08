import * as td from './testData';
import * as ut from '../src/utils';

test('', () => {
  const testMsg = td.dim4Message;
  const outputMsg = td.d4createRoot;
  expect(ut.createRoot(testMsg)).toBe(outputMsg);
})
