class HashTable {
  constructor() {
    this.table = {};
  }

  // Function to generate a hash key
  hashKey(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  // Function to add a key-value pair to the hash table
  put(key, value) {
    const hash = this.hashKey(key);
    this.table[hash] = value;
  }

  // Function to get the value associated with a given key
  get(key) {
    const hash = this.hashKey(key);
    return this.table[hash];
  }

  // Function to remove a key-value pair from the hash table
  remove(key) {
    const hash = this.hashKey(key);
    delete this.table[hash];
  }
}

// Usage:
const hashTable = new HashTable();
hashTable.put("foo", 42);
console.log(hashTable.get("foo")); // Output: 42
hashTable.remove("foo");
console.log(hashTable.get("foo")); // Output: undefined
