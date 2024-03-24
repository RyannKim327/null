class HashTable {
  constructor() {
    this.table = {};
  }

  // Hash function to calculate index for key
  hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % 37; // Assuming table size of 37 for simplicity
  }

  // Insert key-value pair into hash table
  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = {};
    }
    this.table[index][key] = value;
  }

  // Retrieve value from hash table given key
  get(key) {
    const index = this.hash(key);
    return this.table[index] ? this.table[index][key] : undefined;
  }

  // Remove key-value pair from hash table
  remove(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      delete this.table[index][key];
    }
  }
}

// Example usage
const myHashTable = new HashTable();
myHashTable.insert("name", "Alice");
myHashTable.insert("age", 30);

console.log(myHashTable.get("name")); // Output: Alice
console.log(myHashTable.get("age")); // Output: 30

myHashTable.remove("age");
console.log(myHashTable.get("age")); // Output: undefined
