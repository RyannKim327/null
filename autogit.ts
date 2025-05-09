class SkipListNode<T> {
    value: T;
    forward: SkipListNode<T>[]; // Forward links to the next nodes

    constructor(value: T, level: number) {
        this.value = value;
        this.forward = Array(level).fill(null);
    }
}

class SkipList<T> {
    private head: SkipListNode<T>;
    private maxLevel: number;
    private p: number; // Probability for random level generation
    private level: number; // Current highest level

    constructor(maxLevel: number = 16, p: number = 0.5) {
        this.maxLevel = maxLevel;
        this.p = p;
        this.level = 0;
        this.head = new SkipListNode<T>(null as unknown as T, maxLevel); // Create head node
    }

    private randomLevel(): number {
        let level = 0;
        while (Math.random() < this.p && level < this.maxLevel - 1) {
            level++;
        }
        return level;
    }

    insert(value: T): void {
        const update = Array(this.maxLevel).fill(null) as SkipListNode<T>[];
        let current = this.head;

        // Find the position to insert the new value
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current; // Keep track of nodes to update
        }

        current = current.forward[0];

        // Insert the new node
        if (current === null || current.value !== value) {
            const newLevel = this.randomLevel();
            if (newLevel > this.level) {
                for (let i = this.level + 1; i <= newLevel; i++) {
                    update[i] = this.head;
                }
                this.level = newLevel;
            }

            const newNode = new SkipListNode(value, newLevel + 1);
            for (let i = 0; i <= newLevel; i++) {
                newNode.forward[i] = update[i].forward[i];
                update[i].forward[i] = newNode;
            }
        }
    }

    search(value: T): boolean {
        let current = this.head;

        // Search for the value in the skip list
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }

        current = current.forward[0];
        return current !== null && current.value === value;
    }

    delete(value: T): boolean {
        const update = Array(this.maxLevel).fill(null) as SkipListNode<T>[];
        let current = this.head;

        // Find the position of the value to delete
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        // If value is found, remove it
        if (current !== null && current.value === value) {
            for (let i = 0; i <= this.level; i++) {
                if (update[i].forward[i] !== current) break;
                update[i].forward[i] = current.forward[i];
            }

            // Remove levels if necessary
            while (this.level > 0 && this.head.forward[this.level] === null) {
                this.level--;
            }
            return true;
        }
        return false; // Value not found
    }

    print(): void {
        for (let i = this.level; i >= 0; i--) {
            let current = this.head.forward[i];
            let levelValues = [];
            while (current !== null) {
                levelValues.push(current.value);
                current = current.forward[i];
            }
            console.log(`Level ${i}: ${levelValues.join(" -> ")}`);
        }
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
skipList.insert(17);
skipList.insert(26);
skipList.insert(21);
skipList.insert(25);

skipList.print(); // Print the skip list levels

console.log(skipList.search(19)); // true
console.log(skipList.search(15)); // false

skipList.delete(19);
console.log(skipList.search(19)); // false
skipList.print(); // Print after deletion
