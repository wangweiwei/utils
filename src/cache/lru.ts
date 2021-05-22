export class LRU {
  private cache: Map<number | string, any> = new Map();
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.init();
  }

  private init() {
    this.cache = new Map();
  }

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

  put(key: number | string, value: any) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }

  clear() {
    this.init();
  }
}
