class HashTable<K extends string | number, V> {
  private buckets: Array<Array<[K, V]>>;
  private numBuckets: number;

  constructor(numBuckets = 16) {
    this.numBuckets = numBuckets;
    this.buckets = new Array(numBuckets).fill(null).map(() => []);
  }

  // Simple hash function for string or number keys
  private hash(key: K): number {
    if (typeof key === 'number') {
      return key % this.numBuckets;
    } else {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash << 5) - hash + key.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
      }
      return Math.abs(hash) % this.numBuckets;
    }
  }

  set(key: K, value: V): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const existingIndex = bucket.findIndex(([existingKey]) => existingKey === key);

    if (existingIndex >= 0) {
      bucket[existingIndex][1] = value; // Update existing value
    } else {
      bucket.push([key, value]); // Insert new key-value pair
    }
  }

  get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const entry = bucket.find(([existingKey]) => existingKey === key);
    return entry ? entry[1] : undefined;
  }

  remove(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const entryIndex = bucket.findIndex(([existingKey]) => existingKey === key);

    if (entryIndex >= 0) {
      bucket.splice(entryIndex, 1);
      return true;
    }
    return false;
  }
}
const table = new HashTable<string, number>();

table.set("apple", 5);
table.set("banana", 10);

console.log(table.get("apple"));  // 5
console.log(table.get("banana")); // 10
console.log(table.get("cherry")); // undefined

table.remove("apple");
console.log(table.get("apple"));  // undefined
