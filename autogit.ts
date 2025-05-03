class HashTable<K, V> {
    private table: Array<Array<[K, V] | null>>;
    private size: number;

    constructor(size: number = 53) {
        this.size = size;
        this.table = new Array(size).fill(null).map(() => []);
    }

    // Hash function to convert keys into an integer index
    private hash(key: K): number {
        const stringKey = String(key);
        let hashValue = 0;
        for (let i = 0; i < stringKey.length; i++) {
            hashValue += stringKey.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    // Insert or update the key-value pair
    set(key: K, value: V): void {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            const [existingKey] = bucket[i];
            if (existingKey === key) {
                bucket[i][1] = value; // Update existing key
                return;
            }
        }
        
        // If key does not exist, insert it
        bucket.push([key, value]);
    }

    // Retrieve a value by its key
    get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            const [existingKey, value] = bucket[i];
            if (existingKey === key) {
                return value; // Return the value associated with the key
            }
        }
        return undefined; // Key not found
    }

    // Remove a key-value pair by its key
    remove(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            const [existingKey] = bucket[i];
            if (existingKey === key) {
                bucket.splice(i, 1); // Remove the key-value pair
                return true;
            }
        }
        return false; // Key not found
    }

    // Optional: Display the hash table for debugging
    display(): void {
        this.table.forEach((bucket, index) => {
            if (bucket.length) {
                console.log(`${index}: ${JSON.stringify(bucket)}`);
            }
        });
    }
}

// Example usage
const hashTable = new HashTable<string, number>();
hashTable.set('apple', 1);
hashTable.set('banana', 2);
hashTable.set('orange', 3);

console.log(hashTable.get('banana')); // 2
hashTable.remove('apple');
hashTable.display(); // Displays current state of the hash table
