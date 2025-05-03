class HashTable<K, V> {
    private table: [K, V][][]; // Array of arrays to handle collisions with chaining
    private size: number;

    constructor(size: number = 10) {
        this.size = size;
        this.table = new Array(this.size);
        for (let i = 0; i < this.size; i++) {
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

        // Check if the key already exists and update value
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }

        // If key is new, add the key-value pair
        bucket.push([key, value]);
    }

    public get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }

        // Return undefined if the key is not found
        return undefined;
    }

    public delete(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // Remove the key-value pair
                return true;
            }
        }

        return false; // Key not found
    }

    public keys(): K[] {
        const keys: K[] = [];
        for (const bucket of this.table) {
            for (const [key] of bucket) {
                keys.push(key);
            }
        }
        return keys;
    }

    public values(): V[] {
        const values: V[] = [];
        for (const bucket of this.table) {
            for (const [, value] of bucket) {
                values.push(value);
            }
        }
        return values;
    }

    public sizeOfTable(): number {
        let size = 0;
        for (const bucket of this.table) {
            size += bucket.length;
        }
        return size;
    }
}

// Example usage
const hashTable = new HashTable<string, number>();
hashTable.set("one", 1);
hashTable.set("two", 2);
hashTable.set("three", 3);

console.log(hashTable.get("two"));  // Outputs: 2
console.log(hashTable.keys());       // Outputs: ['one', 'two', 'three']
console.log(hashTable.values());     // Outputs: [1, 2, 3]
hashTable.delete("two");
console.log(hashTable.get("two"));  // Outputs: undefined
