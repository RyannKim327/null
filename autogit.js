class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
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
    const index = this._hash(key);
    if (!this.table[index]) {
      return;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index].splice(i, 1);
        if (this.table[index].length === 0) {
          delete this.table[index];
        }
        return;
      }
    }
  }
}
const table = new HashTable();
table.set('apple', 5);
table.set('banana', 10);
table.set('orange', 7);

console.log(table.get('apple'));    // Output: 5
console.log(table.get('banana'));   // Output: 10
console.log(table.get('orange'));   // Output: 7
console.log(table.get('pear'));     // Output: undefined

table.remove('banana');
console.log(table.get('banana'));   // Output: undefined
