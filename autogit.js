class HashTable {
  constructor(size = 100) {
    this.size = size;
    this.table = new Array(size);
  }

  // Hash function to determine index for a given key
  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += key.charCodeAt(i);
    }
    return hashCode % this.size;
  }

  // Insert a key-value pair into the hash table
  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  // Retrieve the value associated with a given key
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
      return undefined;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        const value = this.table[index][i][1];
        this.table[index].splice(i, 1);
        if (this.table[index].length === 0) {
          this.table[index] = undefined;
        }
        return value;
      }
    }
    return undefined;
  }
}
const hashTable = new HashTable();
hashTable.insert("name", "John");
hashTable.insert("age", 30);

console.log(hashTable.get("name")); // Output: John
console.log(hashTable.get("age")); // Output: 30

hashTable.remove("age");

console.log(hashTable.get("age")); // Output: undefined
