class HashTable {
    constructor() {
        this.table = {};
    }

    // Hash function to generate a hash key
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 100; // Modulo 100 to limit the size of the hash key
    }

    // Insert a key-value pair into the hash table
    insert(key, value) {
        const hashKey = this.hash(key);
        if (!this.table[hashKey]) {
            this.table[hashKey] = {};
        }
        this.table[hashKey][key] = value;
    }

    // Retrieve a value from the hash table given a key
    get(key) {
        const hashKey = this.hash(key);
        if (this.table[hashKey] && this.table[hashKey][key]) {
            return this.table[hashKey][key];
        } else {
            return undefined;
        }
    }

    // Delete a key-value pair from the hash table
    remove(key) {
        const hashKey = this.hash(key);
        if (this.table[hashKey] && this.table[hashKey][key]) {
            delete this.table[hashKey][key];
        }
    }
}

// Example usage
const ht = new HashTable();
ht.insert("name", "Alice");
ht.insert("age", 30);

console.log(ht.get("name")); // Output: Alice
console.log(ht.get("age")); // Output: 30

ht.remove("age");
console.log(ht.get("age")); // Output: undefined
