class HashTable {
  constructor() {
    this.table = {};
  }

  // hash function and other methods here
}
getHashCode(key) {
  let hashCode = 0;
  for (let i = 0; i < key.length; i++) {
    hashCode += key.charCodeAt(i);
  }
  return hashCode;
}
insert(key, value) {
  const index = this.getHashCode(key);
  this.table[index] = value;
}

get(key) {
  const index = this.getHashCode(key);
  return this.table[index];
}

remove(key) {
  const index = this.getHashCode(key);
  if (this.table.hasOwnProperty(index)) {
    delete this.table[index];
  }
}
hasKey(key) {
  const index = this.getHashCode(key);
  return this.table.hasOwnProperty(index);
}

getKeys() {
  return Object.keys(this.table);
}

clear() {
  this.table = {};
}
