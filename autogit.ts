class HashTable<K, V> {
    private table: Array<Array<[K, V] | undefined>>; // Using an array of arrays for collision resolution
    private size: number;

    constructor(size: number) {
        this.size = size;
        this.table = new Array(size).fill(undefined).map(() => []);
    }

    // Hash function to compute the index for a given key
    private hash(key: K): number {
        let hashValue = 0;
        const keyString = key.toString();
        for (let i = 0; i < keyString.length; i++) {
            hashValue += keyString.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    // Add or update a key-value pair
    public set(key: K, value: V): void {
        const index = this.hash(key);
        const bucket = this.table[index];

        // Check if the key already exists
        const existingEntryIndex = bucket.findIndex(entry => entry && entry[0] === key);
        
        if (existingEntryIndex !== -1) {
            // Update the existing entry
            bucket[existingEntryIndex] = [key, value];
        } else {
            // Add a new entry
            bucket.push([key, value]);
        }
    }

    // Retrieve a value by key
    public get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.table[index];

        const entry = bucket.find(entry => entry && entry[0] === key);
        return entry ? entry[1] : undefined;
    }

    // Delete a key-value pair
    public delete(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.table[index];

        const entryIndex = bucket.findIndex(entry => entry && entry[0] === key);
        if (entryIndex !== -1) {
            bucket.splice(entryIndex, 1);
            return true;
        }
        return false;
    }

    // Show all key-value pairs in the hash table
    public show(): Array<[K, V]> {
        const entries: Array<[K, V]> = [];
        for (const bucket of this.table) {
            for (const entry of bucket) {
                if (entry) {
                    entries.push(entry);
                }
            }
        }
        return entries;
    }
}

// Example Usage
const hashTable = new HashTable<string, number>(50);
hashTable.set("apple", 1);
hashTable.set("banana", 2);
hashTable.set("orange", 3);
console.log(hashTable.get("banana")); // Output: 2
hashTable.delete("apple");
console.log(hashTable.show()); // Output: [ [ 'banana', 2 ], [ 'orange', 3 ] ]
