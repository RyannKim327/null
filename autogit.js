class HashTable {
    constructor(size) {
        this.size = size;
        this.buckets = new Array(size);
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
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        this.buckets[index].push({ key, value });
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (!bucket) {
            return null;
        }
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                return bucket[i].value;
            }
        }
        return null;
    }
}

// Example Usage
const ht = new HashTable(10);
ht.set('apple', 5);
ht.set('banana', 10);

console.log(ht.get('apple')); // Output: 5
console.log(ht.get('banana')); // Output: 10
console.log(ht.get('cherry')); // Output: null
