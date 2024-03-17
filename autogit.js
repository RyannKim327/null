class HashTable {
  constructor(size = 100) {
    this.size = size;
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.data[index]) {
      this.data[index] = [];
    }

    this.data[index].push([key, value]);
  }
  
  get(key) {
    const index = this._hash(key);

    if (!this.data[index]) {
      return undefined;
    }

    for (let i = 0; i < this.data[index].length; i++) {
      if (this.data[index][i][0] === key) {
        return this.data[index][i][1];
      }
    }

    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keysArray.push(this.data[i][j][0]);
        }
      }
    }
    return keysArray;
  }
}
const myHashTable = new HashTable();
myHashTable.set('firstName', 'John');
myHashTable.set('lastName', 'Doe');

console.log(myHashTable.get('firstName')); // Output: John
console.log(myHashTable.get('age')); // Output: undefined

console.log(myHashTable.keys()); // Output: ['firstName', 'lastName']
