type KeyValuePair<K, V> = {
  key: K;
  value: V;
};

class HashTable<K extends string | number, V> {
  private buckets: Array<KeyValuePair<K, V>[]>; // Array of buckets
  private readonly numBuckets: number;

  constructor(size = 42) {
    this.numBuckets = size;
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  // Simple hash function for string/number keys
  private hash(key: K): number {
    if (typeof key === 'number') {
      return key % this.numBuckets;
    }
    // For strings, sum char codes and mod
    let hashValue = 0;
    for (const char of key) {
      hashValue += char.charCodeAt(0);
    }
    return hashValue % this.numBuckets;
  }

  set(key: K, value: V): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const existingPair = bucket.find(pair => pair.key === key);

    if (existingPair) {
      existingPair.value = value; // Update existing
    } else {
      bucket.push({ key, value }); // Insert new
    }
  }

  get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const pair = bucket.find(pair => pair.key === key);
    return pair?.value;
  }

  remove(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const initialLength = bucket.length;

    this.buckets[index] = bucket.filter(pair => pair.key !== key);

    return bucket.length !== this.buckets[index].length; // true if something was removed
  }
}
const myHashTable = new HashTable<string, number>();

myHashTable.set('apple', 5);
myHashTable.set('banana', 10);
console.log(myHashTable.get('apple')); // 5
console.log(myHashTable.get('banana')); // 10
console.log(myHashTable.get('cherry')); // undefined

myHashTable.set('apple', 15); // Update
console.log(myHashTable.get('apple')); // 15

myHashTable.remove('banana');
console.log(myHashTable.get('banana')); // undefined
