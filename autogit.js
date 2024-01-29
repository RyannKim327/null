class HashTable {
  constructor() {
    this.table = new Array(100); // Size of the hash table (can be adjusted)
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push({ key, value });
  }

  retrieve(key) {
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

  delete(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i].key === key) {
          this.table[index].splice(i, 1);
          break;
        }
      }
    }
  }
}

// Example usage:
const hashTable = new HashTable();
hashTable.insert("name", "John");
hashTable.insert("age", 25);

console.log(hashTable.retrieve("name")); // Output: John
console.log(hashTable.retrieve("age")); // Output: 25

hashTable.delete("age");
console.log(hashTable.retrieve("age")); // Output: undefined
