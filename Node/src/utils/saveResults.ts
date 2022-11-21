import * as fs from 'fs';
import path from 'path';
import type { TestResult } from '../../tests/runTest';

export function saveResults(of: string, results: TestResult[]) {
  fs.writeFileSync(
    path.join('output', `results-${of}.csv`),
    'name,time,times\n' + results.map(r => [r.name, r.time, r.times]).join('\n')
  );
}
