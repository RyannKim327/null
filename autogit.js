class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
}
HashTable.prototype.hash = function(key) {
  let hash = 0;

  // Custom hash function example:
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }

  // Modulo operation to fit within table size
  return hash % this.size;
};
HashTable.prototype.insert = function(key, value) {
  const index = this.hash(key);

  if (!this.table[index]) {
    this.table[index] = [];
  }

  this.table[index].push({ key, value });
};
HashTable.prototype.get = function(key) {
  const index = this.hash(key);

  if (!this.table[index]) {
    return undefined;
  }

  // Linear search within the appropriate index
  for (let i = 0; i < this.table[index].length; i++) {
    if (this.table[index][i].key === key) {
      return this.table[index][i].value;
    }
  }

  return undefined;
};
const myTable = new HashTable(10);
myTable.insert('name', 'John');
myTable.insert('age', 25);

console.log(myTable.get('name'));  // Output: 'John'
console.log(myTable.get('age'));   // Output: 25
console.log(myTable.get('city'));  // Output: undefined
