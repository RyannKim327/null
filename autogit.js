class HashTable {
  constructor() {
    this.table = {};
  }

  // Generate a hash code from the key
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  // Insert a key-value pair into the hash table
  insert(key, value) {
    const hash = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = {};
    }
    this.table[hash][key] = value;
  }

  // Get the value associated with a given key
  get(key) {
    const hash = this.hash(key);
    if (this.table[hash] && this.table[hash][key]) {
      return this.table[hash][key];
    }
    return undefined;
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const hash = this.hash(key);
    if (this.table[hash] && this.table[hash][key]) {
      delete this.table[hash][key];
    }
  }

  // Check if a key exists in the hash table
  contains(key) {
    const hash = this.hash(key);
    return !!this.table[hash] && !!this.table[hash][key];
  }
}

// Usage example
const hashTable = new HashTable();
hashTable.insert("apple", "red");
hashTable.insert("banana", "yellow");
console.log(hashTable.get("apple")); // Output: red
console.log(hashTable.contains("banana")); // Output: true
hashTable.remove("apple");
console.log(hashTable.get("apple")); // Output: undefined
