import persistentStorage from '../../src/services/persistentStorage';

export function testSetItem() {
  persistentStorage.setItem('foo', ['bar']);
}
