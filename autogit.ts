class HashTable<K, V> {
  private buckets: Array<Array<[K, V]>>;
  private capacity: number;

  constructor(capacity = 50) {
    this.capacity = capacity;
    this.buckets = new Array(capacity).fill(null).map(() => []);
  }

  private hash(key: K): number {
    let hash = 0;
    const keyString = key.toString();

    for (let i = 0; i < keyString.length; i++) {
      hash = (hash << 5) - hash + keyString.charCodeAt(i);
      hash |= 0; // Convert to 32-bit integer
    }

    return Math.abs(hash) % this.capacity;
  }

  set(key: K, value: V): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    const existingIndex = bucket.findIndex(([k]) => k === key);
    if (existingIndex >= 0) {
      // Update existing key
      bucket[existingIndex][1] = value;
    } else {
      // Insert new key-value pair
      bucket.push([key, value]);
    }
  }

  get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    const entry = bucket.find(([k]) => k === key);
    return entry ? entry[1] : undefined;
  }

  remove(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    const entryIndex = bucket.findIndex(([k]) => k === key);
    if (entryIndex >= 0) {
      bucket.splice(entryIndex, 1);
      return true;
    }
    return false;
  }

  has(key: K): boolean {
    return this.get(key) !== undefined;
  }
}
const map = new HashTable<string, number>();

map.set('apple', 5);
map.set('banana', 10);

console.log(map.get('apple')); // 5
console.log(map.get('banana')); // 10
console.log(map.get('cherry')); // undefined

map.remove('banana');
console.log(map.has('banana')); // false
