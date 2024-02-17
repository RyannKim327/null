// Hash Table class
class HashTable {
  constructor() {
    this.table = new Array(100); // Array to store key-value pairs
  }

  // Hash function to generate a hash value for the key
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 31) % this.table.length;
    }
    return hash;
  }

  // Insert a key-value pair into the hash table
  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  // Get the value associated with the key from the hash table
  get(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      this.table[index] = this.table[index].filter(item => item[0] !== key);
    }
  }
}

// Example usage
const myHashTable = new HashTable();
myHashTable.set("apple", 5);
myHashTable.set("banana", 8);

console.log(myHashTable.get("apple")); // Output: 5
console.log(myHashTable.get("banana")); // Output: 8

myHashTable.remove("apple");
console.log(myHashTable.get("apple")); // Output: undefined
