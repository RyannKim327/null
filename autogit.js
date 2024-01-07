class HashTable {
  constructor(size = 100) {
    this.size = size;
    this.buckets = new Array(size);

    for (let i = 0; i < this.size; i++) {
      this.buckets[i] = [];
    }
  }

  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.size;
  }

  insert(key, value) {
    const index = this.hash(key);
    this.buckets[index].push({ key, value });
  }

  search(key) {
    const index = this.hash(key);
    for (let bucket of this.buckets[index]) {
      if (bucket.key === key) {
        return bucket.value;
      }
    }
    return null;
  }

  remove(key) {
    const index = this.hash(key);
    this.buckets[index] = this.buckets[index].filter((bucket) => bucket.key !== key);
  }
}
const hashTable = new HashTable();
hashTable.insert("name", "John");
hashTable.insert("age", 30);

console.log(hashTable.search("name"));  // Output: John
console.log(hashTable.search("age"));   // Output: 30

hashTable.remove("age");
console.log(hashTable.search("age"));   // Output: null
