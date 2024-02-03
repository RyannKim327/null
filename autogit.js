class HashTable {
  constructor() {
    this.hashMap = {};
  }

  // Function to calculate the hash key
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  // Function to add a key-value pair to the hash table
  insert(key, value) {
    const hashKey = this.hash(key);
    if (!this.hashMap[hashKey]) {
      this.hashMap[hashKey] = {};
    }
    this.hashMap[hashKey][key] = value;
  }

  // Function to get the value associated with a key
  get(key) {
    const hashKey = this.hash(key);
    if (this.hashMap[hashKey] && this.hashMap[hashKey][key]) {
      return this.hashMap[hashKey][key];
    }
    return null;
  }

  // Function to remove a key-value pair from the hash table
  remove(key) {
    const hashKey = this.hash(key);
    if (this.hashMap[hashKey] && this.hashMap[hashKey][key]) {
      delete this.hashMap[hashKey][key];
    }
  }
}

// Example usage:

const hashtable = new HashTable();

hashtable.insert("name", "John");
hashtable.insert("age", 25);

console.log(hashtable.get("name")); // Output: John
console.log(hashtable.get("age")); // Output: 25

hashtable.remove("age");
console.log(hashtable.get("age")); // Output: null
