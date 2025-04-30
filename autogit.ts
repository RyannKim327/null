class Node<T> {
    value: T;
    forward: Node<T>[]; // Array of forward pointers

    constructor(value: T, level: number) {
        this.value = value;
        // Initialize forward pointers array
        this.forward = new Array(level).fill(null);
    }
}

class SkipList<T> {
    private head: Node<T>;
    private maxLevel: number;
    private probability: number;
    private currentLevel: number;

    constructor(maxLevel: number = 16, probability: number = 0.5) {
        this.maxLevel = maxLevel;
        this.probability = probability;
        this.head = new Node<T>(null, maxLevel); // Create a head node
        this.currentLevel = 0; // Initialize current level of the skip list
    }

    private randomLevel(): number {
        let level = 1;
        while (Math.random() < this.probability && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    public insert(value: T): void {
        let update = new Array<Node<T>>(this.maxLevel);
        let current: Node<T> = this.head;

        // Start from the highest level and move forward
        for (let i = this.currentLevel - 1; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current; // Store the last node at level i
        }

        current = current.forward[0]; // Move to the next node at level 0

        // If the current node is null or its value is not equal to the value to insert
        if (current === null || current.value !== value) {
            const newLevel = this.randomLevel();

            // If the new level is greater than the current highest level
            if (newLevel > this.currentLevel) {
                for (let i = this.currentLevel; i < newLevel; i++) {
                    update[i] = this.head; // Update head for new levels
                }
                this.currentLevel = newLevel; // Update the current highest level
            }

            const newNode = new Node(value, newLevel);
            for (let i = 0; i < newLevel; i++) {
                newNode.forward[i] = update[i].forward[i];
                update[i].forward[i] = newNode; // Insert the new node at level i
            }
        }
    }

    public search(value: T): boolean {
        let current: Node<T> = this.head;

        for (let i = this.currentLevel - 1; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }

        current = current.forward[0]; // Move to the next node at level 0

        // Check if the current node's value is the value we're searching for
        return current !== null && current.value === value;
    }

    public delete(value: T): boolean {
        let update = new Array<Node<T>>(this.maxLevel);
        let current: Node<T> = this.head;

        for (let i = this.currentLevel - 1; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current; // Store the last node at level i
        }

        current = current.forward[0]; // Move to the next node at level 0

        // If current node is the one we want to delete
        if (current !== null && current.value === value) {
            for (let i = 0; i < this.currentLevel; i++) {
                // Only update pointers for levels that have been reached
                if (update[i].forward[i] !== current) break;
                update[i].forward[i] = current.forward[i];
            }

            // Remove levels if the highest level is now empty
            while (this.currentLevel > 1 && this.head.forward[this.currentLevel - 1] === null) {
                this.currentLevel--;
            }

            return true; // Successfully deleted
        }

        return false; // Value not found
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

console.log(skipList.search(19)); // true
console.log(skipList.search(15)); // false

skipList.delete(19);
console.log(skipList.search(19)); // false
