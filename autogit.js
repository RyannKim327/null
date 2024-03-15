class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * (i + 1)) % this.size;
    }
    return hash;
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
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        return this.table[index][i][1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return;
    }
    this.table[index] = this.table[index].filter(item => item[0] !== key);
  }
}

// Example usage
const ht = new HashTable(10);
ht.set("name", "John");
ht.set("age", 30);

console.log(ht.get("name")); // Output: John
console.log(ht.get("age")); // Output: 30

ht.remove("age");
console.log(ht.get("age")); // Output: undefined
