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

  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return null;
    for (const pair of this.buckets[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return null;
  }

  remove(key) {
    const index = this.hash(key);
    if (this.buckets[index]) {
      this.buckets[index] = this.buckets[index].filter(pair => pair[0] !== key);
    }
  }
}

// Example usage:
const table = new HashTable();
table.set("apple", 5);
table.set("banana", 10);
console.log(table.get("apple")); // Output: 5
table.remove("banana");
console.log(table.get("banana")); // Output: null
