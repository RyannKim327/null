class HashTable {
    constructor() {
        this.table = {};
    }
    
    // Function to generate a hash key
    hashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 31) % 1013; // prime number to reduce collisions
        }
        return hash;
    }
    
    // Function to insert a key-value pair into the hash table
    put(key, value) {
        const hashedKey = this.hashCode(key);
        this.table[hashedKey] = value;
    }
    
    // Function to get the value associated with a key in the hash table
    get(key) {
        const hashedKey = this.hashCode(key);
        return this.table[hashedKey];
    }
    
    // Function to check if a key exists in the hash table
    contains(key) {
        const hashedKey = this.hashCode(key);
        return this.table.hasOwnProperty(hashedKey);
    }
    
    // Function to remove a key-value pair from the hash table
    remove(key) {
        const hashedKey = this.hashCode(key);
        delete this.table[hashedKey];
    }
}
const myHashTable = new HashTable();

myHashTable.put('name', 'Alice');
myHashTable.put('age', 30);

console.log(myHashTable.get('name')); // Output: Alice

console.log(myHashTable.contains('age')); // Output: true

myHashTable.remove('age');

console.log(myHashTable.contains('age')); // Output: false
