import persistentStoragePromise from '../../../services/persistentStorage';

export async function testGetItem() {
  (await persistentStoragePromise).getItem('foo');
}
