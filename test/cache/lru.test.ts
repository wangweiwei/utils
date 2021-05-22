import { LRU } from '../../src';

test('cache.LRU', () => {
  const lru = new LRU(10);

  // 将容器缓存注满
  for (let i = 0; i < 10; i++) {
    lru.put(i, i);
  }

  // 取出缓存
  for (let i = 0; i < 10; i++) {
    expect(lru.get(i)).toEqual(i);
  }

  // 取未定义的缓存
  expect(lru.get('undefined')).toEqual(undefined);
});
