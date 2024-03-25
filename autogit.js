class HashTable {
    constructor() {
        this.table = new Array(100); // Initialize an array with 100 slots
    }

    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i) * (i + 1);
        }
        return hashValue % this.table.length; // Modulo to fit within the array size
    }

    set(key, value) {
        const index = this.hash(key);
        if (this.table[index]) {
            this.table[index].push([key, value]);
        } else {
            this.table[index] = [[key, value]];
        }
    }

    get(key) {
        const index = this.hash(key);
        if (!this.table[index]) {
            return undefined;
        }

        for (let entry of this.table[index]) {
            if (entry[0] === key) {
                return entry[1];
            }
        }

        return undefined;
    }
}

// Example usage
const hashTable = new HashTable();
hashTable.set("name", "Alice");
hashTable.set("age", 30);

console.log(hashTable.get("name")); // Output: Alice
console.log(hashTable.get("age")); // Output: 30
console.log(hashTable.get("city")); // Output: undefined
