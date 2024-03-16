class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hashFunction(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    insert(key, value) {
        const index = this.hashFunction(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push({ key, value });
    }

    search(key) {
        const index = this.hashFunction(key);
        if (!this.table[index]) {
            return null;
        }
        for (let entry of this.table[index]) {
            if (entry.key === key) {
                return entry.value;
            }
        }
        return null;
    }

    remove(key) {
        const index = this.hashFunction(key);
        if (!this.table[index]) {
            return false;
        }
        this.table[index] = this.table[index].filter(entry => entry.key !== key);
        return true;
    }
}

// Usage
const hashTable = new HashTable(10);
hashTable.insert("apple", "red");
hashTable.insert("banana", "yellow");

console.log(hashTable.search("apple")); // Output: "red"
console.log(hashTable.search("banana")); // Output: "yellow"

hashTable.remove("apple");
console.log(hashTable.search("apple")); // Output: null
