class HashTable {
  constructor() {
    this.table = {};
  }

  // Hash function to convert key into a hash value
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  // Insert key-value pair into the hash table
  insert(key, value) {
    const hashValue = this.hash(key);
    this.table[hashValue] = value;
  }

  // Retrieve value based on key from the hash table
  get(key) {
    const hashValue = this.hash(key);
    return this.table[hashValue];
  }

  // Remove key-value pair from the hash table
  remove(key) {
    const hashValue = this.hash(key);
    delete this.table[hashValue];
  }
}

// Usage example
const hashTable = new HashTable();

hashTable.insert("name", "John");
hashTable.insert("age", 30);

console.log(hashTable.get("name"));  // Output: John
console.log(hashTable.get("age"));   // Output: 30

hashTable.remove("name");

console.log(hashTable.get("name"));  // Output: undefined
