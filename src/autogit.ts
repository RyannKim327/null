class SkipListNode<T> {
    value: T;
    next: Array<SkipListNode<T> | null>;

    constructor(value: T, level: number) {
        this.value = value;
        this.next = new Array(level).fill(null);
    }
}

class SkipList<T> {
    private head: SkipListNode<T>;
    private maxLevel: number;
    private currentLevel: number;
    private probability: number;

    constructor(maxLevel: number = 16, probability: number = 0.5) {
        this.head = new SkipListNode<T>(null as unknown as T, maxLevel);
        this.maxLevel = maxLevel;
        this.currentLevel = 0;
        this.probability = probability;
    }

    // Randomly determine the level for a new node
    private randomLevel(): number {
        let level = 0;
        while (Math.random() < this.probability && level < this.maxLevel - 1) {
            level++;
        }
        return level;
    }

    // Search for a value in the skip list
    search(value: T): boolean {
        let current = this.head;

        // Traverse the skip list from the top level to the bottom
        for (let i = this.currentLevel; i >= 0; i--) {
            while (current.next[i] && current.next[i]!.value < value) {
                current = current.next[i]!;
            }
        }

        // Move to the bottom level and check if the value exists
        current = current.next[0]!;
        return current && current.value === value;
    }

    // Insert a value into the skip list
    insert(value: T): void {
        const update: Array<SkipListNode<T> | null> = new Array(this.maxLevel).fill(null);
        let current = this.head;

        // Find the correct position for the new value
        for (let i = this.currentLevel; i >= 0; i--) {
            while (current.next[i] && current.next[i]!.value < value) {
                current = current.next[i]!;
            }
            update[i] = current;
        }

        // Move to the bottom level and check if the value already exists
        current = current.next[0]!;
        if (current && current.value === value) {
            console.log(`Value ${value} already exists.`);
            return;
        }

        // Determine the level for the new node
        const level = this.randomLevel();

        // If the new level is greater than the current level, update the head
        if (level > this.currentLevel) {
            for (let i = this.currentLevel + 1; i <= level; i++) {
                update[i] = this.head;
            }
            this.currentLevel = level;
        }

        // Create the new node
        const newNode = new SkipListNode<T>(value, level + 1);

        // Update the pointers
        for (let i = 0; i <= level; i++) {
            newNode.next[i] = update[i]!.next[i];
            update[i]!.next[i] = newNode;
        }

        console.log(`Inserted value ${value} at level ${level}`);
    }

    // Delete a value from the skip list
    delete(value: T): void {
        const update: Array<SkipListNode<T> | null> = new Array(this.maxLevel).fill(null);
        let current = this.head;

        // Find the node to delete
        for (let i = this.currentLevel; i >= 0; i--) {
            while (current.next[i] && current.next[i]!.value < value) {
                current = current.next[i]!;
            }
            update[i] = current;
        }

        // Move to the bottom level and check if the value exists
        current = current.next[0]!;
        if (!current || current.value !== value) {
            console.log(`Value ${value} not found.`);
            return;
        }

        // Update the pointers to remove the node
        for (let i = 0; i <= this.currentLevel; i++) {
            if (update[i]!.next[i] !== current) break;
            update[i]!.next[i] = current.next[i];
        }

        // Reduce the current level if necessary
        while (this.currentLevel > 0 && !this.head.next[this.currentLevel]) {
            this.currentLevel--;
        }

        console.log(`Deleted value ${value}`);
    }

    // Display the skip list for debugging
    display(): void {
        console.log("Skip List:");
        for (let i = this.currentLevel; i >= 0; i--) {
            let current = this.head.next[i];
            let output = `Level ${i}: `;
            while (current) {
                output += `${current.value} -> `;
                current = current.next[i];
            }
            console.log(output + "null");
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

skipList.display();

console.log("Search for 7:", skipList.search(7)); // true
console.log("Search for 10:", skipList.search(10)); // false

skipList.delete(7);
skipList.display();

skipList.delete(10); // Value 10 not found.
