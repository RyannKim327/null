class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.buckets[index].push({ key, value });
  }

  get(key) {
    const index = this.hash(key);
    for (const item of this.buckets[index]) {
      if (item.key === key) {
        return item.value;
      }
    }
    return null;
  }

  remove(key) {
    const index = this.hash(key);
    this.buckets[index] = this.buckets[index].filter(item => item.key !== key);
  }
}

// Example usage
const hashTable = new HashTable();
hashTable.set("apple", 1);
hashTable.set("banana", 2);
console.log(hashTable.get("apple")); // Output: 1
console.log(hashTable.get("banana")); // Output: 2
hashTable.remove("apple");
console.log(hashTable.get("apple")); // Output: null
