class SkipListNode<T> {
    value: T;
    next: Array<SkipListNode<T> | null>;

    constructor(value: T, level: number) {
        this.value = value;
        this.next = new Array(level).fill(null); // Initialize pointers for each level
    }
}
class SkipList<T> {
    private head: SkipListNode<T>; // Head node of the skip list
    private maxLevel: number;      // Maximum allowed levels
    private currentLevel: number;  // Current highest level in use
    private probability: number;   // Probability for determining node height

    constructor(maxLevel: number = 16, probability: number = 0.5) {
        this.maxLevel = maxLevel;
        this.currentLevel = 0;
        this.probability = probability;
        this.head = new SkipListNode<T>(null as unknown as T, maxLevel); // Dummy head node
    }

    // Generate a random level for a new node
    private randomLevel(): number {
        let level = 1;
        while (Math.random() < this.probability && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    // Search for a value in the skip list
    search(target: T): boolean {
        let current = this.head;

        // Traverse from the top level to the bottom
        for (let i = this.currentLevel - 1; i >= 0; i--) {
            while (current.next[i] !== null && current.next[i]!.value < target) {
                current = current.next[i]!;
            }
        }

        // Move to the bottom level to check if the value exists
        current = current.next[0]!;
        return current !== null && current.value === target;
    }

    // Insert a value into the skip list
    insert(value: T): void {
        const update: Array<SkipListNode<T> | null> = new Array(this.maxLevel).fill(null);
        let current = this.head;

        // Find the position to insert the new node
        for (let i = this.currentLevel - 1; i >= 0; i--) {
            while (current.next[i] !== null && current.next[i]!.value < value) {
                current = current.next[i]!;
            }
            update[i] = current;
        }

        // Move to the bottom level
        current = current.next[0]!;

        // If the value already exists, do nothing
        if (current !== null && current.value === value) {
            return;
        }

        // Determine the level for the new node
        const level = this.randomLevel();

        // If the new level is greater than the current level, update the head
        if (level > this.currentLevel) {
            for (let i = this.currentLevel; i < level; i++) {
                update[i] = this.head;
            }
            this.currentLevel = level;
        }

        // Create the new node
        const newNode = new SkipListNode<T>(value, level);

        // Update the pointers
        for (let i = 0; i < level; i++) {
            newNode.next[i] = update[i]!.next[i];
            update[i]!.next[i] = newNode;
        }
    }

    // Delete a value from the skip list
    delete(value: T): void {
        const update: Array<SkipListNode<T> | null> = new Array(this.maxLevel).fill(null);
        let current = this.head;

        // Find the node to delete
        for (let i = this.currentLevel - 1; i >= 0; i--) {
            while (current.next[i] !== null && current.next[i]!.value < value) {
                current = current.next[i]!;
            }
            update[i] = current;
        }

        // Move to the bottom level
        current = current.next[0]!;

        // If the value exists, delete it
        if (current !== null && current.value === value) {
            for (let i = 0; i < this.currentLevel; i++) {
                if (update[i]!.next[i] !== current) {
                    break;
                }
                update[i]!.next[i] = current.next[i];
            }

            // Adjust the current level if necessary
            while (this.currentLevel > 1 && this.head.next[this.currentLevel - 1] === null) {
                this.currentLevel--;
            }
        }
    }

    // Print the skip list for debugging
    print(): void {
        for (let i = this.currentLevel - 1; i >= 0; i--) {
            let current = this.head.next[i];
            let output = `Level ${i + 1}: `;
            while (current !== null) {
                output += `${current.value} -> `;
                current = current.next[i];
            }
            console.log(output + "NULL");
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

console.log("Skip List after insertions:");
skipList.print();

console.log("Search for 7:", skipList.search(7)); // true
console.log("Search for 10:", skipList.search(10)); // false

skipList.delete(7);
console.log("Skip List after deleting 7:");
skipList.print();
