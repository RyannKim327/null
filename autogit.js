class HashTable {
    constructor() {
        this.table = {};
    }

    // Function to insert a key-value pair into the hash table
    insert(key, value) {
        this.table[key] = value;
    }

    // Function to get the value associated with a key
    get(key) {
        return this.table[key];
    }

    // Function to check if a key exists in the hash table
    contains(key) {
        return this.table.hasOwnProperty(key);
    }

    // Function to remove a key-value pair from the hash table
    remove(key) {
        if (this.contains(key)) {
            delete this.table[key];
        }
    }

    // Function to get all keys in the hash table
    getKeys() {
        return Object.keys(this.table);
    }

    // Function to get all values in the hash table
    getValues() {
        return Object.values(this.table);
    }

    // Function to get the size of the hash table
    size() {
        return Object.keys(this.table).length;
    }
}

// Example usage
const ht = new HashTable();
ht.insert('name', 'Alice');
ht.insert('age', 30);

console.log(ht.get('name'));  // Output: Alice
console.log(ht.size());  // Output: 2

ht.remove('age');
console.log(ht.contains('age'));  // Output: false
