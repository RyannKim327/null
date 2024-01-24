class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  // Hash function to convert a key into an index
  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.size;
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
      return undefined;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        return this.table[index].splice(i, 1)[0][1];
      }
    }
    return undefined;
  }
}

// Usage
const hashTable = new HashTable(10);
hashTable.insert("firstName", "John");
hashTable.insert("lastName", "Doe");
console.log(hashTable.get("firstName")); // Output: John
console.log(hashTable.get("lastName")); // Output: Doe
console.log(hashTable.get("age")); // Output: undefined
hashTable.remove("lastName");
console.log(hashTable.get("lastName")); // Output: undefined
