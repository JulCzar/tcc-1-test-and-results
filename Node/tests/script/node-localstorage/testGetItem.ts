import { nodeLocalStorage } from '../../../src/services/nodeLocalStorage';

export function testGetItem() {
  nodeLocalStorage.getItem('foo');
}
