class HashTable<K, V> {
    private table: Array<[K, V] | null>;
    private size: number;

    constructor(size: number) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    private hash(key: K): number {
        const stringKey = String(key);
        let hash = 0;
        for (let i = 0; i < stringKey.length; i++) {
            hash += stringKey.charCodeAt(i);
        }
        return hash % this.size;
    }

    public set(key: K, value: V): void {
        const index = this.hash(key);
        this.table[index] = [key, value]; // This simple implementation overwrites existing items

        // Handle collisions:
        // Uncomment the following section if you want to handle collisions with chaining
        /* 
        if (this.table[index]) {
            const existingEntry = this.table[index];
            if (Array.isArray(existingEntry)) {
                existingEntry.push([key, value]);
            } else {
                // If it is not null, it means collision occurred
                this.table[index] = [[existingEntry[0], existingEntry[1]], [key, value]];
            }
        } else {
            this.table[index] = [key, value];
        }
        */
    }

    public get(key: K): V | undefined {
        const index = this.hash(key);
        const entry = this.table[index];

        if (entry && Array.isArray(entry)) {
            // Handle collisions
            for (let [k, v] of entry) {
                if (k === key) {
                    return v;
                }
            }
        } else if (entry && entry[0] === key) {
            return entry[1];
        }
        return undefined; // Key not found
    }

    public delete(key: K): boolean {
        const index = this.hash(key);
        const entry = this.table[index];

        if (entry && Array.isArray(entry)) {
            // Handle collisions
            for (let i = 0; i < entry.length; i++) {
                if (entry[i][0] === key) {
                    entry.splice(i, 1); // Remove the entry
                    return true;
                }
            }
        } else if (entry && entry[0] === key) {
            this.table[index] = null; // Delete the entry
            return true;
        }
        return false; // Key not found
    }

    public display(): void {
        console.log(this.table);
    }
}

// Usage
const hashTable = new HashTable<string, number>(10);
hashTable.set("apple", 1);
hashTable.set("banana", 2);
hashTable.set("orange", 3);

console.log(hashTable.get("apple")); // Output: 1
console.log(hashTable.get("banana")); // Output: 2
console.log(hashTable.get("grape")); // Output: undefined

hashTable.delete("banana");
console.log(hashTable.get("banana")); // Output: undefined

hashTable.display(); // Displays the internal state of the hash table
