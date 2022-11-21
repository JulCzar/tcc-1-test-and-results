import persistentStoragePromise from '../../../services/persistentStorage';

export async function testSetItem() {
  (await persistentStoragePromise).setItem('foo', ['bar']);
}
