class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = Array(size);
  }
}
HashTable.prototype.hash = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.size;
};
HashTable.prototype.put = function (key, value) {
  const index = this.hash(key);
  if (!this.buckets[index]) {
    this.buckets[index] = [];
  }
  this.buckets[index].push({ key, value });
};
HashTable.prototype.get = function (key) {
  const index = this.hash(key);
  if (!this.buckets[index]) {
    return null;
  }
  for (let i = 0; i < this.buckets[index].length; i++) {
    if (this.buckets[index][i].key === key) {
      return this.buckets[index][i].value;
    }
  }
  return null;
};
const hashTable = new HashTable(10);
hashTable.put("apple", 5);
hashTable.put("banana", 2);
console.log(hashTable.get("apple")); // Output: 5
console.log(hashTable.get("banana")); // Output: 2
console.log(hashTable.get("orange")); // Output: null
