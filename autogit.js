class HashTable {
  constructor(size = 100) {
    this.size = size;
    this.buckets = Array(this.size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    for (const pair of this.buckets[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    this.buckets[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return undefined;

    for (const pair of this.buckets[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return undefined;
  }

  delete(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return undefined;

    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        return this.buckets[index].splice(i, 1)[0][1];
      }
    }

    return undefined;
  }
}
const table = new HashTable();
table.set("name", "John");
table.set("age", 25);

console.log(table.get("name")); // Outputs: "John"
console.log(table.get("age")); // Outputs: 25

console.log(table.delete("age")); // Outputs: 25
console.log(table.get("age")); // Outputs: undefined
