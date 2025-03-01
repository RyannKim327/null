class Node {
    value: number;
    forward: Node[];

    constructor(value: number, level: number) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}

class SkipList {
    private head: Node;
    private maxLevel: number;
    private p: number;
    private level: number;

    constructor(maxLevel: number = 16, p: number = 0.5) {
        this.maxLevel = maxLevel; // Maximum number of levels in the skip list
        this.p = p; // Probability for promoting nodes
        this.level = 0; // Current level of the skip list
        this.head = new Node(-1, maxLevel); // Create a head node with a sentinel value
    }

    private randomLevel(): number {
        let level = 0;
        while (Math.random() < this.p && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    insert(value: number): void {
        const update: Node[] = new Array(this.maxLevel + 1);
        let current: Node = this.head;

        // Traverse the skip list and find the position to insert the new value
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current; // Store the last node seen at each level
        }

        current = current.forward[0]; // Move to the next level down

        // If value already exists, do nothing
        if (current && current.value === value) {
            return; 
        }

        // Randomly determine the level for the new node
        const newLevel = this.randomLevel();

        if (newLevel > this.level) {
            for (let i = this.level + 1; i <= newLevel; i++) {
                update[i] = this.head; // Update to head for new higher levels
            }
            this.level = newLevel; // Update the skip list's level
        }

        // Create the new node and insert it
        const newNode = new Node(value, newLevel);
        for (let i = 0; i <= newLevel; i++) {
            newNode.forward[i] = update[i].forward[i];
            update[i].forward[i] = newNode;
        }
    }

    search(value: number): boolean {
        let current: Node = this.head;

        // Traverse the skip list to find the value
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }

        current = current.forward[0]; // Move to the next level down

        // Check if the value exists
        return current != null && current.value === value;
    }

    delete(value: number): boolean {
        const update: Node[] = new Array(this.maxLevel + 1);
        let current: Node = this.head;

        // Traverse the skip list and find the value
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current; // Store the last node seen at each level
        }

        current = current.forward[0]; // Move to the next level down

        // If value does not exist, return false
        if (!current || current.value !== value) {
            return false;
        }

        // Remove the node from the skip list
        for (let i = 0; i <= this.level; i++) {
            if (update[i].forward[i] !== current) break;
            update[i].forward[i] = current.forward[i]; // Bypass the node
        }

        // Update the level of the skip list if necessary
        while (this.level > 0 && this.head.forward[this.level] == null) {
            this.level--;
        }

        return true; // Return true to indicate success
    }
}

// Example usage
const skipList = new SkipList();
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);
skipList.insert(12);
skipList.insert(19);

console.log(skipList.search(7)); // true
console.log(skipList.search(15)); // false

skipList.delete(3);
console.log(skipList.search(3)); // false
