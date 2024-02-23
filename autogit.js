class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
        for (let i = 0; i < size; i++) {
            this.table[i] = [];
        }
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
        this.table[index].push({ key, value });
    }

    get(key) {
        const index = this.hash(key);
        for (const item of this.table[index]) {
            if (item.key === key) {
                return item.value;
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        this.table[index] = this.table[index].filter(item => item.key !== key);
    }
}

// Example usage
const ht = new HashTable(10);
ht.set("apple", "red");
ht.set("banana", "yellow");
console.log(ht.get("apple")); // Output: red
ht.remove("banana");
console.log(ht.get("banana")); // Output: undefined
