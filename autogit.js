class HashTable {
    constructor(size = 20) {
        this.size = size;
        this.buckets = new Array(size).fill(null);
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
        this.buckets[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            return null;
        }
        for (const pair of this.buckets[index]) {
            if (pair[0] === key) {
                return pair[1];
            }
        }
        return null;
    }

    delete(key) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            return null;
        }
        for (let i = 0; i < this.buckets[index].length; i++) {
            if (this.buckets[index][i][0] === key) {
                this.buckets[index].splice(i, 1);
                return;
            }
        }
    }
}

// Example usage
const ht = new HashTable();
ht.set('apple', 10);
ht.set('banana', 20);
console.log(ht.get('apple')); // Output: 10
console.log(ht.get('banana')); // Output: 20
ht.delete('apple');
console.log(ht.get('apple')); // Output: null
