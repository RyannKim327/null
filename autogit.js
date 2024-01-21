class HashTable {
  constructor() {
    this.table = {};
  }

  // Compute the hash code for a given key
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  // Insert a key-value pair into the hash table
  insert(key, value) {
    const hashKey = this.hash(key);
    this.table[hashKey] = value;
  }

  // Retrieve the value associated with a given key
  get(key) {
    const hashKey = this.hash(key);
    return this.table[hashKey];
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const hashKey = this.hash(key);
    delete this.table[hashKey];
  }
}

// Example usage:
const myHashTable = new HashTable();
myHashTable.insert("apple", 10);
myHashTable.insert("banana", 20);

console.log(myHashTable.get("apple")); // Output: 10
console.log(myHashTable.get("banana")); // Output: 20

myHashTable.remove("apple");
console.log(myHashTable.get("apple")); // Output: undefined
