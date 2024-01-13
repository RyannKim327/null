// Define the HashTable class
function HashTable(size) {
  this.size = size;
  this.table = new Array(size); // Create an array of the specified size
}

// Hash function to convert keys into array indices
HashTable.prototype.hash = function(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.size;
};

// Function to insert a key-value pair into the hash table
HashTable.prototype.insert = function(key, value) {
  const index = this.hash(key);
  if (!this.table[index]) {
    this.table[index] = []; // Create a new array if the index is empty
  }
  this.table[index].push([key, value]); // Push the [key, value] pair to the array
};

// Function to retrieve the value associated with a key from the hash table
HashTable.prototype.get = function(key) {
  const index = this.hash(key);
  if (this.table[index]) {
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        return this.table[index][i][1]; // Return the value if key is found
      }
    }
  }
  return undefined; // Return undefined if key is not found
};

// Function to remove a key-value pair from the hash table
HashTable.prototype.remove = function(key) {
  const index = this.hash(key);
  if (this.table[index]) {
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index].splice(i, 1); // Remove the [key, value] pair from the array
        return true; // Return true to indicate success
      }
    }
  }
  return false; // Return false to indicate failure
};
// Create a new hash table
const hashTable = new HashTable(10);

// Insert key-value pairs
hashTable.insert("apple", 5);
hashTable.insert("banana", 7);
hashTable.insert("orange", 2);

// Retrieve values
console.log(hashTable.get("apple"));   // Output: 5
console.log(hashTable.get("banana"));  // Output: 7
console.log(hashTable.get("orange"));  // Output: 2
console.log(hashTable.get("grape"));   // Output: undefined

// Remove a key-value pair
console.log(hashTable.remove("banana"));  // Output: true

// Check if the key-value pair is removed
console.log(hashTable.get("banana"));  // Output: undefined
