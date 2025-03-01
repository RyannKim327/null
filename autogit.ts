class HashNode<K, V> {
    key: K;
    value: V;
    next: HashNode<K, V> | null;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable<K, V> {
    private table: (HashNode<K, V> | null)[];
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
        const newNode = new HashNode(key, value);

        if (!this.table[index]) {
            this.table[index] = newNode;
        } else {
            let current = this.table[index];
            while (current) {
                if (current.key === key) {
                    current.value = value; // Update existing key
                    return;
                }
                if (!current.next) {
                    current.next = newNode; // Insert new node if end of list
                    return;
                }
                current = current.next;
            }
        }
    }

    public get(key: K): V | null {
        const index = this.hash(key);
        let current = this.table[index];

        while (current) {
            if (current.key === key) {
                return current.value; // Value found
            }
            current = current.next; // Move to the next node
        }
        return null; // Key not found
    }

    public delete(key: K): boolean {
        const index = this.hash(key);
        let current = this.table[index];
        let previous: HashNode<K, V> | null = null;

        while (current) {
            if (current.key === key) {
                if (previous) {
                    previous.next = current.next; // Bypass the current node
                } else {
                    this.table[index] = current.next; // Remove head
                }
                return true; // Key deleted
            }
            previous = current;
            current = current.next; // Move to the next node
        }
        return false; // Key not found
    }
}

// Example Usage
const hashTable = new HashTable<string, number>(10);
hashTable.set('key1', 1);
hashTable.set('key2', 2);
console.log(hashTable.get('key1')); // 1
console.log(hashTable.get('key3')); // null (not found)
hashTable.delete('key1');
console.log(hashTable.get('key1')); // null (deleted)
