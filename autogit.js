class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  // Hash function to convert a key into an index
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
      this.table[index] = [];
    }
    this.table[index].push({ key, value });
  }

  // Retrieve a value from the hash table given a key
  get(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let entry of this.table[index]) {
        if (entry.key === key) {
          return entry.value;
        }
      }
    }
    return undefined;
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      this.table[index] = this.table[index].filter(entry => entry.key !== key);
    }
  }
}
const hashTable = new HashTable(10);
hashTable.insert("apple", 5);
hashTable.insert("banana", 3);
hashTable.insert("orange", 2);

console.log(hashTable.get("apple"));    // Output: 5
console.log(hashTable.get("banana"));   // Output: 3
console.log(hashTable.get("orange"));   // Output: 2
console.log(hashTable.get("nonexistent"));  // Output: undefined

hashTable.remove("banana");
console.log(hashTable.get("banana"));   // Output: undefined
