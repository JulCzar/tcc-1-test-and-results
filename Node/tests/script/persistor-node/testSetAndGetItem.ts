import persistentStorage from '../../../src/services/persistentStorage';

export function testSetAndGetItem() {
  const key = 'foo';
  const value = 'bar';

  persistentStorage.setItem(key, value);
  const valueGet = persistentStorage.getItem(key);

  if (value !== valueGet) throw new Error('Value is not equal');
}
