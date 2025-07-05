class HashTable<K, V> {
    private storage: Array<Array<[K, V]>>;
    private capacity: number;

    constructor(capacity: number = 16) {
        this.capacity = capacity;
        this.storage = new Array(this.capacity);
        for (let i = 0; i < this.capacity; i++) {
            this.storage[i] = [];
        }
    }

    // Simple hash function for demonstration
    private hash(key: K): number {
        const keyString = String(key);
        let hash = 0;
        for (let char of keyString) {
            hash += char.charCodeAt(0);
        }
        return hash % this.capacity;
    }

    // Set key-value pair
    public set(key: K, value: V): void {
        const index = this.hash(key);
        const bucket = this.storage[index];

        // Check if key already exists and update
        for (let i = 0; i < bucket.length; i++) {
            const [k, v] = bucket[i];
            if (k === key) {
                bucket[i][1] = value;
                return;
            }
        }

        // Else, add new key-value pair
        bucket.push([key, value]);
    }

    // Get value by key
    public get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.storage[index];

        for (let [k, v] of bucket) {
            if (k === key) {
                return v;
            }
        }
        return undefined; // Not found
    }

    // Delete key-value pair
    public delete(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.storage[index];

        for (let i = 0; i < bucket.length; i++) {
            const [k, _] = bucket[i];
            if (k === key) {
                bucket.splice(i, 1);
                return true;
            }
        }
        return false; // Not found
    }
}
const hashTable = new HashTable<string, number>();

hashTable.set("apple", 5);
hashTable.set("banana", 10);

console.log(hashTable.get("apple")); // Output: 5
console.log(hashTable.get("banana")); // Output: 10

hashTable.delete("apple");
console.log(hashTable.get("apple")); // Output: undefined
