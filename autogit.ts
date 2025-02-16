class Node {
    value: number;
    forward: Node[];

    constructor(value: number, level: number) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}

class SkipList {
    private maxLevel: number;
    private header: Node;
    private level: number;

    constructor(maxLevel: number) {
        this.maxLevel = maxLevel;
        this.level = 0;
        this.header = new Node(-Infinity, maxLevel);
    }

    private getRandomLevel(): number {
        let level = 0;
        while (Math.random() < 0.5 && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    insert(value: number): void {
        const update: Node[] = new Array(this.maxLevel + 1);
        let current: Node = this.header;

        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        if (current === null || current.value !== value) {
            const newLevel = this.getRandomLevel();

            if (newLevel > this.level) {
                for (let i = this.level + 1; i <= newLevel; i++) {
                    update[i] = this.header;
                }
                this.level = newLevel;
            }

            const newNode = new Node(value, newLevel);
            for (let i = 0; i <= newLevel; i++) {
                newNode.forward[i] = update[i].forward[i];
                update[i].forward[i] = newNode;
            }
        }
    }

    search(value: number): boolean {
        let current: Node = this.header;

        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }

        current = current.forward[0];
        return current !== null && current.value === value;
    }

    delete(value: number): void {
        const update: Node[] = new Array(this.maxLevel + 1);
        let current: Node = this.header;

        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        if (current !== null && current.value === value) {
            for (let i = 0; i <= this.level; i++) {
                if (update[i].forward[i] !== current) break;
                update[i].forward[i] = current.forward[i];
            }

            while (this.level > 0 && this.header.forward[this.level] === null) {
                this.level--;
            }
        }
    }
}

// Usage:
const skipList = new SkipList(3);
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
