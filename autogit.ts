class HashTable<K, V> {
    private table: [K, V][] | null[];
    private size: number;

    constructor(size: number) {
        this.size = size;
        this.table = new Array(size).fill(null);
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
        this.table[index] = [key, value];
    }

    public get(key: K): V | null {
        const index = this.hash(key);
        const entry = this.table[index];
        return entry ? entry[1] : null; // Return value or null if not found
    }

    public remove(key: K): void {
        const index = this.hash(key);
        this.table[index] = null; // Remove the entry by setting it to null
    }
}

// Example usage:
const hashTable = new HashTable<string, number>(10);
hashTable.set('name', 1);
console.log(hashTable.get('name')); // Output: 1
hashTable.remove('name');
console.log(hashTable.get('name')); // Output: null
