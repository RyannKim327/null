class HashTable<K, V> {
    private table: Array<Array<[K, V]> | null>;
    private size: number;

    constructor(size: number) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    private hash(key: K): number {
        // A simple hash function converting the key to a string and calculating a hash index
        let hashValue = 0;
        const keyString = key.toString();
        for (let i = 0; i < keyString.length; i++) {
            hashValue += keyString.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    set(key: K, value: V): void {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        // Check for existing key and update its value
        for (const entry of this.table[index]) {
            if (entry[0] === key) {
                entry[1] = value;
                return;
            }
        }
        // Add new key-value pair
        this.table[index].push([key, value]);
    }

    get(key: K): V | undefined {
        const index = this.hash(key);
        if (!this.table[index]) return undefined;
        for (const entry of this.table[index]) {
            if (entry[0] === key) {
                return entry[1];
            }
        }
        return undefined;
    }

    delete(key: K): boolean {
        const index = this.hash(key);
        if (!this.table[index]) return false;
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1);
                return true;
            }
        }
        return false;
    }

    has(key: K): boolean {
        return this.get(key) !== undefined;
    }
}

// Example usage:
const hashTable = new HashTable<string, number>(50);
hashTable.set('apple', 1);
hashTable.set('banana', 2);
console.log(hashTable.get('apple')); // Output: 1
console.log(hashTable.has('banana')); // Output: true
hashTable.delete('apple');
console.log(hashTable.get('apple')); // Output: undefined
