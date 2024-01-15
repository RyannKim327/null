class HashTable {
  constructor() {
    this.table = {};
  }

  // Hash function to convert keys into unique hash codes
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  // Insert a key-value pair into the hash table
  insert(key, value) {
    const hashCode = this.hash(key);
    this.table[hashCode] = value;
  }

  // Retrieve the value associated with a given key
  get(key) {
    const hashCode = this.hash(key);
    return this.table[hashCode];
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const hashCode = this.hash(key);
    if (this.table.hasOwnProperty(hashCode)) {
      delete this.table[hashCode];
    }
  }
}

// Usage:
const myHashTable = new HashTable();
myHashTable.insert("name", "John");
myHashTable.insert("age", 25);
console.log(myHashTable.get("name")); // Output: John
console.log(myHashTable.get("age")); // Output: 25
myHashTable.remove("age");
console.log(myHashTable.get("age")); // Output: undefined
