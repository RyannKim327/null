class HashTable {
  constructor() {
     this.table = {};
  }

  // Convert the key into a numeric hash code
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
    this.table[hash] = value;
  }

  // Retrieve a value based on the key
  get(key) {
    const hash = this.hash(key);
    return this.table[hash];
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const hash = this.hash(key);
    if (this.table.hasOwnProperty(hash)) {
      delete this.table[hash];
    }
  }
}

// Example usage
const myHashTable = new HashTable();
myHashTable.insert('name', 'John');
myHashTable.insert('age', 25);

console.log(myHashTable.get('name')); // Output: John
console.log(myHashTable.get('age'));  // Output: 25

myHashTable.remove('name');
console.log(myHashTable.get('name')); // Output: undefined
