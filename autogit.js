class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
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
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return;
    }
    this.table[index] = this.table[index].filter(pair => pair[0] !== key);
  }
}

// Example usage:
const ht = new HashTable(5);
ht.set("apple", 5);
ht.set("banana", 10);
ht.set("orange", 15);

console.log(ht.get("apple")); // Output: 5
console.log(ht.get("banana")); // Output: 10
ht.remove("banana");
console.log(ht.get("banana")); // Output: undefined
