class HashTable {
  constructor() {
    this.size = 16; // Size of the hash table (can be adjusted)
    this.buckets = Array(this.size); // Array to hold the hash table data
  }

  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.size; // Hash value mapped to a bucket index
  }

  insert(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = []; // Create an empty bucket if it doesn't exist
    }
    this.buckets[index].push({ key, value }); // Add key-value pair to the bucket
  }

  search(key) {
    const index = this.hash(key);
    if (this.buckets[index]) {
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i].key === key) {
          return this.buckets[index][i].value; // Return the value if key is found
        }
      }
    }
    return null; // Return null if key is not found
  }

  remove(key) {
    const index = this.hash(key);
    if (this.buckets[index]) {
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i].key === key) {
          this.buckets[index].splice(i, 1); // Remove key-value pair from the bucket
          break;
        }
      }
    }
  }
}

// Example usage:
const hashTable = new HashTable();
hashTable.insert("name", "John");
hashTable.insert("age", 25);

console.log(hashTable.search("name")); // Output: John
console.log(hashTable.search("age")); // Output: 25

hashTable.remove("age");
console.log(hashTable.search("age")); // Output: null
