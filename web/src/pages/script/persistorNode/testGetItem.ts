import persistentStorage from '../../../services/persistentStorage';

export function testGetItem() {
  persistentStorage.getItem('foo');
}
