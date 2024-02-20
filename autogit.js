class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    hashFunction(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * (i + 1)) % this.size;
        }
        return hash;
    }

    set(key, value) {
        const index = this.hashFunction(key);
        this.table[index] = { key, value };
    }

    get(key) {
        const index = this.hashFunction(key);
        return this.table[index];
    }

    remove(key) {
        const index = this.hashFunction(key);
        this.table[index] = null;
    }
}

// Example usage
const ht = new HashTable();
ht.set("name", "Alice");
ht.set("age", 30);

console.log(ht.get("name")); // Output: { key: 'name', value: 'Alice' }
console.log(ht.get("age")); // Output: { key: 'age', value: 30 }

ht.remove("name");
console.log(ht.get("name")); // Output: null
