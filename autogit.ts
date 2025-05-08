class HashTable<K extends string | number, V> {
  private buckets: Array<Array<[K, V]>>;
  private capacity: number;

  constructor(capacity = 50) {
    this.capacity = capacity;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }

  private hash(key: K): number {
    let hash = 0;
    const keyStr = key.toString();
    
    for (let i = 0; i < keyStr.length; i++) {
      hash = (hash * 31 + keyStr.charCodeAt(i)) % this.capacity;
    }
    
    return hash;
  }

  set(key: K, value: V): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Check if key already exists, update value
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    // Key not found, add new pair
    bucket.push([key, value]);
  }

  get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (const [k, v] of bucket) {
      if (k === key) {
        return v;
      }
    }
    
    return undefined;
  }

  remove(key: K): boolean {
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
const hashTable = new HashTable<string, number>();

hashTable.set("apple", 3);
hashTable.set("banana", 5);
console.log(hashTable.get("apple")); // 3
hashTable.remove("apple");
console.log(hashTable.get("apple")); // undefined
