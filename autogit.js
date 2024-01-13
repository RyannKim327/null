class HashTable {
  constructor() {
    this.table = {};
  }

  // Hash function to generate an index
  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % 100; // Choose a prime number for the table size
  }

  // Insert a key-value pair into the hash table
  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = {};
    }
    this.table[index][key] = value;
  }

  // Retrieve a value from the hash table using a key
  get(key) {
    const index = this.hash(key);
    if (this.table[index] && this.table[index][key]) {
      return this.table[index][key];
    }
    return null;
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    if (this.table[index] && this.table[index][key]) {
      delete this.table[index][key];
    }
  }
}

// Usage:
const hashTable = new HashTable();
hashTable.insert("name", "John");
hashTable.insert("age", 25);
console.log(hashTable.get("name")); // Output: John
console.log(hashTable.get("age")); // Output: 25
hashTable.remove("age");
console.log(hashTable.get("age")); // Output: null
