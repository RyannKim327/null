class HashTable {
    private size: number; // Size of the hash table
    private buckets: Array<Array<[string, any]>>; // Array of buckets

    constructor(size: number = 53) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []); // Initialize each bucket as an empty array
    }

    /**
     * Hash function to convert a key into an index.
     * @param key - The key to hash.
     * @returns The index in the hash table.
     */
    private hash(key: string): number {
        let hashValue = 0;
        const primeNumber = 31; // A prime number helps reduce collisions
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key.charCodeAt(i);
            hashValue = (hashValue * primeNumber + char) % this.size;
        }
        return hashValue;
    }

    /**
     * Insert or update a key-value pair in the hash table.
     * @param key - The key to insert.
     * @param value - The value associated with the key.
     */
    public set(key: string, value: any): void {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        // Check if the key already exists in the bucket
        for (const [existingKey, existingValue] of bucket) {
            if (existingKey === key) {
                existingValue = value; // Update the value if the key exists
                return;
            }
        }

        // If the key doesn't exist, add it to the bucket
        bucket.push([key, value]);
    }

    /**
     * Retrieve the value associated with a key.
     * @param key - The key to search for.
     * @returns The value associated with the key, or undefined if not found.
     */
    public get(key: string): any | undefined {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        // Search for the key in the bucket
        for (const [existingKey, existingValue] of bucket) {
            if (existingKey === key) {
                return existingValue; // Return the value if the key is found
            }
        }

        return undefined; // Key not found
    }

    /**
     * Remove a key-value pair from the hash table.
     * @param key - The key to remove.
     * @returns True if the key was removed, false otherwise.
     */
    public remove(key: string): boolean {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        // Find the key in the bucket
        for (let i = 0; i < bucket.length; i++) {
            const [existingKey] = bucket[i];
            if (existingKey === key) {
                bucket.splice(i, 1); // Remove the key-value pair
                return true;
            }
        }

        return false; // Key not found
    }

    /**
     * Get all keys stored in the hash table.
     * @returns An array of all keys.
     */
    public keys(): string[] {
        const allKeys: string[] = [];
        for (const bucket of this.buckets) {
            for (const [key] of bucket) {
                allKeys.push(key);
            }
        }
        return allKeys;
    }

    /**
     * Get all values stored in the hash table.
     * @returns An array of all values.
     */
    public values(): any[] {
        const allValues: any[] = [];
        for (const bucket of this.buckets) {
            for (const [, value] of bucket) {
                allValues.push(value);
            }
        }
        return allValues;
    }
}
const hashTable = new HashTable();

// Insert key-value pairs
hashTable.set("name", "Alice");
hashTable.set("age", 25);
hashTable.set("city", "New York");

// Retrieve values
console.log(hashTable.get("name")); // Output: Alice
console.log(hashTable.get("age"));  // Output: 25

// Update a value
hashTable.set("age", 26);
console.log(hashTable.get("age"));  // Output: 26

// Remove a key
hashTable.remove("city");
console.log(hashTable.get("city")); // Output: undefined

// Get all keys and values
console.log(hashTable.keys());   // Output: ["name", "age"]
console.log(hashTable.values()); // Output: ["Alice", 26]
