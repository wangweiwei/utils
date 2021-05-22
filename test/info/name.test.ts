import { PKG_NAME } from '../../src/info/';

test('$info.name', () => {
  expect(PKG_NAME).toEqual('__NAME__');
});
