class HashNode<K, V> {
    key: K;
    value: V;
    next: HashNode<K, V> | null = null;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }
}

class HashTable<K, V> {
    private table: Array<HashNode<K, V> | null>;
    private size: number;

    constructor(size: number = 53) { // Default size can be adjusted
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    private hash(key: K): number {
        let hash = 0;
        const keyString = JSON.stringify(key);
        for (let i = 0; i < keyString.length; i++) {
            hash += keyString.charCodeAt(i);
        }
        return hash % this.size;
    }

    set(key: K, value: V): void {
        const index = this.hash(key);
        const newNode = new HashNode(key, value);

        if (!this.table[index]) {
            this.table[index] = newNode; // No collision
        } else {
            let currentNode: HashNode<K, V> | null = this.table[index];
            while (currentNode) {
                if (currentNode.key === key) {
                    currentNode.value = value; // Update the existing value.
                    return;
                }
                if (currentNode.next === null) {
                    break; // Reached the end of the collision chain.
                }
                currentNode = currentNode.next;
            }
            currentNode!.next = newNode; // Chain the new node at the end.
        }
    }

    get(key: K): V | undefined {
        const index = this.hash(key);
        let currentNode: HashNode<K, V> | null = this.table[index];

        while (currentNode) {
            if (currentNode.key === key) {
                return currentNode.value; // Found the key
            }
            currentNode = currentNode.next; // Move to the next node in the chain.
        }
        return undefined; // Key not found
    }

    remove(key: K): void {
        const index = this.hash(key);
        let currentNode: HashNode<K, V> | null = this.table[index];
        let previousNode: HashNode<K, V> | null = null;

        while (currentNode) {
            if (currentNode.key === key) {
                if (previousNode) {
                    previousNode.next = currentNode.next; // Bypass the current node.
                } else {
                    this.table[index] = currentNode.next; // Remove head.
                }
                return; // Key removed
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    }
}
const hashTable = new HashTable<string, number>();
hashTable.set('apple', 1);
hashTable.set('banana', 2);
hashTable.set('orange', 3);

console.log(hashTable.get('apple')); // Output: 1
console.log(hashTable.get('banana')); // Output: 2
console.log(hashTable.get('grape')); // Output: undefined

hashTable.remove('banana');
console.log(hashTable.get('banana')); // Output: undefined
