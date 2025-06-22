class HashTable<K, V> {
  private buckets: Array<Array<[K, V]>>; // Array of arrays (buckets) for separate chaining
  private capacity: number; // Number of buckets

  constructor(capacity: number = 50) {
    this.capacity = capacity;
    this.buckets = new Array(this.capacity).fill(null).map(() => []); // Initialize empty buckets
  }

  // Hash function to convert a key to an index
  private hash(key: K): number {
    const stringKey = String(key);
    let hashValue = 0;

    for (let i = 0; i < stringKey.length; i++) {
      hashValue += stringKey.charCodeAt(i);
    }

    return hashValue % this.capacity; // Ensure the index is within bounds
  }

  // Insert or update a key-value pair
  set(key: K, value: V): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Check if the key already exists in the bucket
    for (const [existingKey, existingValue] of bucket) {
      if (existingKey === key) {
        existingValue = value; // Update the value if the key exists
        return;
      }
    }

    // If the key doesn't exist, add it to the bucket
    bucket.push([key, value]);
  }

  // Retrieve the value associated with a key
  get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Search for the key in the bucket
    for (const [existingKey, existingValue] of bucket) {
      if (existingKey === key) {
        return existingValue;
      }
    }

    return undefined; // Key not found
  }

  // Delete a key-value pair
  delete(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Find and remove the key from the bucket
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1); // Remove the key-value pair
        return true;
      }
    }

    return false; // Key not found
  }

  // Check if a key exists in the hash table
  has(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (const [existingKey] of bucket) {
      if (existingKey === key) {
        return true;
      }
    }

    return false;
  }

  // Get all keys in the hash table
  keys(): K[] {
    const allKeys: K[] = [];

    for (const bucket of this.buckets) {
      for (const [key] of bucket) {
        allKeys.push(key);
      }
    }

    return allKeys;
  }

  // Get all values in the hash table
  values(): V[] {
    const allValues: V[] = [];

    for (const bucket of this.buckets) {
      for (const [, value] of bucket) {
        allValues.push(value);
      }
    }

    return allValues;
  }
}
const hashTable = new HashTable<string, number>();

// Insert key-value pairs
hashTable.set("apple", 10);
hashTable.set("banana", 20);
hashTable.set("orange", 30);

// Retrieve values
console.log(hashTable.get("apple")); // Output: 10
console.log(hashTable.get("banana")); // Output: 20

// Check if a key exists
console.log(hashTable.has("orange")); // Output: true
console.log(hashTable.has("grape")); // Output: false

// Delete a key
console.log(hashTable.delete("banana")); // Output: true
console.log(hashTable.get("banana")); // Output: undefined

// Get all keys and values
console.log(hashTable.keys()); // Output: ["apple", "orange"]
console.log(hashTable.values()); // Output: [10, 30]
