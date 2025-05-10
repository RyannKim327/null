type Key = string | number;

class HashTable<V> {
  private buckets: Array<Array<[Key, V]>>;
  private capacity: number;

  constructor(capacity = 50) {
    this.capacity = capacity;
    this.buckets = new Array(capacity).fill(null).map(() => []);
  }

  private hash(key: Key): number {
    // Simple hash function (djb2 variant)
    let hash = 5381;
    const strKey = key.toString();
    for (let i = 0; i < strKey.length; i++) {
      hash = (hash * 33) ^ strKey.charCodeAt(i);
    }
    return Math.abs(hash) % this.capacity;
  }

  set(key: Key, value: V): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Check if key exists, update value
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    // If key doesn't exist, add new pair
    bucket.push([key, value]);
  }

  get(key: Key): V | undefined {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (const [k, v] of bucket) {
      if (k === key) return v;
    }

    return undefined;
  }

  delete(key: Key): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }

    return false;
  }
}
const hashTable = new HashTable<number>();

hashTable.set("apple", 10);
hashTable.set("banana", 20);

console.log(hashTable.get("apple"));  // 10
console.log(hashTable.get("banana")); // 20
console.log(hashTable.get("orange")); // undefined

hashTable.delete("banana");
console.log(hashTable.get("banana")); // undefined
