class HashTable<K, V> {
    private table: Array<[K, V][]>; // Array of buckets
    private size: number; // Number of buckets

    constructor(size: number = 53) {
        this.size = size;
        this.table = new Array(size);
    }

    // Hash function to compute the index for a given key
    private hash(key: K): number {
        let hash = 0;
        const stringKey = String(key);
        for (let i = 0; i < stringKey.length; i++) {
            hash += stringKey.charCodeAt(i);
        }
        return hash % this.size;
    }

    // Method to set a key-value pair
    set(key: K, value: V): void {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        // Check if the key already exists and update it
        const existingPairIndex = this.table[index].findIndex(pair => pair[0] === key);
        if (existingPairIndex !== -1) {
            this.table[index][existingPairIndex][1] = value; // Update value
        } else {
            this.table[index].push([key, value]); // Add new key-value pair
        }
    }

    // Method to get a value by key
    get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const pair = bucket.find(pair => pair[0] === key);
            return pair ? pair[1] : undefined; // Return value or undefined
        }
        return undefined;
    }

    // Method to remove a key-value pair
    remove(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const pairIndex = bucket.findIndex(pair => pair[0] === key);
            if (pairIndex !== -1) {
                bucket.splice(pairIndex, 1); // Remove the pair
                return true;
            }
        }
        return false; // Key not found
    }

    // Method to check if a key exists
    has(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            return bucket.some(pair => pair[0] === key);
        }
        return false;
    }
}

// Example usage
const hashTable = new HashTable<string, number>();
hashTable.set("apple", 1);
hashTable.set("banana", 2);
console.log(hashTable.get("apple")); // Output: 1
console.log(hashTable.has("banana")); // Output: true
hashTable.remove("apple");
console.log(hashTable.get("apple")); // Output: undefined
