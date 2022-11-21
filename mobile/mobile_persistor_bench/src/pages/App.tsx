import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { api } from '../services/api';
import { styles } from '../styles';
import { runTest } from './runTest';
import persistent from './script';

const App = () => {
  const [message, setMessage] = useState('Running tests...');

  useEffect(() => {
    setTimeout(runTests, 3000, (...p) => setMessage(...p));
  }, []);

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
};

const runTests = async (
  setMessage: React.Dispatch<React.SetStateAction<string>>,
) => {
  setMessage('Testing Set Item...');
  const resultSet = await runTest('Set Item', persistent.testSetItem);
  console.table(resultSet);
  try {
    await api.post('/save', {
      testName: __DEV__ ? 'set-android' : 'set-android-compiled',
      result: resultSet,
    });
  } catch (e) {
    console.log('Test Error ', e);
    setMessage('Test Error');
    return;
  }

  setMessage('Testing Get Item...');
  const resultGet = await runTest('Get Item', persistent.testGetItem);
  try {
    await api.post('/save', {
      testName: __DEV__ ? 'get-android' : 'get-android-compiled',
      result: resultGet,
    });
  } catch (e) {
    console.log('Test Error ', e);
    setMessage('Test Error');
    return;
  }

  setMessage('Testing Set Get Item...');
  const setGetTest = persistent.testSetAndGetItem;
  const resultSetGet = await runTest('Set Get Item', setGetTest);
  try {
    await api.post('/save', {
      testName: __DEV__ ? 'set-get-android' : 'set-get-android-compiled',
      result: resultSetGet,
    });
  } catch (e) {
    console.log('Test Error ', e);
    setMessage('Test Error');
    return;
  }

  setMessage('Test completed!');
  console.log('done!');
};

export default App;
