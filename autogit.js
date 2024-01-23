class HashTable {
  constructor() {
    this.table = {};
  }
}
HashTable.prototype.hash = function(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % 37; // Modulo operator used to limit the hash within the table size
};
// Insert a key-value pair into the hash table
HashTable.prototype.insert = function(key, value) {
  const index = this.hash(key);
  if (!this.table[index]) {
    this.table[index] = [[key, value]]; // Handle collisions with separate chaining
  } else {
    const collisionList = this.table[index];
    for (let i = 0; i < collisionList.length; i++) {
      if (collisionList[i][0] === key) {
        collisionList[i][1] = value; // Update value if key already exists
        return;
      }
    }
    collisionList.push([key, value]); // Add a new key-value pair if there is a collision
  }
};

// Remove a key-value pair from the hash table
HashTable.prototype.remove = function(key) {
  const index = this.hash(key);
  if (!this.table[index]) {
    return;
  }
  const collisionList = this.table[index];
  for (let i = 0; i < collisionList.length; i++) {
    if (collisionList[i][0] === key) {
      collisionList.splice(i, 1); // Remove the key-value pair from the collision list
      if (collisionList.length === 0) {
        delete this.table[index]; // Remove the index if no more collision exists
      }
      return;
    }
  }
};

// Retrieve the value associated with a key
HashTable.prototype.get = function(key) {
  const index = this.hash(key);
  if (!this.table[index]) {
    return undefined; // Return undefined if the key is not found
  }
  const collisionList = this.table[index];
  for (let i = 0; i < collisionList.length; i++) {
    if (collisionList[i][0] === key) {
      return collisionList[i][1]; // Return the value if the key is found
    }
  }
};
const hashTable = new HashTable();
hashTable.insert("apple", "fruit");
hashTable.insert("banana", "fruit");
hashTable.insert("carrot", "vegetable");

console.log(hashTable.get("apple")); // Output: "fruit"
console.log(hashTable.get("banana")); // Output: "fruit"
console.log(hashTable.get("carrot")); // Output: "vegetable"

hashTable.remove("banana");
console.log(hashTable.get("banana")); // Output: undefined
