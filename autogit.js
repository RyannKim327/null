class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    return key.toString().length % this.size;
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
    for (const entry of this.table[index]) {
      if (entry[0] === key) {
        return entry[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index].splice(i, 1);
        return;
      }
    }
  }
}

// Example usage
const ht = new HashTable();

ht.set('apple', 10);
ht.set('banana', 20);
console.log(ht.get('apple')); // Output: 10

ht.remove('apple');
console.log(ht.get('apple')); // Output: undefined
