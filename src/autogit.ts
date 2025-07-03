class SkipListNode<K, V> {
    key: K;
    value: V;
    forward: Array<SkipListNode<K, V> | null>;

    constructor(key: K, value: V, level: number) {
        this.key = key;
        this.value = value;
        this.forward = new Array(level).fill(null);
    }
}

class SkipList<K, V> {
    private readonly MAX_LEVEL: number;
    private readonly P: number;
    private level: number;
    private header: SkipListNode<K, V>;

    constructor(maxLevel: number = 16, probability: number = 0.5) {
        this.MAX_LEVEL = maxLevel;
        this.P = probability;
        this.level = 1;
        // Initialize header with dummy key and value
        this.header = new SkipListNode<K, V>(null as any, null as any, this.MAX_LEVEL);
    }

    // Generate a random level for a new node
    private randomLevel(): number {
        let lvl = 1;
        while (Math.random() < this.P && lvl < this.MAX_LEVEL) {
            lvl++;
        }
        return lvl;
    }

    // Insert or update a key-value pair
    insert(key: K, value: V): void {
        const update: Array<SkipListNode<K, V> | null> = new Array(this.MAX_LEVEL).fill(null);
        let current = this.header;

        // Find the position to insert
        for (let i = this.level - 1; i >= 0; i--) {
            while (
                current.forward[i] !== null &&
                current.forward[i]!.key < key
            ) {
                current = current.forward[i]!;
            }
            update[i] = current;
        }

        const next = current.forward[0];

        // If key exists, update value
        if (next !== null && next.key === key) {
            next.value = value;
            return;
        }

        // Else, insert new node
        const nodeLevel = this.randomLevel();

        if (nodeLevel > this.level) {
            for (let i = this.level; i < nodeLevel; i++) {
                update[i] = this.header;
            }
            this.level = nodeLevel;
        }

        const newNode = new SkipListNode<K, V>(key, value, nodeLevel);

        for (let i = 0; i < nodeLevel; i++) {
            newNode.forward[i] = update[i]!.forward[i];
            update[i]!.forward[i] = newNode;
        }
    }

    // Search for a key
    search(key: K): V | null {
        let current = this.header;

        for (let i = this.level - 1; i >= 0; i--) {
            while (
                current.forward[i] !== null &&
                current.forward[i]!.key < key
            ) {
                current = current.forward[i]!;
            }
        }

        current = current.forward[0];
        if (current !== null && current.key === key) {
            return current.value;
        }
        return null;
    }

    // Delete a key
    delete(key: K): boolean {
        const update: Array<SkipListNode<K, V> | null> = new Array(this.MAX_LEVEL).fill(null);
        let current = this.header;
        let found = false;

        for (let i = this.level - 1; i >= 0; i--) {
            while (
                current.forward[i] !== null &&
                current.forward[i]!.key < key
            ) {
                current = current.forward[i]!;
            }
            update[i] = current;
        }

        const targetNode = current.forward[0];
        if (targetNode !== null && targetNode.key === key) {
            // Remove target node
            for (let i = 0; i < this.level; i++) {
                if (update[i]!.forward[i] !== targetNode) {
                    break;
                }
                update[i]!.forward[i] = targetNode.forward[i];
            }

            // Reduce level if needed
            while (this.level > 1 && this.header.forward[this.level - 1] === null) {
                this.level--;
            }

            found = true;
        }

        return found;
    }
}
const skipList = new SkipList<number, string>();

// Insert elements
skipList.insert(1, "One");
skipList.insert(3, "Three");
skipList.insert(2, "Two");

// Search
console.log(skipList.search(1)); // Output: "One"
console.log(skipList.search(4)); // Output: null

// Delete
console.log(skipList.delete(2)); // Output: true
console.log(skipList.search(2)); // Output: null
