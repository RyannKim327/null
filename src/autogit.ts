class HashTable<K, V> {
  private buckets: Array<Array<{ key: K; value: V }>>;
  private capacity: number;

  constructor(capacity: number = 16) {
    this.capacity = capacity;
    this.buckets = new Array(this.capacity);
    for (let i = 0; i < this.capacity; i++) {
      this.buckets[i] = [];
    }
  }

  // Hash function to compute index from key
  private hash(key: K): number {
    const keyString = String(key);
    let hash = 0;

    for (let i = 0; i < keyString.length; i++) {
      hash = (hash + keyString.charCodeAt(i) * 31) % this.capacity;
    }
    return hash;
  }

  // Add or update a key-value pair
  set(key: K, value: V): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Check if key exists, update if found
    for (let pair of bucket) {
      if (pair.key === key) {
        pair.value = value;
        return;
      }
    }

    // If key doesn't exist, add new pair
    bucket.push({ key, value });
  }

  // Retrieve value by key
  get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let pair of bucket) {
      if (pair.key === key) {
        return pair.value;
      }
    }
    return undefined; // Not found
  }

  // Remove key-value pair
  delete(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false; // Not found
  }
}
const myMap = new HashTable<string, number>();
myMap.set('apple', 5);
console.log(myMap.get('apple')); // Output: 5
myMap.delete('apple');
console.log(myMap.get('apple')); // Output: undefined
