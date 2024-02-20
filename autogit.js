class HashTable {
    constructor() {
        this.data = {};
    }

    // Hash function to generate a hash value for the key
    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue = (hashValue + key.charCodeAt(i) * i) % 100;
        }
        return hashValue;
    }

    // Insert a key-value pair into the hash table
    set(key, value) {
        const hashKey = this.hash(key);
        if (!this.data[hashKey]) {
            this.data[hashKey] = {};
        }
        this.data[hashKey][key] = value;
    }

    // Retrieve a value from the hash table based on the key
    get(key) {
        const hashKey = this.hash(key);
        if (this.data[hashKey] && this.data[hashKey][key] !== undefined) {
            return this.data[hashKey][key];
        } else {
            return null;
        }
    }

    // Remove a key-value pair from the hash table
    remove(key) {
        const hashKey = this.hash(key);
        if (this.data[hashKey] && this.data[hashKey][key] !== undefined) {
            delete this.data[hashKey][key];
        }
    }
}

// Example usage
const myHashTable = new HashTable();
myHashTable.set("name", "John");
myHashTable.set("age", 30);

console.log(myHashTable.get("name")); // Output: John
console.log(myHashTable.get("age")); // Output: 30

myHashTable.remove("age");
console.log(myHashTable.get("age")); // Output: null
