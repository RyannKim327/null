class HashTable {
  constructor() {
    this.size = 100; // Size of the hash table, you can adjust this
    this.buckets = Array(this.size);
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
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push({ key, value });
  }

  // Get the value associated with a key
  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      return null;
    }
    for (const entry of this.buckets[index]) {
      if (entry.key === key) {
        return entry.value;
      }
    }
    return null;
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      return;
    }
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i].key === key) {
        this.buckets[index].splice(i, 1);
        return;
      }
    }
  }
}
const hashTable = new HashTable();
hashTable.insert("name", "John");
hashTable.insert("age", 30);

console.log(hashTable.get("name")); // Output: John
console.log(hashTable.get("age")); // Output: 30

hashTable.remove("age");
console.log(hashTable.get("age")); // Output: null
