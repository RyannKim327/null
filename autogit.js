class HashTable {
    constructor(size = 100) {
        this.size = size;
        this.storage = new Array(size);
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

        if (!this.storage[index]) {
            this.storage[index] = [];
        }

        const bucket = this.storage[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }

        bucket.push([key, value]);
    }

    get(key) {
        const index = this.hash(key);

        if (!this.storage[index]) {
            return undefined;
        }

        const bucket = this.storage[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }

        return undefined;
    }

    remove(key) {
        const index = this.hash(key);

        if (!this.storage[index]) {
            return;
        }

        const bucket = this.storage[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }
}

// Example usage
const ht = new HashTable();
ht.set("name", "Alice");
ht.set("age", 30);

console.log(ht.get("name")); // Output: "Alice"
console.log(ht.get("age")); // Output: 30

ht.remove("age");
console.log(ht.get("age")); // Output: undefined
