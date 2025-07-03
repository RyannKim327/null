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
    private p: number; // Probability for random level generation
    private currentLevel: number;

    constructor(maxLevel: number = 16, p: number = 0.5) {
        this.maxLevel = maxLevel;
        this.p = p;
        this.currentLevel = 0;
        this.head = new Node<T>(null, maxLevel);
    }

    private randomLevel(): number {
        let level = 0;
        while (Math.random() < this.p && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    insert(value: T): void {
        const update: Node<T>[] = new Array(this.maxLevel + 1);
        let current: Node<T> = this.head;

        for (let i = this.currentLevel; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        if (current === null || current.value !== value) {
            const newLevel = this.randomLevel();
            if (newLevel > this.currentLevel) {
                for (let i = this.currentLevel + 1; i <= newLevel; i++) {
                    update[i] = this.head;
                }
                this.currentLevel = newLevel;
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

        for (let i = this.currentLevel; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }

        current = current.forward[0];
        return current !== null && current.value === value;
    }

    delete(value: T): void {
        const update: Node<T>[] = new Array(this.maxLevel + 1);
        let current: Node<T> = this.head;

        for (let i = this.currentLevel; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        if (current !== null && current.value === value) {
            for (let i = 0; i <= this.currentLevel; i++) {
                if (update[i].forward[i] !== current) break;
                update[i].forward[i] = current.forward[i];
            }

            while (this.currentLevel > 0 && this.head.forward[this.currentLevel] === null) {
                this.currentLevel--;
            }
        }
    }
}
const skipList = new SkipList<number>();

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
