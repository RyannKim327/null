class SkipListNode {
    value: number;
    forward: SkipListNode[];

    constructor(value: number, level: number) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}
class SkipList {
    private head: SkipListNode;
    private maxLevel: number;
    private levelCount: number;
    private probability: number;

    constructor(maxLevel: number, probability: number) {
        this.maxLevel = maxLevel;
        this.levelCount = 0;
        this.probability = probability;
        this.head = new SkipListNode(-Infinity, maxLevel);
    }

    // Randomly choose a level for the new node
    private randomLevel(): number {
        let level = 0;
        while (Math.random() < this.probability && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    // Insert a new value into the skip list
    insert(value: number): void {
        const update = new Array(this.maxLevel + 1).fill(null);
        let currentNode: SkipListNode = this.head;

        // Find the position to insert the new value
        for (let i = this.levelCount; i >= 0; i--) {
            while (currentNode.forward[i] && currentNode.forward[i].value < value) {
                currentNode = currentNode.forward[i];
            }
            update[i] = currentNode;
        }

        // Move to the next node for the lowest level
        currentNode = currentNode.forward[0];

        // If the value is not already present, insert it
        if (!currentNode || currentNode.value !== value) {
            const newLevel = this.randomLevel();
            if (newLevel > this.levelCount) {
                for (let i = this.levelCount + 1; i <= newLevel; i++) {
                    update[i] = this.head;
                }
                this.levelCount = newLevel;
            }

            const newNode = new SkipListNode(value, newLevel);
            for (let i = 0; i <= newLevel; i++) {
                newNode.forward[i] = update[i].forward[i];
                update[i].forward[i] = newNode;
            }
        }
    }

    // Search for a value in the skip list
    search(value: number): boolean {
        let currentNode: SkipListNode = this.head;

        for (let i = this.levelCount; i >= 0; i--) {
            while (currentNode.forward[i] && currentNode.forward[i].value < value) {
                currentNode = currentNode.forward[i];
            }
        }
        currentNode = currentNode.forward[0];

        return currentNode !== null && currentNode.value === value;
    }

    // Deleting a value from the skip list
    delete(value: number): void {
        const update = new Array(this.maxLevel + 1).fill(null);
        let currentNode: SkipListNode = this.head;

        for (let i = this.levelCount; i >= 0; i--) {
            while (currentNode.forward[i] && currentNode.forward[i].value < value) {
                currentNode = currentNode.forward[i];
            }
            update[i] = currentNode;
        }

        currentNode = currentNode.forward[0];

        if (currentNode && currentNode.value === value) {
            for (let i = 0; i <= this.levelCount; i++) {
                if (update[i].forward[i] !== currentNode) break;
                update[i].forward[i] = currentNode.forward[i];
            }

            // Adjust the level count
            while (this.levelCount > 0 && this.head.forward[this.levelCount] === null) {
                this.levelCount--;
            }
        }
    }
}
const skipList = new SkipList(4, 0.5);
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);
skipList.insert(12);
skipList.insert(19);

console.log(skipList.search(6)); // true
console.log(skipList.search(15)); // false

skipList.delete(3);
console.log(skipList.search(3)); // false
