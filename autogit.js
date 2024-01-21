class HashTable {
  constructor(size = 10) {
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
    this.table[index].push([key, value]);
  }

  // Get the value associated with a key
  get(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        return this.table[index][i][1];
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
      if (this.table[index][i][0] === key) {
        this.table[index].splice(i, 1);
        if (this.table[index].length === 0) {
          this.table[index] = undefined;
        }
        return;
      }
    }
  }
}

// Example usage:
const hashTable = new HashTable();
hashTable.insert('name', 'John');
hashTable.insert('age', 30);

console.log(hashTable.get('name'));  // Output: John

hashTable.remove('age');

console.log(hashTable.get('age'));   // Output: undefined
