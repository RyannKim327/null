class HashTable {
    constructor() {
        this.table = {};
    }

    // This function hashes the key and returns the hash value
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash;
    }

    // This function adds a key-value pair to the hash table
    put(key, value) {
        const hashCode = this.hash(key);
        this.table[hashCode] = value;
    }

    // This function retrieves a value from the hash table given a key
    get(key) {
        const hashCode = this.hash(key);
        return this.table[hashCode];
    }

    // This function removes a key-value pair from the hash table
    remove(key) {
        const hashCode = this.hash(key);
        delete this.table[hashCode];
    }
}

// Example usage:
const myHashTable = new HashTable();
myHashTable.put("key1", "value1");
myHashTable.put("key2", "value2");

console.log(myHashTable.get("key1")); // Output: "value1"
myHashTable.remove("key1");
console.log(myHashTable.get("key1")); // Output: undefined
