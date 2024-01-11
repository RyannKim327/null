class HashTable {
  constructor() {
    this.table = new Map();
  }

  // Generate a hash code for a given key
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  // Insert a key-value pair into the hash table
  insert(key, value) {
    const hashedKey = this.hash(key);
    this.table.set(hashedKey, value);
  }

  // Retrieve a value associated with a given key from the hash table
  get(key) {
    const hashedKey = this.hash(key);
    return this.table.get(hashedKey);
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const hashedKey = this.hash(key);
    this.table.delete(hashedKey);
  }

  // Check if the hash table contains a given key
  contains(key) {
    const hashedKey = this.hash(key);
    return this.table.has(hashedKey);
  }
}

// Usage example
const myHashTable = new HashTable();
myHashTable.insert('name', 'John');
myHashTable.insert('age', 30);

console.log(myHashTable.get('name'));  // Output: "John"
console.log(myHashTable.contains('age'));  // Output: true

myHashTable.remove('age');
console.log(myHashTable.contains('age'));  // Output: false
