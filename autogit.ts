class Node<T> {
    value: T;
    forward: Node<T>[];

    constructor(value: T, level: number) {
        this.value = value;
        this.forward = new Array(level).fill(null);
    }
}

class SkipList<T> {
    private head: Node<T>;
    private level: number;
    private maxLevel: number;
    private p: number; // Probability for random level generation
    private size: number;

    constructor(maxLevel: number = 16, p: number = 0.5) {
        this.head = new Node<T>(null, maxLevel); // Head node with null value
        this.level = 0;
        this.maxLevel = maxLevel;
        this.p = p;
        this.size = 0;
    }

    private randomLevel(): number {
        let lvl = 0;
        while (Math.random() < this.p && lvl < this.maxLevel - 1) {
            lvl++;
        }
        return lvl;
    }

    insert(value: T): void {
        let update: Node<T>[] = new Array(this.maxLevel).fill(null);
        let current: Node<T> = this.head;

        // Traverse the skip list to find the position to insert
        for (let i = this.level - 1; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current; // Track the last node at each level
        }

        current = current.forward[0];

        // If the value is already present, we do not insert it
        if (current && current.value === value) {
            return;
        }

        // Randomly decide the level of the new node
        let randomLevel = this.randomLevel();

        // Update the level of the skip list if needed
        if (randomLevel > this.level) {
            for (let i = this.level; i < randomLevel; i++) {
                update[i] = this.head;
            }
            this.level = randomLevel;
        }

        // Create new node and insert it
        const newNode = new Node(value, randomLevel + 1);
        for (let i = 0; i <= randomLevel; i++) {
            newNode.forward[i] = update[i].forward[i];
            update[i].forward[i] = newNode;
        }
        this.size++;
    }

    search(value: T): boolean {
        let current: Node<T> = this.head;

        // Traverse through the list to find the value
        for (let i = this.level - 1; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }

        current = current.forward[0];

        return current !== null && current.value === value;
    }

    delete(value: T): boolean {
        let update: Node<T>[] = new Array(this.maxLevel).fill(null);
        let current: Node<T> = this.head;

        // Traverse to find the node to delete
        for (let i = this.level - 1; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current; // Track the last node at each level
        }

        current = current.forward[0];

        // If the value is present, modify pointers to remove it
        if (current && current.value === value) {
            for (let i = 0; i < this.level; i++) {
                if (update[i].forward[i] !== current) break;
                update[i].forward[i] = current.forward[i];
            }

            // Remove levels if necessary
            while (this.level > 0 && this.head.forward[this.level - 1] === null) {
                this.level--;
            }

            this.size--;
            return true;
        }

        return false; // Value not found
    }

    getSize(): number {
        return this.size;
    }
}

// Example Usage
const skipList = new SkipList<number>();
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);
skipList.insert(12);
skipList.insert(19);
skipList.insert(17);

console.log(skipList.search(6)); // true
console.log(skipList.search(15)); // false

skipList.delete(6);
console.log(skipList.search(6)); // false
