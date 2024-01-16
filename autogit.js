function HashTable() {
  this.table = new Array(137); // Choose a size for the array (prime number encourages better distribution)
}
HashTable.prototype.hash = function(key) {
  let total = 0;
  for (let i = 0; i < key.length; ++i) {
    total += key.charCodeAt(i);
  }
  return total % this.table.length;
};
// Insert key-value pair into the hash table
HashTable.prototype.insert = function(key, value) {
  const index = this.hash(key);
  if (this.table[index] === undefined) {
    this.table[index] = [[key, value]]; // If the index is empty, store the key-value pair
  } else {
    // If the index is already occupied, handle collisions by chaining
    let chainedArray = this.table[index];
    for (let i = 0; i < chainedArray.length; i++) {
      if (chainedArray[i][0] === key) {
        chainedArray[i][1] = value; // Update the value if the key already exists
        return;
      }
    }
    chainedArray.push([key, value]); // Otherwise, add the key-value pair to the chain
  }
};

// Retrieve the value associated with the given key
HashTable.prototype.get = function(key) {
  const index = this.hash(key);
  if (this.table[index] === undefined) {
    return undefined; // Key does not exist
  } else {
    let chainedArray = this.table[index];
    for (let i = 0; i < chainedArray.length; i++) {
      if (chainedArray[i][0] === key) {
        return chainedArray[i][1]; // Return the found value
      }
    }
    return undefined; // Key does not exist in the chain
  }
};

// Remove the key-value pair associated with the given key
HashTable.prototype.remove = function(key) {
  const index = this.hash(key);
  if (this.table[index] !== undefined) {
    let chainedArray = this.table[index];
    for (let i = 0; i < chainedArray.length; i++) {
      if (chainedArray[i][0] === key) {
        chainedArray.splice(i, 1); // Remove the key-value pair from chain
        if (chainedArray.length === 0) {
          this.table[index] = undefined; // If chain becomes empty, clear the index
        }
        return;
      }
    }
  }
};
const hashTable = new HashTable();
hashTable.insert("apple", 1);
hashTable.insert("banana", 2);
hashTable.insert("cherry", 3);
console.log(hashTable.get("banana")); // Output: 2
hashTable.remove("banana");
console.log(hashTable.get("banana")); // Output: undefined
