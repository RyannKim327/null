class HashTable<K, V> {
    private table: Array<Array<[K, V]> | null>;
    private size: number;

    constructor(size: number) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    private hash(key: K): number {
        let hashValue = 0;
        const keyString = String(key);
        for (let i = 0; i < keyString.length; i++) {
            hashValue += keyString.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    public set(key: K, value: V): void {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }

        // Check if the key already exists and update the value
        for (let i = 0; i < this.table[index]!.length; i++) {
            if (this.table[index]![i][0] === key) {
                this.table[index]![i][1] = value;
                return;
            }
        }
        
        // If key does not exist, add a new key-value pair
        this.table[index]!.push([key, value]);
    }

    public get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (bucket) {
            for (const [k, v] of bucket) {
                if (k === key) {
                    return v;
                }
            }
        }
        return undefined; // Key not found
    }

    public delete(key: K): void {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (bucket) {
            this.table[index] = bucket.filter(([k]) => k !== key);
        }
    }

    public has(key: K): boolean {
        return this.get(key) !== undefined;
    }

    public clear(): void {
        this.table = new Array(this.size).fill(null);
    }

    public sizeOf(): number {
        let count = 0;
        for (const bucket of this.table) {
            if (bucket) {
                count += bucket.length;
            }
        }
        return count;
    }
}

// Example of using HashTable
const hashTable = new HashTable<string, number>(50);
hashTable.set("apple", 1);
hashTable.set("banana", 2);
console.log(hashTable.get("apple")); // Output: 1
console.log(hashTable.get("banana")); // Output: 2
hashTable.delete("apple");
console.log(hashTable.has("apple")); // Output: false
console.log(hashTable.sizeOf()); // Output: 1
hashTable.clear();
console.log(hashTable.sizeOf()); // Output: 0
