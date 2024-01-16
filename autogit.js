class HashTable {
  constructor() {
    this.table = new Array(137); // Size of the hash table, a prime number is recommended
  }

  // Step 2: Define a hash function to map keys to indexes in the array
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; ++i) {
      total += key.charCodeAt(i);
    }
    return total % this.table.length;
  }

  // Step 3: Implement the put method to insert key-value pairs into the hash table
  put(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  // Step 4: Implement the get method to retrieve values based on keys
  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  // Step 5: Implement the remove method to delete key-value pairs from the hash table
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }
}
const table = new HashTable();
table.put("key1", "value1");
table.put("key2", "value2");
console.log(table.get("key1")); // Output: "value1"
console.log(table.get("key2")); // Output: "value2"
table.remove("key1");
console.log(table.get("key1")); // Output: undefined
