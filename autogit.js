function hash(key, size) {
  let hash = 5381;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 33) ^ key.charCodeAt(i);
  }
  return hash % size;
}
class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  // ...
}
put(key, value) {
  const index = hash(key, this.size);
  if (!this.table[index]) {
    this.table[index] = [];
  }
  this.table[index].push({ key, value });
}
get(key) {
  const index = hash(key, this.size);
  if (this.table[index]) {
    const buckets = this.table[index];
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i].key === key) {
        return buckets[i].value;
      }
    }
  }
  return undefined;
}
remove(key) {
  const index = hash(key, this.size);
  if (this.table[index]) {
    const buckets = this.table[index];
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i].key === key) {
        buckets.splice(i, 1);
        break;
      }
    }
  }
}
const myHashTable = new HashTable(10);

myHashTable.put('name', 'John');
myHashTable.put('age', 25);

console.log(myHashTable.get('name')); // Output: John

myHashTable.remove('age');

console.log(myHashTable.get('age')); // Output: undefined
