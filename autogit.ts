class HashTable<K, V> {
    private table: Array<[K, V][]>; // Array of buckets
    private size: number; // Number of buckets

    constructor(size: number = 53) {
        this.size = size;
        this.table = new Array(size);
    }

    // Hash function to convert keys to an index
    private hash(key: K): number {
        let hash = 0;
        const stringKey = String(key);
        for (let i = 0; i < stringKey.length; i++) {
            hash += stringKey.charCodeAt(i);
        }
        return hash % this.size;
    }

    // Insert a key-value pair
    public set(key: K, value: V): void {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        // Check if the key already exists and update the value
        const bucket = this.table[index];
        const existingPair = bucket.find(([k]) => k === key);
        if (existingPair) {
            existingPair[1] = value; // Update value
        } else {
            bucket.push([key, value]); // Add new key-value pair
        }
    }

    // Retrieve a value by key
    public get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const pair = bucket.find(([k]) => k === key);
            return pair ? pair[1] : undefined; // Return value or undefined
        }
        return undefined;
    }

    // Remove a key-value pair
    public delete(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const pairIndex = bucket.findIndex(([k]) => k === key);
            if (pairIndex !== -1) {
                bucket.splice(pairIndex, 1); // Remove the pair
                return true;
            }
        }
        return false;
    }

    // Check if the hash table contains a key
    public has(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            return bucket.some(([k]) => k === key);
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
hashTable.delete("apple");
console.log(hashTable.get("apple")); // Output: undefined
