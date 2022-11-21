const repeatTimes = 10;

const testTimes = [1_000, 2_500, 5_000, 10_000, 25_000, 50_000];

const u = undefined;
const stall = (time: number) => new Promise(r => setTimeout(r, time, u));

export async function testRunner(
  test: () => Promise<void> | void,
  times: number,
) {
  const start = Date.now();

  for (let i = 0; i < repeatTimes; i++) {
    for (let j = 0; j < times; j++) {
      // eslint-disable-next-line jest/no-disabled-tests
      await test();
    }
  }

  const duration = Date.now() - start;
  const averageTime = duration / repeatTimes;

  console.log(
    `Test ${test.name} ran ${times} times and took ${averageTime}ms on average`,
  );

  return {
    name: test.name,
    time: averageTime,
    times,
  };
}

export const runTest = async (testName: string, test: () => void) => {
  const results: TestResult[] = [];

  console.group(testName);
  for (const timesOfTest of testTimes) {
    const result = await testRunner(test, timesOfTest);
    results.push(result);
    await stall(500);
  }
  console.groupEnd();

  return results;
};

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
export type TestResult = UnwrapPromise<ReturnType<typeof testRunner>>;
