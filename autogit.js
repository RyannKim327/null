class HashTable {
  constructor() {
    this.data = {};
  }

  // Hash function to generate the index
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  // Add a key-value pair to the hash table
  add(key, value) {
    const index = this.hash(key);
    if (!this.data[index]) {
      this.data[index] = {};
    }
    this.data[index][key] = value;
  }

  // Get the value associated with the key
  get(key) {
    const index = this.hash(key);
    if (this.data[index] && this.data[index].hasOwnProperty(key)) {
      return this.data[index][key];
    }
    return undefined;
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    if (this.data[index] && this.data[index].hasOwnProperty(key)) {
      delete this.data[index][key];
    }
  }

  // Get all keys in the hash table
  keys() {
    const keys = [];
    for (let index in this.data) {
      for (let key in this.data[index]) {
        keys.push(key);
      }
    }
    return keys;
  }

  // Get all values in the hash table
  values() {
    const values = [];
    for (let index in this.data) {
      for (let key in this.data[index]) {
        values.push(this.data[index][key]);
      }
    }
    return values;
  }
}

// Example usage:
const hashTable = new HashTable();
hashTable.add("name", "John");
hashTable.add("age", 30);
hashTable.add("city", "New York");

console.log(hashTable.get("name")); // Output: John
console.log(hashTable.get("age")); // Output: 30
console.log(hashTable.get("city")); // Output: New York

hashTable.remove("age");
console.log(hashTable.get("age")); // Output: undefined

console.log(hashTable.keys()); // Output: ["name", "city"]
console.log(hashTable.values()); // Output: ["John", "New York"]
