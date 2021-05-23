/**
 * LRU算法
 *
 * @author WeiweiWang
 */
export class LRU {
  /**
   * @ignore
   */
  private cache: Map<number | string, any> = new Map();
  /**
   * @ignore
   */
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.init();
  }

  /**
   * @ignore
   */
  private init() {
    this.cache = new Map();
  }

  /**
   * 根据key获取value
   *
   * @param key 获取缓存信息的key
   */
  get(key: number | string) {
    if (this.cache.has(key)) {
      const temp = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, temp);
      return temp;
    } else {
      return undefined;
    }
  }

  /**
   * 设置缓存信息
   *
   * @param key 缓存信息的key
   * @param value 缓存信息
   */
  put(key: number | string, value: any) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }

    this.cache.set(key, value);
  }

  /**
   * 清理缓存
   */
  clear() {
    this.init();
  }
}
