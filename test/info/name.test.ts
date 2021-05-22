import { PKG_NAME } from '../../src';

test('$info.name', () => {
  expect(PKG_NAME).toEqual('__NAME__');
});
