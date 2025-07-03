class SkipListNode<T> {
    value: T | null;
    forwards: Array<SkipListNode<T> | null>;

    constructor(level: number, value: T | null = null) {
        this.value = value;
        this.forwards = new Array(level + 1).fill(null);
    }
}

class SkipList<T> {
    private static readonly MAX_LEVEL = 16; // Adjust as needed
    private static readonly P = 0.5; // Probability for level promotion

    private head: SkipListNode<T>;
    private level: number;

    constructor() {
        this.head = new SkipListNode<T>(SkipList.MAX_LEVEL);
        this.level = 0;
    }

    // Generate a random level for node promotion
    private randomLevel(): number {
        let level = 0;
        while (Math.random() < SkipList.P && level < SkipList.MAX_LEVEL) {
            level++;
        }
        return level;
    }

    // Insert a value into the skip list
    insert(value: T): void {
        const update: Array<SkipListNode<T> | null> = new Array(SkipList.MAX_LEVEL + 1).fill(null);
        let current = this.head;

        // Find the position to insert
        for (let i = this.level; i >= 0; i--) {
            while (
                current.forwards[i] !== null &&
                current.forwards[i]!.value !== null &&
                current.forwards[i]!.value! < value
            ) {
                current = current.forwards[i]!;
            }
            update[i] = current;
        }

        const nodeLevel = this.randomLevel();
        if (nodeLevel > this.level) {
            for (let i = this.level + 1; i <= nodeLevel; i++) {
                update[i] = this.head;
            }
            this.level = nodeLevel;
        }

        const newNode = new SkipListNode<T>(nodeLevel, value);
        for (let i = 0; i <= nodeLevel; i++) {
            newNode.forwards[i] = update[i]!.forwards[i];
            update[i]!.forwards[i] = newNode;
        }
    }

    // Search for a value in the skip list
    search(value: T): T | null {
        let current = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (
                current.forwards[i] !== null &&
                current.forwards[i]!.value !== null &&
                current.forwards[i]!.value! < value
            ) {
                current = current.forwards[i]!;
            }
        }

        current = current.forwards[0]!;

        if (current !== null && current.value === value) {
            return current.value;
        }
        return null;
    }

    // Delete a value from the skip list
    delete(value: T): boolean {
        const update: Array<SkipListNode<T> | null> = new Array(SkipList.MAX_LEVEL + 1).fill(null);
        let current = this.head;
        let found = false;

        for (let i = this.level; i >= 0; i--) {
            while (
                current.forwards[i] !== null &&
                current.forwards[i]!.value !== null &&
                current.forwards[i]!.value! < value
            ) {
                current = current.forwards[i]!;
            }
            update[i] = current;
        }

        const target = current.forwards[0];

        if (target !== null && target.value === value) {
            found = true;
            for (let i = 0; i <= this.level; i++) {
                if (update[i]!.forwards[i] !== target) break;
                update[i]!.forwards[i] = target.forwards[i];
            }

            // Adjust the level of the skip list
            while (this.level > 0 && this.head.forwards[this.level] === null) {
                this.level--;
            }
        }

        return found;
    }

    // Optional: Print the skip list (for debugging)
    print(): void {
        for (let i = this.level; i >= 0; i--) {
            let current = this.head.forwards[i];
            const levelNodes: T[] = [];
            while (current !== null) {
                if (current.value !== null) {
                    levelNodes.push(current.value);
                }
                current = current.forwards[i];
            }
            console.log(`Level ${i}: ${levelNodes.join(' -> ')}`);
        }
    }
}
const skiplist = new SkipList<number>();
skiplist.insert(10);
skiplist.insert(20);
skiplist.insert(15);

console.log('Search 15:', skiplist.search(15)); // Output: 15
console.log('Search 25:', skiplist.search(25)); // Output: null

skiplist.print(); // Prints the structure at each level

skiplist.delete(15);
console.log('After deletion of 15:');
skiplist.print();
