class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  // other methods go here
}
hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.size;
}
put(key, value) {
  const index = this.hash(key);
  if (!this.table[index]) {
    this.table[index] = [];
  }
  this.table[index].push([key, value]);
}

get(key) {
  const index = this.hash(key);
  if (!this.table[index]) {
    return undefined;
  }
  for (let i = 0; i < this.table[index].length; i++) {
    if (this.table[index][i][0] === key) {
      return this.table[index][i][1];
    }
  }
  return undefined;
}
remove(key) {
  const index = this.hash(key);
  if (!this.table[index]) {
    return;
  }
  for (let i = 0; i < this.table[index].length; i++) {
    if (this.table[index][i][0] === key) {
      this.table[index].splice(i, 1);
      return;
    }
  }
}
const myHashTable = new HashTable(10);
myHashTable.put("name", "John");
myHashTable.put("age", 25);
console.log(myHashTable.get("name")); // Output: "John"
console.log(myHashTable.get("age")); // Output: 25
myHashTable.remove("age");
console.log(myHashTable.get("age")); // Output: undefined
