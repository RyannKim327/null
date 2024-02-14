class HashTable {
  constructor() {
    this.table = {}; // object to store key-value pairs
  }

  // Generate a hash for the given key
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  // Add a key-value pair to the hash table
  put(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  // Retrieve a value based on the key
  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    if (this.table.hasOwnProperty(index)) {
      delete this.table[index];
    }
  }

  // Check if a key exists in the hash table
  contains(key) {
    const index = this.hash(key);
    return this.table.hasOwnProperty(index);
  }

  // Get all keys in the hash table
  getKeys() {
    return Object.keys(this.table);
  }
}

// Test the hash table implementation
const myHashTable = new HashTable();
myHashTable.put('a', 'apple');
myHashTable.put('b', 'banana');
myHashTable.put('c', 'cat');

console.log(myHashTable.get('a')); // Output: apple
console.log(myHashTable.contains('b')); // Output: true

myHashTable.remove('c');

console.log(myHashTable.getKeys()); // Output: ['a', 'b']
