import persistentStoragePromise from '../../../services/persistentStorage';

export async function testSetAndGetItem() {
  const persistentStorage = await persistentStoragePromise;

  const key = 'foo';
  const value = 'bar';

  persistentStorage.setItem(key, value);
  const valueGet = persistentStorage.getItem(key);

  if (value !== valueGet) {
    throw new Error('Value is not equal');
  }
}
