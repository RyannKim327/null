class HashTable<K, V> {
    private table: Array<[K, V] | undefined>;
    private size: number;

    constructor(size: number) {
        this.size = size;
        this.table = new Array(size);
    }

    private hash(key: K): number {
        const stringKey = String(key);
        let hash = 0;

        for (let i = 0; i < stringKey.length; i++) {
            hash += stringKey.charCodeAt(i);
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

        if (entry && entry[0] === key) {
            return entry[1];
        } else {
            return undefined;
        }
    }

    public delete(key: K): boolean {
        const index = this.hash(key);
        const entry = this.table[index];

        if (entry && entry[0] === key) {
            this.table[index] = undefined;
            return true;
        }

        return false;
    }

    public keys(): K[] {
        return this.table
            .filter(entry => entry !== undefined)
            .map(entry => entry![0]);
    }

    public values(): V[] {
        return this.table
            .filter(entry => entry !== undefined)
            .map(entry => entry![1]);
    }
}

// Example usage:
const hashTable = new HashTable<string, number>(50);
hashTable.set("one", 1);
hashTable.set("two", 2);
hashTable.set("three", 3);

console.log(hashTable.get("two")); // Output: 2
console.log(hashTable.keys()); // Output: ["one", "two", "three"]
hashTable.delete("two");
console.log(hashTable.get("two")); // Output: undefined
console.log(hashTable.values()); // Output: [1, 3]
