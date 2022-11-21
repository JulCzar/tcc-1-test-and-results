import * as fs from 'fs';
import { runTest, TestResult } from './runTest';
import { saveResults } from '../src/utils/saveResults';
import { testGetItem, testSetAndGetItem, testSetItem } from './script';

const outDir = 'output';

const results: Record<string, TestResult[]> = {
  set: runTest('Set item', testSetItem),
  get: runTest('Get item', testGetItem),
  setAndGet: runTest('Set and get item', testSetAndGetItem),
};

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

saveResults('get', results.get);
saveResults('set', results.set);
saveResults('set-and-get', results.setAndGet);
