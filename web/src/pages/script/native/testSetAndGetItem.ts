export function testSetAndGetItem() {
  const key = 'foo';
  const value = 'bar';

  localStorage.setItem(key, value);
  const valueGet = localStorage.getItem(key);

  if (value !== valueGet) throw new Error('Value is not equal');
}
