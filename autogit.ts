class HashTable<K, V> {
    private table: Array<[K, V][]>; // Array of buckets
    private size: number; // Number of buckets

    constructor(size: number = 53) {
        this.size = size;
        this.table = new Array(size);
        for (let i = 0; i < size; i++) {
            this.table[i] = [];
        }
    }

    // Hash function to convert key to an index
    private hash(key: K): number {
        let hash = 0;
        const stringKey = String(key);
        for (let char of stringKey) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    // Insert a key-value pair
    public set(key: K, value: V): void {
        const index = this.hash(key);
        const bucket = this.table[index];

        // Check if the key already exists and update it
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Update value
                return;
            }
        }

        // If key does not exist, add a new key-value pair
        bucket.push([key, value]);
    }

    // Retrieve a value by key
    public get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let [k, v] of bucket) {
            if (k === key) {
                return v; // Return the value if key is found
            }
        }
        return undefined; // Return undefined if key is not found
    }

    // Remove a key-value pair
    public delete(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // Remove the key-value pair
                return true; // Return true if deletion was successful
            }
        }
        return false; // Return false if key was not found
    }

    // Check if the hash table contains a key
    public has(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let [k] of bucket) {
            if (k === key) {
                return true; // Return true if key is found
            }
        }
        return false; // Return false if key is not found
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
