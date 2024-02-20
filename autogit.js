class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hashFunction(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hashFunction(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hashFunction(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (const pair of this.table[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hashFunction(key);
    if (!this.table[index]) {
      return;
    }
    const updatedTable = this.table[index].filter(pair => pair[0] !== key);
    this.table[index] = updatedTable;
  }
}

// Example usage
const myHashTable = new HashTable(10);
myHashTable.set("apple", 5);
myHashTable.set("orange", 10);
console.log(myHashTable.get("apple")); // Output: 5
myHashTable.remove("apple");
console.log(myHashTable.get("apple")); // Output: undefined
