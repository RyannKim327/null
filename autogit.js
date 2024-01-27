class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  put(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push({ key, value });
  }

  get(key) {
    const index = this.hash(key);
    if (this.buckets[index]) {
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i].key === key) {
          return this.buckets[index][i].value;
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    if (this.buckets[index]) {
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i].key === key) {
          this.buckets[index].splice(i, 1);
          return;
        }
      }
    }
  }
}
const myHashTable = new HashTable(10); // Initialize hash table with size 10

myHashTable.put("name", "John"); // Insert data
myHashTable.put("age", 30);
myHashTable.put("city", "New York");

console.log(myHashTable.get("name")); // Output: John
console.log(myHashTable.get("age")); // Output: 30
console.log(myHashTable.get("city")); // Output: New York

myHashTable.remove("age"); // Remove data

console.log(myHashTable.get("age")); // Output: undefined
