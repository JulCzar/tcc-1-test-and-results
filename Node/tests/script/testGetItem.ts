import persistentStorage from '../../src/services/persistentStorage';

export function testGetItem() {
  persistentStorage.getItem('foo');
}
