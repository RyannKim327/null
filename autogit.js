class HashTable {
  constructor() {
    this.table = {};
  }

  // Hash function to calculate the hash value
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 31; // Modulo by a prime number to reduce collisions
  }

  // Insert key-value pair into the hash table
  insert(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  // Get value based on key
  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  // Remove key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    delete this.table[index];
  }
}

// Example usage
const hashTable = new HashTable();
hashTable.insert('foo', 'bar');
hashTable.insert('hello', 'world');
console.log(hashTable.get('foo')); // Output: bar
console.log(hashTable.get('hello')); // Output: world
hashTable.remove('hello');
console.log(hashTable.get('hello')); // Output: undefined
