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

    public set(key: K, value: V): void {
        const index = this.hash(key);
        const bucket = this.table[index];

        // Check if the key already exists in the bucket
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i] && bucket[i][0] === key) {
                bucket[i][1] = value; // Update the value
                return;
            }
        }

        // If the key does not exist, add a new key-value pair
        bucket.push([key, value]);
    }

    public get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i] && bucket[i][0] === key) {
                return bucket[i][1]; // Return the value
            }
        }

        return undefined; // Key not found
    }

    public remove(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i] && bucket[i][0] === key) {
                bucket.splice(i, 1); // Remove the key-value pair
                return true;
            }
        }

        return false; // Key not found
    }

    public keys(): K[] {
        const keys: K[] = [];
        for (const bucket of this.table) {
            for (const pair of bucket) {
                if (pair) {
                    keys.push(pair[0]); // Add the key to the keys array
                }
            }
        }
        return keys;
    }

    public values(): V[] {
        const values: V[] = [];
        for (const bucket of this.table) {
            for (const pair of bucket) {
                if (pair) {
                    values.push(pair[1]); // Add the value to the values array
                }
            }
        }
        return values;
    }
}

// Example usage
const hashTable = new HashTable<string, number>();
hashTable.set("apple", 1);
hashTable.set("banana", 2);
hashTable.set("orange", 3);

console.log(hashTable.get("apple")); // Output: 1
console.log(hashTable.get("banana")); // Output: 2
console.log(hashTable.get("grape")); // Output: undefined

hashTable.remove("banana");
console.log(hashTable.get("banana")); // Output: undefined

console.log(hashTable.keys()); // Output: ['apple', 'orange']
console.log(hashTable.values()); // Output: [1, 3]
