class HashTable {
  constructor() {
    this.table = {}; // Object to store key-value pairs
  }

  // Hash function to generate an index
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37; // Using a prime number for better distribution
  }

  // Insert or update a key-value pair
  set(key, value) {
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
    if (this.table[index]) {
      delete this.table[index];
      return true;
    }
    return false;
  }

  // Check if a key exists in the hash table
  has(key) {
    const index = this.hash(key);
    return this.table.hasOwnProperty(index);
  }

  // Get all the keys in the hash table
  keys() {
    return Object.keys(this.table);
  }

  // Get all the values in the hash table
  values() {
    return Object.values(this.table);
  }
}

// Example usage:
const myHashTable = new HashTable();
myHashTable.set('name', 'John');
myHashTable.set('age', 25);

console.log(myHashTable.has('name')); // true
console.log(myHashTable.get('age')); // 25

myHashTable.remove('age');
console.log(myHashTable.keys()); // ['name']
console.log(myHashTable.values()); // ['John']
