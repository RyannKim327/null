class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i) * (i + 1);
        }
        return hash % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        if (!this.table[index]) {
            return undefined;
        }
        for (const entry of this.table[index]) {
            if (entry[0] === key) {
                return entry[1];
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        if (!this.table[index]) {
            return false;
        }
        const entryIndex = this.table[index].findIndex(entry => entry[0] === key);
        if (entryIndex === -1) {
            return false;
        }
        this.table[index].splice(entryIndex, 1);
        return true;
    }
}

// Example usage
const myHashTable = new HashTable(10);
myHashTable.set("name", "Alice");
myHashTable.set("age", 30);

console.log(myHashTable.get("name")); // Output: Alice
console.log(myHashTable.get("age")); // Output: 30

myHashTable.remove("age");
console.log(myHashTable.get("age")); // Output: undefined
