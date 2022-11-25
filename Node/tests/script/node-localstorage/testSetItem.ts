import { nodeLocalStorage } from '../../../src/services/nodeLocalStorage';

export function testSetItem() {
  nodeLocalStorage.setItem('foo', 'bar');
}
