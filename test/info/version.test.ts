import { VERSION } from '../../src';

test('$info.version', () => {
  expect(VERSION).toEqual('__VERSION__');
});
