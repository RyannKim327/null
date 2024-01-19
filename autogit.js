class HashTable {
  constructor() {
    this.table = new Array(100); // Size of the hash table array
  }

  hashFunction(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  insert(key, value) {
    const index = this.hashFunction(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push({ key, value });
  }

  get(key) {
    const index = this.hashFunction(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key === key) {
        return this.table[index][i].value;
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hashFunction(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key === key) {
        const removedValue = this.table[index][i].value;
        this.table[index].splice(i, 1);
        if (this.table[index].length === 0) {
          this.table[index] = undefined;
        }
        return removedValue;
      }
    }
    return undefined;
  }
}
const hashTable = new HashTable();
hashTable.insert("name", "John");
hashTable.insert("age", 30);

console.log(hashTable.get("name")); // Output: John
console.log(hashTable.get("age")); // Output: 30

hashTable.remove("age");
console.log(hashTable.get("age")); // Output: undefined
