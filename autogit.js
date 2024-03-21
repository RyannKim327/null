class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
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
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                return this.table[index][i][1];
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        if (!this.table[index]) {
            return false;
        }
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1);
                return true;
            }
        }
        return false;
    }
}

// Example usage
const ht = new HashTable();
ht.set("name", "Alice");
ht.set("age", 30);
console.log(ht.get("name")); // Output: Alice
console.log(ht.get("age")); // Output: 30
ht.remove("age");
console.log(ht.get("age")); // Output: undefined
