class HashTable<K, V> {
    private table: { [key: string]: V } = {};
    
    // Hash function to generate a hash from the key
    private hash(key: K): string {
        let hash = 0;
        const keyString = JSON.stringify(key);
        for (const char of keyString) {
            hash += char.charCodeAt(0);
        }
        return String(hash);
    }

    // Method to set a value in the hash table
    set(key: K, value: V): void {
        const hashKey = this.hash(key);
        this.table[hashKey] = value;
    }

    // Method to get a value from the hash table
    get(key: K): V | undefined {
        const hashKey = this.hash(key);
        return this.table[hashKey];
    }

    // Method to check if a key exists in the hash table
    has(key: K): boolean {
        const hashKey = this.hash(key);
        return hashKey in this.table;
    }

    // Method to remove a value from the hash table
    delete(key: K): void {
        const hashKey = this.hash(key);
        delete this.table[hashKey];
    }
}

// Usage example
const hashTable = new HashTable<string, number>();
hashTable.set("apple", 5);
hashTable.set("banana", 10);

console.log(hashTable.get("apple")); // Output: 5
console.log(hashTable.has("banana")); // Output: true
hashTable.delete("apple");
console.log(hashTable.get("apple")); // Output: undefined
