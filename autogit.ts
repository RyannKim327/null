class HashTable<K, V> {
    private table: Array<[K, V] | undefined>;
    private size: number;

    constructor(size: number) {
        this.size = size;
        this.table = new Array(size);
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

    public get(key: K): V | undefined {
        const index = this.hash(key);
        const entry = this.table[index];
        return entry ? entry[1] : undefined;
    }

    public remove(key: K): void {
        const index = this.hash(key);
        this.table[index] = undefined;
    }

    public has(key: K): boolean {
        const index = this.hash(key);
        return this.table[index] !== undefined;
    }
}

// Example usage:
const hashTable = new HashTable<string, number>(10);
hashTable.set("apple", 1);
hashTable.set("banana", 2);
console.log(hashTable.get("apple")); // Output: 1
console.log(hashTable.has("banana")); // Output: true
hashTable.remove("apple");
console.log(hashTable.get("apple")); // Output: undefined
