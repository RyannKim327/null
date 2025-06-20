class SkipListNode {
    value: number;
    forward: SkipListNode[];

    constructor(value: number, level: number) {
        this.value = value;
        this.forward = new Array(level).fill(null); // Pointers to the next nodes at each level
    }
}

class SkipList {
    private head: SkipListNode;
    private maxLevel: number;
    private currentLevel: number;

    constructor(maxLevel: number = 16) {
        this.maxLevel = maxLevel;
        this.currentLevel = 0;
        this.head = new SkipListNode(-Infinity, maxLevel); // Sentinel node with negative infinity value
    }

    // Randomly determine the level for a new node
    private randomLevel(): number {
        let level = 0;
        while (Math.random() < 0.5 && level < this.maxLevel - 1) {
            level++;
        }
        return level;
    }

    // Search for a value in the skip list
    search(target: number): boolean {
        let current = this.head;

        // Start from the top level and move down
        for (let i = this.currentLevel; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < target) {
                current = current.forward[i];
            }
        }

        // Move to the bottom level to check if the target exists
        current = current.forward[0];
        return current && current.value === target;
    }

    // Insert a value into the skip list
    insert(value: number): void {
        const update: SkipListNode[] = new Array(this.maxLevel).fill(null);
        let current = this.head;

        // Find the position to insert the new node
        for (let i = this.currentLevel; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        // Move to the bottom level
        current = current.forward[0];

        // If the value already exists, do nothing
        if (current && current.value === value) {
            console.log(`Value ${value} already exists.`);
            return;
        }

        // Determine the level for the new node
        const level = this.randomLevel();

        // Update the current level of the skip list
        if (level > this.currentLevel) {
            for (let i = this.currentLevel + 1; i <= level; i++) {
                update[i] = this.head;
            }
            this.currentLevel = level;
        }

        // Create the new node
        const newNode = new SkipListNode(value, level);

        // Update the forward pointers
        for (let i = 0; i <= level; i++) {
            newNode.forward[i] = update[i].forward[i];
            update[i].forward[i] = newNode;
        }

        console.log(`Inserted value ${value} at level ${level}`);
    }

    // Delete a value from the skip list
    delete(value: number): void {
        const update: SkipListNode[] = new Array(this.maxLevel).fill(null);
        let current = this.head;

        // Find the node to delete
        for (let i = this.currentLevel; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        // Move to the bottom level
        current = current.forward[0];

        // If the value does not exist, do nothing
        if (!current || current.value !== value) {
            console.log(`Value ${value} not found.`);
            return;
        }

        // Adjust the forward pointers to remove the node
        for (let i = 0; i <= this.currentLevel; i++) {
            if (update[i].forward[i] !== current) break;
            update[i].forward[i] = current.forward[i];
        }

        // Update the current level of the skip list
        while (this.currentLevel > 0 && !this.head.forward[this.currentLevel]) {
            this.currentLevel--;
        }

        console.log(`Deleted value ${value}`);
    }

    // Display the skip list
    display(): void {
        console.log("Skip List Structure:");
        for (let i = 0; i <= this.currentLevel; i++) {
            let current = this.head.forward[i];
            let levelValues = [];
            while (current) {
                levelValues.push(current.value);
                current = current.forward[i];
            }
            console.log(`Level ${i}: ${levelValues.join(" -> ")}`);
        }
    }
}

// Example Usage
const skipList = new SkipList();
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);
skipList.insert(12);
skipList.insert(19);
skipList.insert(17);

skipList.display();

console.log("Search for 7:", skipList.search(7)); // true
console.log("Search for 10:", skipList.search(10)); // false

skipList.delete(7);
skipList.display();

skipList.delete(19);
skipList.display();
Inserted value 3 at level 1
Inserted value 6 at level 0
Inserted value 7 at level 2
Inserted value 9 at level 1
Inserted value 12 at level 0
Inserted value 19 at level 3
Inserted value 17 at level 0
Skip List Structure:
Level 0: 3 -> 6 -> 7 -> 9 -> 12 -> 17 -> 19
Level 1: 3 -> 7 -> 9 -> 19
Level 2: 7 -> 19
Level 3: 19
Search for 7: true
Search for 10: false
Deleted value 7
Skip List Structure:
Level 0: 3 -> 6 -> 9 -> 12 -> 17 -> 19
Level 1: 3 -> 9 -> 19
Level 2: 19
Level 3: 19
Deleted value 19
Skip List Structure:
Level 0: 3 -> 6 -> 9 -> 12 -> 17
Level 1: 3 -> 9
