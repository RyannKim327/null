class HashTable {
  constructor(size) {
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
    const bucket = this.data[index];
    if (!bucket) {
      return undefined;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);
    const bucket = this.data[index];
    if (!bucket) {
      return undefined;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        const value = bucket[i][1];
        bucket.splice(i, 1);
        return value;
      }
    }
    return undefined;
  }
}
const hashTable = new HashTable(10);
hashTable.set("name", "John");
hashTable.set("age", 25);
console.log(hashTable.get("name")); // Output: "John"
console.log(hashTable.get("age")); // Output: 25
console.log(hashTable.get("city")); // Output: undefined
hashTable.remove("name");
console.log(hashTable.get("name")); // Output: undefined
