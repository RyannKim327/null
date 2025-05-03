class SkipListNode<T> {
    value: T;
    forward: SkipListNode<T>[]; // Array of forward pointers to the next nodes at different levels

    constructor(value: T, level: number) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null); // Initialize forward pointers
    }
}
class SkipList<T> {
    private MAX_LEVEL: number;
    private P: number; // Probability of promoting a node to a higher level
    private header: SkipListNode<T>;
    private level: number;

    constructor(maxLevel: number = 16, p: number = 0.5) {
        this.MAX_LEVEL = maxLevel;
        this.P = p;
        this.level = 0;
        this.header = new SkipListNode<T>(null as any, this.MAX_LEVEL); // Sentinel header node
    }

    private randomLevel(): number {
        let level = 0;
        while (Math.random() < this.P && level < this.MAX_LEVEL) {
            level++;
        }
        return level;
    }

    insert(value: T): void {
        const update = new Array<SkipListNode<T>>(this.MAX_LEVEL + 1);
        let current: SkipListNode<T> = this.header;

        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        if (current === null || current.value !== value) {
            const newLevel = this.randomLevel();
            if (newLevel > this.level) {
                for (let i = this.level + 1; i <= newLevel; i++) {
                    update[i] = this.header;
                }
                this.level = newLevel;
            }

            const newNode = new SkipListNode(value, newLevel);
            
            for (let i = 0; i <= newLevel; i++) {
                newNode.forward[i] = update[i].forward[i];
                update[i].forward[i] = newNode;
            }
        }
    }

    search(value: T): boolean {
        let current: SkipListNode<T> = this.header;

        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }

        current = current.forward[0];

        return current !== null && current.value === value;
    }

    delete(value: T): void {
        const update = new Array<SkipListNode<T>>(this.MAX_LEVEL + 1);
        let current: SkipListNode<T> = this.header;

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
const skipList = new SkipList<number>();

skipList.insert(10);
skipList.insert(20);
skipList.insert(30);

console.log(skipList.search(20)); // true
console.log(skipList.search(25)); // false

skipList.delete(20);

console.log(skipList.search(20)); // false
