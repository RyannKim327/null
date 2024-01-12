class HashTable {
  constructor() {
    this.table = {};
  }

  // Other methods will be added below
}
hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash;
}
insert(key, value) {
  const index = this.hash(key);
  if (!this.table[index]) {
    this.table[index] = {};
  }
  this.table[index][key] = value;
}
remove(key) {
  const index = this.hash(key);
  if (this.table[index] && this.table[index][key]) {
    delete this.table[index][key];
  }
}
get(key) {
  const index = this.hash(key);
  if (this.table[index] && this.table[index][key]) {
    return this.table[index][key];
  }
  return undefined;
}
const myTable = new HashTable();
myTable.insert("apple", 10);
myTable.insert("banana", 5);
myTable.insert("orange", 15);

console.log(myTable.get("apple")); // Output: 10
console.log(myTable.get("banana")); // Output: 5

myTable.remove("banana");
console.log(myTable.get("banana")); // Output: undefined
