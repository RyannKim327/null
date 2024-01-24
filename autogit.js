class HashTable {
  constructor() {
    this.data = {};
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * (i + 1)) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this.hash(key);
    this.data[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.data[index];
  }

  remove(key) {
    const index = this.hash(key);
    if (this.data[index]) {
      delete this.data[index];
    }
  }
}

// Example usage
const hashTable = new HashTable();
hashTable.set('name', 'John');
console.log(hashTable.get('name')); // Output: John
hashTable.remove('name');
console.log(hashTable.get('name')); // Output: undefined
