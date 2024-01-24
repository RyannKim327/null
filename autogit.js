class HashTable {
  constructor() {
    this.table = {};
  }

  // Hash function to convert keys into numerical indices
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  // Insert a new key-value pair
  insert(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  // Get the value associated with a given key
  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    delete this.table[index];
  }
}

// Usage
const hashTable = new HashTable();
hashTable.insert('apple', 10);
hashTable.insert('banana', 20);
hashTable.insert('orange', 30);
console.log(hashTable.get('apple')); // Output: 10
hashTable.remove('banana');
console.log(hashTable.get('banana')); // Output: undefined
