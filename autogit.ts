class HashTable<K, V> {
    private table: Array<[K, V] | null>; // An array to store key-value pairs
    private size: number; // Current size of the hash table

    constructor(private capacity: number = 10) {
        this.table = new Array(capacity).fill(null);
        this.size = 0;
    }

    private hash(key: K): number {
        let hash = 0;
        const stringKey = String(key); // Ensure the key is a string
        for (let i = 0; i < stringKey.length; i++) {
            hash += stringKey.charCodeAt(i);
        }
        return hash % this.capacity; // Return an index within the bounds of the array
    }

    public set(key: K, value: V): void {
        const index = this.hash(key);
        this.table[index] = [key, value]; // Store the key-value pair
        this.size++;
    }

    public get(key: K): V | undefined {
        const index = this.hash(key);
        const entry = this.table[index];
        // Return the value if the key exists, otherwise undefined
        return entry && entry[0] === key ? entry[1] : undefined;
    }

    public delete(key: K): boolean {
        const index = this.hash(key);
        const entry = this.table[index];
        if (entry && entry[0] === key) {
            this.table[index] = null; // Remove the entry
            this.size--;
            return true;
        }
        return false; // Key not found
    }

    public getSize(): number {
        return this.size; // Return the current size of the hash table
    }

    public isEmpty(): boolean {
        return this.size === 0; // Check if the hash table is empty
    }
}

// Usage Example
const hashTable = new HashTable<string, number>();

hashTable.set("apple", 1);
hashTable.set("banana", 2);
hashTable.set("orange", 3);

console.log(hashTable.get("apple")); // Output: 1
console.log(hashTable.get("banana")); // Output: 2
console.log(hashTable.get("grape")); // Output: undefined

hashTable.delete("banana");
console.log(hashTable.get("banana")); // Output: undefined

console.log(`Size: ${hashTable.getSize()}`); // Output: Size: 2
console.log(`Is empty: ${hashTable.isEmpty()}`); // Output: Is empty: false
