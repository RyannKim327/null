class HashTable {
  constructor() {
    this.table = {};
  }

  // Other methods will be added here
}
HashTable.prototype.hash = function(key) {
  if (typeof key !== 'string') {
    throw new Error('Key must be a string');
  }
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % 37; // Modulo to keep the index within the size of the underlying data structure
};
HashTable.prototype.add = function(key, value) {
  const index = this.hash(key);
  if (!this.table[index]) {
    this.table[index] = {};
  }
  this.table[index][key] = value;
};

HashTable.prototype.get = function(key) {
  const index = this.hash(key);
  if (this.table[index] && this.table[index][key] !== undefined) {
    return this.table[index][key];
  }
  return null;
};

HashTable.prototype.remove = function(key) {
  const index = this.hash(key);
  if (this.table[index] && this.table[index][key] !== undefined) {
    delete this.table[index][key];
    // Optionally, you can also delete the empty index
    if (Object.keys(this.table[index]).length === 0) {
      delete this.table[index];
    }
    return true;
  }
  return false;
};
const hashTable = new HashTable();
hashTable.add('apple', 'A fruit');
hashTable.add('banana', 'A yellow fruit');
console.log(hashTable.get('apple')); // Output: A fruit
console.log(hashTable.get('banana')); // Output: A yellow fruit
console.log(hashTable.get('orange')); // Output: null
hashTable.remove('banana');
console.log(hashTable.get('banana')); // Output: null
