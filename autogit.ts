class Node<T> {
    value: T;
    forward: Node<T>[]; // Array of forward pointers

    constructor(value: T, level: number) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null); // Initialize forward pointers
    }
}

class SkipList<T> {
    private head: Node<T>;
    private maxLevel: number;
    private p: number; // Probability for random level generation
    private currentLevel: number;

    constructor(maxLevel: number, p: number) {
        this.maxLevel = maxLevel;
        this.p = p;
        this.currentLevel = 0;
        this.head = new Node<T>(null, maxLevel); // Head node with null value
    }

    // Randomly generate a level for a new node
    private randomLevel(): number {
        let level = 0;
        while (Math.random() < this.p && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    // Insert a value into the skip list
    insert(value: T): void {
        let update: Node<T>[] = new Array(this.maxLevel + 1).fill(null);
        let current: Node<T> = this.head;

        // Find the position for the new node
        for (let i = this.currentLevel; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current; // Keep track of the previous node at each level
        }

        current = current.forward[0];

        // If the value is not already present, insert it
        if (current === null || current.value !== value) {
            const newLevel = this.randomLevel();
            if (newLevel > this.currentLevel) {
                for (let i = this.currentLevel + 1; i <= newLevel; i++) {
                    update[i] = this.head; // Update head for new higher levels
                }
                this.currentLevel = newLevel; // Update current level
            }

            const newNode = new Node(value, newLevel);
            for (let i = 0; i <= newLevel; i++) {
                newNode.forward[i] = update[i].forward[i];
                update[i].forward[i] = newNode; // Insert the new node at level i
            }
        }
    }

    // Search for a value in the skip list
    search(value: T): boolean {
        let current: Node<T> = this.head;

        // Traverse the list to find the value
        for (let i = this.currentLevel; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }

        current = current.forward[0];
        return current !== null && current.value === value; // Check if found
    }

    // Delete a value from the skip list
    delete(value: T): boolean {
        let update: Node<T>[] = new Array(this.maxLevel + 1).fill(null);
        let current: Node<T> = this.head;

        // Find the position of the value to be deleted
        for (let i = this.currentLevel; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current; // Track the last node at level i
        }

        current = current.forward[0];

        if (current === null || current.value !== value) {
            return false; // Value not found
        }

        // Remove the node from all levels
        for (let i = 0; i <= this.currentLevel; i++) {
            if (update[i].forward[i] !== current) break;
            update[i].forward[i] = current.forward[i];
        }

        // Adjust the current level of the list if necessary
        while (this.currentLevel > 0 && this.head.forward[this.currentLevel] === null) {
            this.currentLevel--;
        }

        return true; // Value deleted
    }
}

// Usage example
const skipList = new SkipList<number>(3, 0.5);
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);
skipList.insert(12);
skipList.insert(19);

console.log(skipList.search(6)); // true
console.log(skipList.search(15)); // false
skipList.delete(6);
console.log(skipList.search(6)); // false
