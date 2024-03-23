class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 13) % this.size;
        }
        return hash;
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this._hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this._hash(key);
        if (this.table[index]) {
            this.table[index] = this.table[index].filter(item => item[0] !== key);
        }
    }
}
const myHashTable = new HashTable(10);

myHashTable.set("name", "Alice");
myHashTable.set("age", 30);

console.log(myHashTable.get("name")); // Output: Alice
console.log(myHashTable.get("age")); // Output: 30

myHashTable.remove("age");

console.log(myHashTable.get("age")); // Output: undefined
