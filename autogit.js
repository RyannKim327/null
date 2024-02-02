class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }
}
HashTable.prototype.hash = function(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.size;
};
HashTable.prototype.insert = function(key, value) {
  const index = this.hash(key);
  if (!this.buckets[index]) {
    this.buckets[index] = [];
  }
  this.buckets[index].push({ key, value });
};
HashTable.prototype.get = function(key) {
  const index = this.hash(key);
  if (this.buckets[index]) {
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i].key === key) {
        return this.buckets[index][i].value;
      }
    }
  }
  return undefined;
};
const hashTable = new HashTable(10);

hashTable.insert("apple", 10);
hashTable.insert("banana", 20);
hashTable.insert("orange", 30);

console.log(hashTable.get("apple"));    // output: 10
console.log(hashTable.get("banana"));   // output: 20
console.log(hashTable.get("orange"));   // output: 30
console.log(hashTable.get("grape"));    // output: undefined
