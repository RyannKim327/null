class HashTable<K, V> {
    private table: Array<[K, V] | undefined>;
    private size: number;

    // Initial size of the hash table
    constructor(size: number) {
        this.size = size;
        this.table = new Array(size);
    }

    // A simple hash function
    private hash(key: K): number {
        let hash = 0;
        const keyString = String(key);
        for (let i = 0; i < keyString.length; i++) {
            hash += keyString.charCodeAt(i);
        }
        return hash % this.size;
    }

    // Insert a key-value pair
    public insert(key: K, value: V): void {
        const index = this.hash(key);
        this.table[index] = [key, value];
    }

    // Retrieve a value by key
    public get(key: K): V | undefined {
        const index = this.hash(key);
        const pair = this.table[index];
        if (pair && pair[0] === key) {
            return pair[1];
        }
        return undefined;
    }

    // Remove a key-value pair
    public remove(key: K): void {
        const index = this.hash(key);
        this.table[index] = undefined;
    }

    // Display the contents of the hash table (for debugging purposes)
    public display(): void {
        this.table.forEach((pair, index) => {
            if (pair) {
                console.log(`Index ${index}: Key = ${pair[0]}, Value = ${pair[1]}`);
            }
        });
    }
}

// Example usage
const ht = new HashTable<string, number>(10);
ht.insert("apple", 1);
ht.insert("banana", 2);
ht.insert("orange", 3);
console.log(ht.get("banana")); // Output: 2
ht.remove("apple");
ht.display();
