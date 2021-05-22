import { VERSION } from '../../src/info/';

test('$info.version', () => {
  expect(VERSION).toEqual('__VERSION__');
});
