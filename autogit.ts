class Node<T> {
    value: T;
    forward: Node<T>[];

    constructor(value: T, level: number) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}

class SkipList<T> {
    private head: Node<T>;
    private maxLevel: number;
    private p: number;
    private level: number;

    constructor(maxLevel: number, p: number) {
        this.maxLevel = maxLevel;
        this.p = p;
        this.level = 0;
        this.head = new Node<T>(null, maxLevel);
    }

    private randomLevel(): number {
        let lvl = 0;
        while (Math.random() < this.p && lvl < this.maxLevel) {
            lvl++;
        }
        return lvl;
    }

    insert(value: T): void {
        const update = new Array(this.maxLevel + 1);
        let current: Node<T> = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        if (!current || current.value !== value) {
            const newLevel = this.randomLevel();
            if (newLevel > this.level) {
                for (let i = this.level + 1; i <= newLevel; i++) {
                    update[i] = this.head;
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

    search(value: T): boolean {
        let current: Node<T> = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }

        current = current.forward[0];
        return current && current.value === value;
    }

    delete(value: T): void {
        const update = new Array(this.maxLevel + 1);
        let current: Node<T> = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        if (current && current.value === value) {
            for (let i = 0; i <= this.level; i++) {
                if (update[i].forward[i] !== current) break;
                update[i].forward[i] = current.forward[i];
            }

            while (this.level > 0 && this.head.forward[this.level] === null) {
                this.level--;
            }
        }
    }
}

// Example usage
const skipList = new SkipList<number>(3, 0.5);
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);
skipList.insert(12);
skipList.insert(19);

console.log(skipList.search(7));  // true
console.log(skipList.search(15)); // false

skipList.delete(6);
console.log(skipList.search(6));  // false
