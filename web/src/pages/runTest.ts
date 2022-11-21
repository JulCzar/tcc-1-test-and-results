const repeatTimes = 10;

const testTimes = [
  1_000, 2_500, 5_000, 10_000, 25_000, 50_000, 100_000, 250_000, 500_000,
];


const stall = (time: number) => new Promise(r => setTimeout(r, time));

export function testRunner(test: () => void, times: number) {
  const start = Date.now();

  for (let i = 0; i < repeatTimes; i++) {
    for (let j = 0; j < times; j++) test();
  }

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

export const runTest = async (testName: string, test: () => void) => {
  const results: ReturnType<typeof testRunner>[] = [];

  console.group(testName);
  for (const timesOfTest of testTimes) {
    results.push(testRunner(test, timesOfTest));
    await stall(100);
  }
  console.groupEnd();

  return results;
};

export type TestResult = ReturnType<typeof testRunner>;
