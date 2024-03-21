class HashTable {
    constructor() {
        this.table = {};
    }

    // Function to generate a key for the hash table
    getKey(key) {
        return JSON.stringify(key);
    }

    // Function to insert a key-value pair into the hash table
    insert(key, value) {
        const hashKey = this.getKey(key);
        this.table[hashKey] = value;
    }

    // Function to get a value from the hash table given a key
    get(key) {
        const hashKey = this.getKey(key);
        return this.table[hashKey];
    }

    // Function to remove a key-value pair from the hash table
    remove(key) {
        const hashKey = this.getKey(key);
        delete this.table[hashKey];
    }

    // Function to check if a key exists in the hash table
    contains(key) {
        const hashKey = this.getKey(key);
        return this.table.hasOwnProperty(hashKey);
    }
}

// Example usage
const myHashTable = new HashTable();
myHashTable.insert('one', 1);
console.log(myHashTable.get('one')); // Output: 1

myHashTable.insert('two', 2);
console.log(myHashTable.contains('two')); // Output: true

myHashTable.remove('two');
console.log(myHashTable.contains('two')); // Output: false
