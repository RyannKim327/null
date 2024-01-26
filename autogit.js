class HashTable {
  constructor() {
    this.table = {};
  }

  // Hash function to convert a key into a hash value
  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue;
  }

  // Insert a key-value pair into the hash table
  insert(key, value) {
    const hashKey = this.hash(key);
    if (!this.table.hasOwnProperty(hashKey)) {
      this.table[hashKey] = {};
    }
    this.table[hashKey][key] = value;
  }

  // Retrieve a value from the hash table given a key
  get(key) {
    const hashKey = this.hash(key);
    if (this.table.hasOwnProperty(hashKey) && this.table[hashKey].hasOwnProperty(key)) {
      return this.table[hashKey][key];
    }
    return undefined;
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const hashKey = this.hash(key);
    if (this.table.hasOwnProperty(hashKey) && this.table[hashKey].hasOwnProperty(key)) {
      delete this.table[hashKey][key];
      if (Object.keys(this.table[hashKey]).length === 0) {
        delete this.table[hashKey];
      }
    }
  }
}

// Example usage
const hashtable = new HashTable();
hashtable.insert("name", "John");
hashtable.insert("age", 25);
console.log(hashtable.get("name")); // Output: John
console.log(hashtable.get("age")); // Output: 25
hashtable.remove("age");
console.log(hashtable.get("age")); // Output: undefined
