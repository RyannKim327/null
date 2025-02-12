class HashTable<K, V> {
    private table: Array<[K, V] | null>;
    private size: number;

    constructor(size: number) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    private hash(key: K): number {
        let hashValue = 0;
        const keyString = JSON.stringify(key);
        for (let i = 0; i < keyString.length; i++) {
            hashValue += keyString.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    set(key: K, value: V): void {
        const index = this.hash(key);
        this.table[index] = [key, value];
    }

    get(key: K): V | null {
        const index = this.hash(key);
        const item = this.table[index];
        return item ? item[1] : null;
    }

    remove(key: K): void {
        const index = this.hash(key);
        this.table[index] = null;
    }

    printTable(): void {
        for (const item of this.table) {
            if (item) {
                console.log(`${item[0]}: ${item[1]}`);
            }
        }
    }
}

// Example usage:
const hashTable = new HashTable<string, number>(10);
hashTable.set("apple", 1);
hashTable.set("banana", 2);
hashTable.set("orange", 3);

console.log(hashTable.get("banana")); // Output: 2
hashTable.printTable(); // Output the contents of the hash table
