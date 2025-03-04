class HashTable<K, V> {
    private table: Array<Array<[K, V] | undefined>>;
    private size: number;

    constructor(size: number = 42) {
        this.size = size;
        this.table = new Array(size).fill(undefined).map(() => []);
    }

    private hash(key: K): number {
        let hashValue = 0;
        const keyString = typeof key === 'string' ? key : JSON.stringify(key);
        for (let i = 0; i < keyString.length; i++) {
            hashValue += keyString.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    set(key: K, value: V): void {
        const index = this.hash(key);
        const bucket = this.table[index];

        // Check if the key already exists in the bucket
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i] && bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }

        // If not found, add new key-value pair
        bucket.push([key, value]);
    }

    get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i] && bucket[i][0] === key) {
                return bucket[i][1];
            }
        }

        // Key not found
        return undefined;
    }

    remove(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i] && bucket[i][0] === key) {
                bucket.splice(i, 1); // Remove the element from the bucket
                return true;
            }
        }

        // Key not found
        return false;
    }

    contains(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i] && bucket[i][0] === key) {
                return true;
            }
        }

        return false;
    }

    keys(): K[] {
        const keysArray: K[] = [];
        for (const bucket of this.table) {
            for (const pair of bucket) {
                if (pair) {
                    keysArray.push(pair[0]);
                }
            }
        }
        return keysArray;
    }

    values(): V[] {
        const valuesArray: V[] = [];
        for (const bucket of this.table) {
            for (const pair of bucket) {
                if (pair) {
                    valuesArray.push(pair[1]);
                }
            }
        }
        return valuesArray;
    }
}
const hashTable = new HashTable<string, number>();

hashTable.set("apple", 1);
hashTable.set("banana", 2);
console.log(hashTable.get("apple")); // Output: 1
console.log(hashTable.get("banana")); // Output: 2

hashTable.set("apple", 3);
console.log(hashTable.get("apple")); // Output: 3

hashTable.remove("banana");
console.log(hashTable.contains("banana")); // Output: false

console.log(hashTable.keys()); // Output: ['apple']
console.log(hashTable.values()); // Output: [3]
