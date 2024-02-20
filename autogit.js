class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * (i + 1)) % this.size;
        }
        return hash;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push({ key, value });
    }

    get(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i].key === key) {
                    return this.table[index][i].value;
                }
            }
        }
        return null;
    }

    remove(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            this.table[index] = this.table[index].filter(entry => entry.key !== key);
        }
    }
}

// Usage
const hashtable = new HashTable(10);
hashtable.set('name', 'Alice');
hashtable.set('age', 30);

console.log(hashtable.get('name')); // Output: Alice
console.log(hashtable.get('age')); // Output: 30
hashtable.remove('age');
console.log(hashtable.get('age')); // Output: null
