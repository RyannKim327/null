// Define a key-value pair type
interface Entry<K, V> {
  key: K;
  value: V;
}

// The HashTable class
class HashTable<K, V> {
  private buckets: Array<Array<Entry<K, V>>>;
  private capacity: number;

  constructor(size: number = 32) {
    this.capacity = size;
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  // Hash function (simple example)
  private hash(key: K): number {
    const stringKey = String(key);
    let hash = 0;

    for (let char of stringKey) {
      hash += char.charCodeAt(0);
    }

    return hash % this.capacity;
  }

  // Set method
  set(key: K, value: V): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Check if key exists; if so, update
    for (let entry of bucket) {
      if (entry.key === key) {
        entry.value = value;
        return;
      }
    }

    // Otherwise, add new entry
    bucket.push({ key, value });
  }

  // Get method
  get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let entry of bucket) {
      if (entry.key === key) {
        return entry.value;
      }
    }
    return undefined;
  }

  // Delete method
  delete(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    const entryIndex = bucket.findIndex(entry => entry.key === key);
    if (entryIndex !== -1) {
      bucket.splice(entryIndex, 1);
      return true;
    }
    return false;
  }
}
const myMap = new HashTable<string, number>();
myMap.set("apple", 5);
console.log(myMap.get("apple")); // Output: 5
myMap.delete("apple");
console.log(myMap.get("apple")); // Output: undefined
