import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { runTest } from './runTest';
import { persistent, native } from './script';

const Test: React.FC = () => {
  const [message, setMessage] = useState('Testing...');

  useEffect(() => {
    setTimeout(runTests, 3000, (...p) => setMessage(...p));
  }, []);

  return <div>{message}</div>;
};

export default Test;

const runTests = async (
  setMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const resultSet = await runTest('Set Item', persistent.testSetItem);
  await api.post('/save', { testName: 'set-web', result: resultSet });

  const resultGet = await runTest('Get Item', persistent.testGetItem);
  await api.post('/save', { testName: 'get-web', result: resultGet });

  const setGetTest = persistent.testSetAndGetItem;
  const resultSetGet = await runTest('Set Get Item', setGetTest);
  await api.post('/save', { testName: 'set-get-web', result: resultSetGet });

  const resultSetNative = await runTest('Set Item', native.testSetItem);
  await api.post('/save', {
    testName: 'set-native-web',
    result: resultSetNative,
  });
  const resultGetNative = await runTest('Get Item', native.testGetItem);
  await api.post('/save', {
    testName: 'get-native-web',
    result: resultGetNative,
  });
  const resultSetGetNative = await runTest(
    'Set and Get Item',
    native.testSetAndGetItem
  );
  await api.post('/save', {
    testName: 'set-get-native-web',
    result: resultSetGetNative,
  });
  setMessage('Test completed!');
  console.log('done!');
};
