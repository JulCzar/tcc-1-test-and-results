import persistentStorage from '../../../services/persistentStorage';

export function testSetItem() {
  persistentStorage.setItem('foo', ['bar']);
}
