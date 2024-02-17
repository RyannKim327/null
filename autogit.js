class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
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

    if (!this.table[index]) {
      this.table[index] = [];
    }

    this.table[index].push({ key, value });
  }

  get(key) {
    const index = this._hash(key);

    if (!this.table[index]) {
      return undefined;
    }

    for (let entry of this.table[index]) {
      if (entry.key === key) {
        return entry.value;
      }
    }

    return undefined;
  }

  remove(key) {
    const index = this._hash(key);

    if (!this.table[index]) {
      return undefined;
    }

    this.table[index] = this.table[index].filter(entry => entry.key !== key);
  }
}

// Example usage
const ht = new HashTable(10);

ht.set('apple', 'red');
ht.set('banana', 'yellow');
ht.set('grape', 'purple');

console.log(ht.get('apple')); // Output: red
console.log(ht.get('banana')); // Output: yellow

ht.remove('apple');
console.log(ht.get('apple')); // Output: undefined
