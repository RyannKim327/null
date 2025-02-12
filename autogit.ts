class HashTable<K, V> {
    private table: [K, V][][];
    private size: number;

    constructor(size: number = 42) {
        this.size = size;
        this.table = new Array(size);
        for (let i = 0; i < size; i++) {
            this.table[i] = [];
        }
    }

    private hash(key: K): number {
        let hash = 0;
        const keyString = typeof key === 'string' ? key : JSON.stringify(key);
        for (let i = 0; i < keyString.length; i++) {
            hash += keyString.charCodeAt(i);
        }
        return hash % this.size;
    }

    public set(key: K, value: V): void {
        const index = this.hash(key);
        const bucket = this.table[index];

        // Check if the key already exists in this bucket
        const existingEntry = bucket.find(entry => entry[0] === key);
        if (existingEntry) {
            existingEntry[1] = value; // Update value if key exists
        } else {
            bucket.push([key, value]); // Add new key-value pair
        }
    }

    public get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.table[index];
        const entry = bucket.find(entry => entry[0] === key);
        return entry ? entry[1] : undefined; // Return value or undefined
    }

    public remove(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.table[index];
        const entryIndex = bucket.findIndex(entry => entry[0] === key);

        if (entryIndex !== -1) {
            bucket.splice(entryIndex, 1); // Remove entry
            return true;
        }
        return false; // Key was not found
    }

    public sizeOfHashTable(): number {
        return this.table.reduce((acc, bucket) => acc + bucket.length, 0);
    }

    public keys(): K[] {
        const keys: K[] = [];
        for (const bucket of this.table) {
            for (const entry of bucket) {
                keys.push(entry[0]);
            }
        }
        return keys;
    }

    public values(): V[] {
        const values: V[] = [];
        for (const bucket of this.table) {
            for (const entry of bucket) {
                values.push(entry[1]);
            }
        }
        return values;
    }
}

// Usage example
const hashTable = new HashTable<string, number>();
hashTable.set("key1", 1);
hashTable.set("key2", 2);

console.log(hashTable.get("key1")); // Output: 1
console.log(hashTable.get("key2")); // Output: 2
hashTable.remove("key1");

console.log(hashTable.get("key1")); // Output: undefined
console.log(hashTable.sizeOfHashTable()); // Output: 1
console.log(hashTable.keys()); // Output: ['key2']
console.log(hashTable.values()); // Output: [2]
