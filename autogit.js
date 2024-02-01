class HashTable {
  constructor() {
    this.size = 100; // Size of the hash table array
    this.table = new Array(this.size);
  }

  // Hash function to generate an index from a key
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  // Insert a key-value pair into the hash table
  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [[key, value]];
    } else {
      for (let pair of this.table[index]) {
        if (pair[0] === key) {
          pair[1] = value; // Update the existing value if the key exists
          return;
        }
      }
      this.table[index].push([key, value]);
    }
  }

  // Get the value associated with a key
  get(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let pair of this.table[index]) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
    return undefined; // Key not found
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      this.table[index] = this.table[index].filter(pair => pair[0] !== key);
    }
  }
}

// Usage Example
const hashTable = new HashTable();
hashTable.insert('name', 'John');
hashTable.insert('age', 30);
console.log(hashTable.get('name')); // Output: John
console.log(hashTable.get('age'));  // Output: 30
hashTable.remove('age');
console.log(hashTable.get('age'));  // Output: undefined
