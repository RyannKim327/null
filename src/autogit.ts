class SkipListNode<T> {
    value: T;
    forwards: Array<SkipListNode<T> | null>;

    constructor(level: number, value: T) {
        this.value = value;
        this.forwards = new Array(level).fill(null);
    }
}
class SkipList<T> {
    private maxLevel: number;
    private probability: number;
    private head: SkipListNode<T>;
    private level: number; // Current highest level in the list

    constructor(maxLevel: number = 16, probability: number = 0.5) {
        this.maxLevel = maxLevel;
        this.probability = probability;
        this.head = new SkipListNode<T>(this.maxLevel, null as any);
        this.level = 1;
    }

    // Generate a random level for node
    private randomLevel(): number {
        let lvl = 1;
        while (Math.random() < this.probability && lvl < this.maxLevel) {
            lvl++;
        }
        return lvl;
    }

    // Insert a value into the skip list
    insert(value: T): void {
        const update: Array<SkipListNode<T> | null> = new Array(this.maxLevel).fill(null);
        let current = this.head;

        // Find the position to insert
        for (let i = this.level - 1; i >= 0; i--) {
            while (current.forwards[i] !== null && current.forwards[i]!.value < value) {
                current = current.forwards[i]!;
            }
            update[i] = current;
        }

        // Generate a random level for the new node
        const nodeLevel = this.randomLevel();
        if (nodeLevel > this.level) {
            for (let i = this.level; i < nodeLevel; i++) {
                update[i] = this.head;
            }
            this.level = nodeLevel;
        }

        const newNode = new SkipListNode<T>(nodeLevel, value);
        for (let i = 0; i < nodeLevel; i++) {
            newNode.forwards[i] = update[i]!.forwards[i];
            update[i]!.forwards[i] = newNode;
        }
    }

    // Search for a value in the skip list
    search(value: T): T | null {
        let current = this.head;
        for (let i = this.level - 1; i >= 0; i--) {
            while (current.forwards[i] !== null && current.forwards[i]!.value < value) {
                current = current.forwards[i]!;
            }
        }

        current = current.forwards[0]!;
        if (current !== null && current.value === value) {
            return current.value;
        }
        return null;
    }

    // Optional: Delete a value from the skip list
    delete(value: T): boolean {
        const update: Array<SkipListNode<T> | null> = new Array(this.maxLevel).fill(null);
        let current = this.head;

        for (let i = this.level - 1; i >= 0; i--) {
            while (current.forwards[i] !== null && current.forwards[i]!.value < value) {
                current = current.forwards[i]!;
            }
            update[i] = current;
        }

        const target = current.forwards[0];
        if (target !== null && target.value === value) {
            for (let i = 0; i < this.level; i++) {
                if (update[i]!.forwards[i] !== target) break;
                update[i]!.forwards[i] = target.forwards[i];
            }

            // Adjust the current level
            while (this.level > 1 && this.head.forwards[this.level - 1] === null) {
                this.level--;
            }
            return true;
        }
        return false;
    }
}
const skiplist = new SkipList<number>();

skiplist.insert(10);
skiplist.insert(20);
skiplist.insert(15);

console.log(skiplist.search(15)); // Output: 15
console.log(skiplist.search(100)); // Output: null

skiplist.delete(15);
console.log(skiplist.search(15)); // Output: null
