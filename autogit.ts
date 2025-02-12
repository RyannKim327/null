class SkipListNode<T> {
    value: T;
    forward: SkipListNode<T>[];

    constructor(value: T, level: number) {
        this.value = value;
        // Initialize forward pointers for this node
        this.forward = new Array(level + 1).fill(null);
    }
}
class SkipList<T> {
    private header: SkipListNode<T>;
    private maxLevel: number;
    private levelCount: number;
    private p: number; // Probability factor

    constructor(maxLevel: number, p: number = 0.5) {
        this.maxLevel = maxLevel;
        this.levelCount = 0;
        this.p = p;
        this.header = new SkipListNode<T>(null, maxLevel);
    }

    private randomLevel(): number {
        let level = 0;
        while (Math.random() < this.p && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    public insert(value: T): void {
        const update: SkipListNode<T>[] = new Array(this.maxLevel + 1);
        let current: SkipListNode<T> = this.header;

        // Find position to insert
        for (let i = this.levelCount; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        if (!current || current.value !== value) {
            const newLevel = this.randomLevel();

            if (newLevel > this.levelCount) {
                for (let i = this.levelCount + 1; i <= newLevel; i++) {
                    update[i] = this.header;
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

    public search(value: T): boolean {
        let current = this.header;
        for (let i = this.levelCount; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }
        current = current.forward[0];

        return current && current.value === value;
    }

    public delete(value: T): void {
        const update: SkipListNode<T>[] = new Array(this.maxLevel + 1);
        let current: SkipListNode<T> = this.header;

        // Find the element to delete
        for (let i = this.levelCount; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }
        
        current = current.forward[0];

        // If the node is found, remove it
        if (current && current.value === value) {
            for (let i = 0; i <= this.levelCount; i++) {
                if (update[i].forward[i] !== current) break;

                update[i].forward[i] = current.forward[i];
            }

            // Adjust levelCount if necessary
            while (this.levelCount > 0 && this.header.forward[this.levelCount] === null) {
                this.levelCount--;
            }
        }
    }
}
const skipList = new SkipList<number>(4); // Maximum height of the skip list is 4

skipList.insert(10);
skipList.insert(20);
skipList.insert(30);
skipList.insert(40);
skipList.insert(25);

console.log(skipList.search(25)); // true
console.log(skipList.search(15)); // false

skipList.delete(20);
console.log(skipList.search(20)); // false
