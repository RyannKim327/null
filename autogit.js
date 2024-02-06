class HashTable {
  constructor() {
    this.table = [];
    this.size = 0;
  }
}
HashTable.prototype.hash = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.table.length;
};
HashTable.prototype.insert = function (key, value) {
  const index = this.hash(key);
  if (!this.table[index]) {
    this.table[index] = [];
  }
  this.table[index].push([key, value]);
  this.size++;
};

HashTable.prototype.get = function (key) {
  const index = this.hash(key);
  if (this.table[index]) {
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        return this.table[index][i][1];
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function (key) {
  const index = this.hash(key);
  if (this.table[index]) {
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index].splice(i, 1);
        this.size--;
        break;
      }
    }
  }
};
const hashTable = new HashTable();
hashTable.insert("name", "John");
hashTable.insert("age", 25);
hashTable.insert("city", "New York");

console.log(hashTable.get("name")); // Output: John
console.log(hashTable.get("age")); // Output: 25
console.log(hashTable.get("city")); // Output: New York

hashTable.remove("age");
console.log(hashTable.get("age")); // Output: undefined
console.log(hashTable.size); // Output: 2
