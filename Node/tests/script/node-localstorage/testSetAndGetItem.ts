import { nodeLocalStorage } from '../../../src/services/nodeLocalStorage';

export function testSetAndGetItem() {
  const key = 'foo';
  const value = 'bar';

  nodeLocalStorage.setItem(key, value);
  const valueGet = nodeLocalStorage.getItem(key);

  if (value !== valueGet) throw new Error('Value is not equal');
}
