class HashTable<K, V> {
    private table: Array<Array<[K, V] | null>>;
    private size: number;

    constructor(size: number = 53) {
        this.size = size;
        this.table = new Array(size).fill(null).map(() => []);
    }

    private hash(key: K): number {
        let hash = 0;
        const keyString = String(key);
        for (let i = 0; i < keyString.length; i++) {
            hash += keyString.charCodeAt(i);
        }
        return hash % this.size;
    }

    set(key: K, value: V): void {
        const index = this.hash(key);
        const bucket = this.table[index];

        // Check if the key already exists in the bucket
        for (let i = 0; i < bucket.length; i++) {
            const [existingKey] = bucket[i];
            if (existingKey === key) {
                // Update the value if the key exists
                bucket[i][1] = value;
                return;
            }
        }

        // If the key does not exist, add the new key-value pair
        bucket.push([key, value]);
    }

    get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            const [existingKey, value] = bucket[i];
            if (existingKey === key) {
                return value;
            }
        }

        return undefined; // Key not found
    }

    remove(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            const [existingKey] = bucket[i];
            if (existingKey === key) {
                bucket.splice(i, 1); // Remove the key-value pair
                return true;
            }
        }

        return false; // Key not found
    }

    keys(): K[] {
        const keys: K[] = [];
        for (const bucket of this.table) {
            for (const [key] of bucket) {
                keys.push(key);
            }
        }
        return keys;
    }

    values(): V[] {
        const values: V[] = [];
        for (const bucket of this.table) {
            for (const [, value] of bucket) {
                values.push(value);
            }
        }
        return values;
    }
}

// Example usage
const hashTable = new HashTable<string, number>();
hashTable.set("one", 1);
hashTable.set("two", 2);
hashTable.set("three", 3);

console.log(hashTable.get("two")); // Output: 2
hashTable.remove("two");
console.log(hashTable.get("two")); // Output: undefined
console.log(hashTable.keys()); // Output: ['one', 'three']
console.log(hashTable.values()); // Output: [1, 3]
