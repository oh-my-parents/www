const inner = new Map<string, string>();

const InMemoryStorage:Storage = {
  setItem(key: string, value:string) {
    inner.set(key, value);
  },
  getItem(key: string) {
    return inner.get(key) || null;
  },
  clear() {
  },

  key(index: number) {
    if (index < 0) return null;
    return [...inner.keys()].at(index) || null;
  },
  removeItem(key: string): void {
    inner.delete(key);
  },

  get length() : number {
    return inner.size;
  }

}


export default InMemoryStorage;
