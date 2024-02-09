class HashTable {
  constructor(size = 100) {
    this.size = size;
    this.buckets = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  insert(key, value) {
    const index = this._hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = {};
    }
    this.buckets[index][key] = value;
  }

  get(key) {
    const index = this._hash(key);
    if (!this.buckets[index]) {
      return undefined;
    }
    return this.buckets[index][key];
  }

  remove(key) {
    const index = this._hash(key);
    if (!this.buckets[index]) {
      return undefined;
    }
    const value = this.buckets[index][key];
    delete this.buckets[index][key];
    return value;
  }
}
const hashTable = new HashTable();

hashTable.insert("name", "John");
hashTable.insert("age", 25);

console.log(hashTable.get("name")); // Output: John
console.log(hashTable.get("age")); // Output: 25

hashTable.remove("age");

console.log(hashTable.get("age")); // Output: undefined
