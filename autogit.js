class HashTable {
  constructor() {
    this.data = {};
    this.size = 0;
  }
}
HashTable.prototype.set = function(key, value) {
  const hash = this.hash(key); // Get the hash value for the key
  if (!this.data[hash]) {
    // Create a new bucket if it doesn't already exist
    this.data[hash] = [];
  }
  // Check if the key already exists in the bucket
  const bucket = this.data[hash];
  const existingItem = bucket.find(item => item.key === key);
  if (existingItem) {
    existingItem.value = value; // Update the value if key exists
  } else {
    bucket.push({ key, value }); // Add a new key-value pair
    this.size++;
  }
};
HashTable.prototype.get = function(key) {
  const hash = this.hash(key); // Get the hash value for the key
  const bucket = this.data[hash];
  if (!bucket) return undefined; // Key does not exist
  const item = bucket.find(item => item.key === key);
  return item ? item.value : undefined; // Return the corresponding value or undefined
};
HashTable.prototype.delete = function(key) {
  const hash = this.hash(key); // Get the hash value for the key
  const bucket = this.data[hash];
  if (!bucket) return; // Key does not exist
  const index = bucket.findIndex(item => item.key === key);
  if (index !== -1) {
    bucket.splice(index, 1); // Remove the key-value pair
    this.size--;
  }
};
HashTable.prototype.has = function(key) {
  const hash = this.hash(key); // Get the hash value for the key
  const bucket = this.data[hash];
  if (!bucket) return false; // Key does not exist
  return bucket.some(item => item.key === key);
};
const myHashTable = new HashTable();
myHashTable.set("name", "John");
myHashTable.set("age", 25);
console.log(myHashTable.get("name")); // Output: John
console.log(myHashTable.get("age")); // Output: 25
console.log(myHashTable.size); // Output: 2
console.log(myHashTable.has("name")); // Output: true
myHashTable.delete("name");
console.log(myHashTable.has("name")); // Output: false
