class SkipListNode<T> {
    value: T;
    forward: SkipListNode<T>[];

    constructor(value: T, level: number) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}

class SkipList<T> {
    private head: SkipListNode<T>;
    private maxLevel: number;
    private probability: number;

    constructor(maxLevel: number = 16, probability: number = 0.5) {
        this.maxLevel = maxLevel;
        this.probability = probability;
        this.head = new SkipListNode<T>(null, maxLevel);
    }

    private randomLevel(): number {
        let level = 0;
        while (Math.random() < this.probability && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    insert(value: T): void {
        const updates = new Array<SkipListNode<T>>(this.maxLevel + 1);
        let current = this.head;

        // Find the position to insert the new node
        for (let i = this.maxLevel; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            updates[i] = current;
        }

        current = current.forward[0];

        // Only insert if the value is not already present
        if (current === null || current.value !== value) {
            const newLevel = this.randomLevel();
            const newNode = new SkipListNode(value, newLevel);

            // Update pointers for the new node
            for (let i = 0; i <= newLevel; i++) {
                newNode.forward[i] = updates[i].forward[i];
                updates[i].forward[i] = newNode;
            }
        }
    }

    search(value: T): boolean {
        let current = this.head;

        for (let i = this.maxLevel; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }

        current = current.forward[0];

        return current !== null && current.value === value;
    }

    remove(value: T): boolean {
        const updates = new Array<SkipListNode<T>>(this.maxLevel + 1);
        let current = this.head;

        // Find the position of the node to remove
        for (let i = this.maxLevel; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            updates[i] = current;
        }

        current = current.forward[0];

        // If the current node is the node to be removed
        if (current !== null && current.value === value) {
            // Update pointers to remove the node
            for (let i = 0; i <= this.maxLevel; i++) {
                if (updates[i].forward[i] !== current) break;
                updates[i].forward[i] = current.forward[i];
            }
            return true;
        }

        return false;
    }
}

// Example usage:
const skipList = new SkipList<number>();

skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);
skipList.insert(12);
skipList.insert(19);

console.log(skipList.search(7));  // Output: true
console.log(skipList.search(15)); // Output: false

skipList.remove(3);
console.log(skipList.search(3)); // Output: false
