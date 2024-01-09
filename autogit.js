class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  // Hash function to convert a key into an index position
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
    if (!this.table[index]) {
      return undefined;
    }
    for (const pair of this.table[index]) {
      if (pair.key === key) {
        return pair.value;
      }
    }
    return undefined;
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key === key) {
        this.table[index].splice(i, 1);
        break;
      }
    }
  }
}

// Usage example:
const myHashTable = new HashTable(10);
myHashTable.insert('name', 'John');
myHashTable.insert('age', 30);
console.log(myHashTable.get('name')); // Output: John
console.log(myHashTable.get('age')); // Output: 30
myHashTable.remove('age');
console.log(myHashTable.get('age')); // Output: undefined
