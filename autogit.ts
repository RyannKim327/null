class SkipListNode<T> {
    value: T;
    forward: Array<SkipListNode<T> | null>;

    constructor(value: T, level: number) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}
class SkipList<T> {
    private static readonly MAX_LEVEL = 16;
    private static readonly P = 0.5;

    private head: SkipListNode<T>;
    private level: number;

    constructor() {
        this.level = 0;
        this.head = new SkipListNode<T>(null as any, SkipList.MAX_LEVEL);
    }

    private randomLevel(): number {
        let lvl = 0;
        while (Math.random() < SkipList.P && lvl < SkipList.MAX_LEVEL) {
            lvl++;
        }
        return lvl;
    }

    insert(value: T): void {
        let update: SkipListNode<T>[] = new Array(SkipList.MAX_LEVEL + 1);
        let current = this.head;

        // Start from top level and move forward
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i]!.value < value) {
                current = current.forward[i]!;
            }
            update[i] = current;
        }

        current = current.forward[0]!;

        // Insert only if not present (skip list can be adjusted for duplicates)
        if (current === null || current.value !== value) {
            let newLevel = this.randomLevel();

            if (newLevel > this.level) {
                for (let i = this.level + 1; i <= newLevel; i++) {
                    update[i] = this.head;
                }
                this.level = newLevel;
            }

            let newNode = new SkipListNode(value, newLevel);
            for (let i = 0; i <= newLevel; i++) {
                newNode.forward[i] = update[i].forward[i];
                update[i].forward[i] = newNode;
            }
        }
    }

    search(value: T): boolean {
        let current = this.head;
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i]!.value < value) {
                current = current.forward[i]!;
            }
        }
        current = current.forward[0]!;
        return current !== null && current.value === value;
    }
}
const skiplist = new SkipList<number>();
skiplist.insert(3);
skiplist.insert(6);
skiplist.insert(7);
skiplist.insert(9);

console.log(skiplist.search(7)); // true
console.log(skiplist.search(8)); // false
