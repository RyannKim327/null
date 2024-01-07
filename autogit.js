class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.buckets = new Array(size);
  }
}
HashTable.prototype.hash = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.size;
};
HashTable.prototype.set = function (key, value) {
  const index = this.hash(key);
  if (!this.buckets[index]) {
    this.buckets[index] = [];
  }
  this.buckets[index].push([key, value]);
};
HashTable.prototype.get = function (key) {
  const index = this.hash(key);
  if (!this.buckets[index]) {
    return undefined;
  }
  for (let i = 0; i < this.buckets[index].length; i++) {
    if (this.buckets[index][i][0] === key) {
      return this.buckets[index][i][1];
    }
  }
  return undefined;
};
HashTable.prototype.remove = function (key) {
  const index = this.hash(key);
  if (!this.buckets[index]) {
    return undefined;
  }
  for (let i = 0; i < this.buckets[index].length; i++) {
    if (this.buckets[index][i][0] === key) {
      const value = this.buckets[index][i][1];
      this.buckets[index].splice(i, 1);
      return value;
    }
  }
  return undefined;
};
const hashTable = new HashTable();

hashTable.set('key1', 'value1');
hashTable.set('key2', 'value2');

console.log(hashTable.get('key1')); // Output: value1
console.log(hashTable.get('key2')); // Output: value2

hashTable.remove('key1');
console.log(hashTable.get('key1')); // Output: undefined
