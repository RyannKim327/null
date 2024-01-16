class HashTable {
  constructor() {
    this.table = new Array(100);
  }

  // Compute the hash code for a given key
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  // Insert a key-value pair into the hash table
  insert(key, value) {
    const index = this.hash(key);
    if (this.table[index] === undefined) {
      this.table[index] = [];
    }
    this.table[index].push({ key, value });
  }

  // Get the value associated with a given key
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

  // Remove a key-value pair from the hash table
  remove(key) {
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
const myHashTable = new HashTable();
myHashTable.insert("name", "John");
myHashTable.insert("age", 30);
console.log(myHashTable.get("name")); // Output: John
console.log(myHashTable.get("age"));  // Output: 30
myHashTable.remove("age");
console.log(myHashTable.get("age"));  // Output: undefined
