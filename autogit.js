class HashTable {
  constructor() {
    this.table = {};
  }
  
  // Function to generate hash key
  hashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }
  
  // Function to insert a key-value pair into the hash table
  insert(key, value) {
    const hashKey = this.hashCode(key);
    this.table[hashKey] = value;
  }
  
  // Function to retrieve a value based on the provided key
  get(key) {
    const hashKey = this.hashCode(key);
    return this.table[hashKey];
  }
  
  // Function to remove a key-value pair from the hash table
  remove(key) {
    const hashKey = this.hashCode(key);
    delete this.table[hashKey];
  }
  
  // Function to check if a key exists in the hash table
  contains(key) {
    const hashKey = this.hashCode(key);
    return this.table.hasOwnProperty(hashKey);
  }
}
const hashTable = new HashTable();
hashTable.insert('apple', 5);
hashTable.insert('banana', 3);
hashTable.insert('orange', 2);

console.log(hashTable.get('apple')); // Output: 5
console.log(hashTable.get('banana')); // Output: 3

hashTable.remove('apple');
console.log(hashTable.contains('apple')); // Output: false
