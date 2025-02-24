class Node {
    value: any;
    forward: Node[];

    constructor(value: any, level: number) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null); // Create the forward array with null
    }
}

class SkipList {
    private head: Node;
    private maxLevel: number;
    private level: number;

    constructor(maxLevel: number) {
        this.maxLevel = maxLevel;
        this.level = 0; // Start at level 0
        this.head = new Node(null, maxLevel); // Sentinel head node
    }

    private randomLevel(): number {
        let level = 0;
        while (Math.random() < 0.5 && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    insert(value: any): void {
        const updates: Node[] = new Array(this.maxLevel + 1);
        let current: Node = this.head;

        // Find insertion point and update the update array
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            updates[i] = current; // Record the last node at each level
        }

        current = current.forward[0]; // Move to the next node

        // If the value is not present, insert a new node
        if (current === null || current.value !== value) {
            const newLevel = this.randomLevel();
            if (newLevel > this.level) {
                for (let i = this.level + 1; i <= newLevel; i++) {
                    updates[i] = this.head; // Update the head at new levels
                }
                this.level = newLevel; // Raise the current level
            }

            const newNode = new Node(value, newLevel);
            for (let i = 0; i <= newLevel; i++) {
                newNode.forward[i] = updates[i].forward[i];
                updates[i].forward[i] = newNode; // Insert the new node at level i
            }
        }
    }

    search(value: any): boolean {
        let current: Node = this.head;
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }
        current = current.forward[0];
        return current !== null && current.value === value; // Check if found
    }

    delete(value: any): void {
        const updates: Node[] = new Array(this.maxLevel + 1);
        let current: Node = this.head;

        // Find the position to delete and update the update array
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            updates[i] = current; // Record the last node at each level
        }

        current = current.forward[0]; // Move to the next node

        // If the value is found
        if (current !== null && current.value === value) {
            for (let i = 0; i <= this.level; i++) {
                if (updates[i].forward[i] !== current) break; // Stop if the node is not at the level
                updates[i].forward[i] = current.forward[i]; // Remove the node by bypassing it
            }

            // Reduce the level if necessary
            while (this.level > 0 && this.head.forward[this.level] === null) {
                this.level--;
            }
        }
    }
}

// Example Usage
const skipList = new SkipList(4);
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);
skipList.insert(12);
skipList.insert(19);
console.log(skipList.search(7));  // true
console.log(skipList.search(15)); // false
skipList.delete(3);
console.log(skipList.search(3));  // false
