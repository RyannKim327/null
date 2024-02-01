class HashTable {
  constructor() {
    this.table = {};
  }
}
HashTable.prototype.hash = function(key) {
  return key.hashCode(); // Built-in hashCode function for strings
};
HashTable.prototype.add = function(key, value) {
  const index = this.hash(key);
  this.table[index] = value;
};

HashTable.prototype.get = function(key) {
  const index = this.hash(key);
  return this.table[index];
};
const hashTable = new HashTable();
hashTable.add("name", "John");
hashTable.add("age", 30);

console.log(hashTable.get("name")); // Output: John
console.log(hashTable.get("age")); // Output: 30
