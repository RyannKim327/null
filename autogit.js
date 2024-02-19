class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * (i + 1)) % this.size;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = {};
    }
    this.table[index][key] = value;
  }

  get(key) {
    const index = this._hash(key);
    if (this.table[index] && this.table[index][key]) {
      return this.table[index][key];
    } else {
      return undefined;
    }
  }

  delete(key) {
    const index = this._hash(key);
    if (this.table[index] && this.table[index][key]) {
      delete this.table[index][key];
    }
  }
}

// Example usage
const hashTable = new HashTable(10);
hashTable.set("key1", "value1");
hashTable.set("key2", "value2");
console.log(hashTable.get("key1")); // Output: value1
hashTable.delete("key2");
console.log(hashTable.get("key2")); // Output: undefined
