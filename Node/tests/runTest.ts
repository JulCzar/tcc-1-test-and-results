const repeatTimes = 10;

const testTimes = [1000, 2500, 5000, 10000, 25000, 50000];

export function testRunner(test: () => void, times: number) {
  const start = Date.now();

  for (let i = 0; i < repeatTimes; i++) for (let j = 0; j < times; j++) test();

  const duration = Date.now() - start;
  const averageTime = duration / repeatTimes;

  console.log(
    `Test ${test.name} ran ${times} times and took ${averageTime}ms on average`
  );

  return {
    name: test.name,
    time: averageTime,
    times,
  };
}

export const runTest = (testName: string, test: () => void) => {
  const results: ReturnType<typeof testRunner>[] = [];

  console.group(testName);
  for (const timesOfTest of testTimes)
    results.push(testRunner(test, timesOfTest));

  console.groupEnd();

  return results;
};

export type TestResult = ReturnType<typeof testRunner>;
