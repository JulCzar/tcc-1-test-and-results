import * as fs from 'fs';
import { runTest, TestResult } from './runTest';
import { saveResults } from '../src/utils/saveResults';
import { persistorNodeTests, nodeLocalStorageTests } from './script';

const outDir = 'output';

// const results: Record<string, TestResult[]> = {
//   set: runTest('Set item', persistorNodeTests.testSetItem),
//   get: runTest('Get item', persistorNodeTests.testGetItem),
//   setAndGet: runTest('Set and get item', persistorNodeTests.testSetAndGetItem),
// };

const resultsNode: Record<string, TestResult[]> = {
  // set: runTest('Set item', nodeLocalStorageTests.testSetItem),
  get: runTest('Get item', nodeLocalStorageTests.testGetItem),
  // setAndGet: runTest(
  //   'Set and get item',
  //   nodeLocalStorageTests.testSetAndGetItem
  // ),
};

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

// saveResults('get', results.get);
// saveResults('set', results.set);
// saveResults('set-and-get', results.setAndGet);
// saveResults('get-node', resultsNode.get);
// saveResults('set-node', resultsNode.set);
// saveResults('set-and-get-node', resultsNode.setAndGet);
