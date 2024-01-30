class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  // Hash function that converts a key into an index
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
    if (this.table[index] === undefined) {
      this.table[index] = [];
    }
    this.table[index].push({ key, value });
  }

  // Retrieve a value from the hash table given a key
  get(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i].key === key) {
          return this.table[index][i].value;
        }
      }
    }
    return undefined;
  }

  // Remove a value from the hash table given a key
  remove(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i].key === key) {
          this.table[index].splice(i, 1);
          return;
        }
      }
    }
  }
}
const hashTable = new HashTable(10);
hashTable.insert('key1', 'value1');
hashTable.insert('key2', 'value2');
console.log(hashTable.get('key1'));  // Output: value1
console.log(hashTable.get('key2'));  // Output: value2
hashTable.remove('key1');
console.log(hashTable.get('key1'));  // Output: undefined
