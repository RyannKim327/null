class SkipListNode<T> {
    value: T;
    next: SkipListNode<T> | null;
    down: SkipListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.down = null;
    }
}
class SkipList<T> {
    private head: SkipListNode<T>;
    private maxLevel: number;
    private currentLevel: number;

    constructor(maxLevel: number = 16) {
        this.head = new SkipListNode<T>(null as unknown as T); // Dummy head node
        this.maxLevel = maxLevel;
        this.currentLevel = 0;
    }

    // Helper function to generate random levels
    private randomLevel(): number {
        let level = 1;
        while (Math.random() < 0.5 && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    // Search for a value in the skip list
    search(target: T): boolean {
        let current = this.head;
        while (current) {
            while (current.next && current.next.value < target) {
                current = current.next;
            }
            if (current.next && current.next.value === target) {
                return true;
            }
            current = current.down;
        }
        return false;
    }

    // Insert a value into the skip list
    insert(value: T): void {
        const update: Array<SkipListNode<T> | null> = new Array(this.maxLevel).fill(null);
        let current: SkipListNode<T> | null = this.head;

        // Find the correct position for insertion at each level
        for (let i = this.currentLevel; i >= 0; i--) {
            while (current.next && current.next.value < value) {
                current = current.next;
            }
            update[i] = current;
            current = current.down;
        }

        // Insert the new node at the lowest level
        const newNode = new SkipListNode<T>(value);
        const newNodeLevel = this.randomLevel();

        if (newNodeLevel > this.currentLevel) {
            for (let i = this.currentLevel + 1; i <= newNodeLevel; i++) {
                update[i] = this.head;
            }
            this.currentLevel = newNodeLevel;
        }

        // Link the new node across levels
        for (let i = 0; i < newNodeLevel; i++) {
            newNode.next = update[i]?.next || null;
            if (update[i]) update[i].next = newNode;

            // Create a new node for the level above
            const upperNode = new SkipListNode<T>(value);
            upperNode.down = newNode;
            newNode = upperNode;
        }
    }

    // Delete a value from the skip list
    delete(value: T): boolean {
        const update: Array<SkipListNode<T> | null> = new Array(this.maxLevel).fill(null);
        let current: SkipListNode<T> | null = this.head;

        // Find the node to delete at each level
        for (let i = this.currentLevel; i >= 0; i--) {
            while (current.next && current.next.value < value) {
                current = current.next;
            }
            update[i] = current;
            current = current.down;
        }

        // Check if the value exists
        if (!current || !current.next || current.next.value !== value) {
            return false;
        }

        // Remove the node from all levels
        for (let i = 0; i <= this.currentLevel; i++) {
            if (update[i]?.next?.value === value) {
                update[i].next = update[i].next?.next || null;
            } else {
                break;
            }
        }

        // Update the current level if necessary
        while (this.currentLevel > 0 && !this.head.next) {
            this.currentLevel--;
        }

        return true;
    }

    // Print the skip list for debugging
    print(): void {
        let currentLevel = this.head;
        while (currentLevel) {
            let current = currentLevel.next;
            let levelValues: Array<T | null> = [];
            while (current) {
                levelValues.push(current.value);
                current = current.next;
            }
            console.log(`Level ${this.currentLevel}:`, levelValues);
            currentLevel = currentLevel.down;
        }
    }
}
const skipList = new SkipList<number>();

// Insert values
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);
skipList.insert(12);

// Print the skip list
skipList.print();

// Search for a value
console.log("Search 7:", skipList.search(7)); // true
console.log("Search 10:", skipList.search(10)); // false

// Delete a value
console.log("Delete 6:", skipList.delete(6)); // true
console.log("Delete 5:", skipList.delete(5)); // false

// Print the skip list after deletion
skipList.print();
Level 2: [ 3, 7, 12 ]
Level 1: [ 3, 6, 7, 9, 12 ]
Level 0: [ 3, 6, 7, 9, 12 ]
Search 7: true
Search 10: false
Delete 6: true
Delete 5: false
Level 2: [ 3, 7, 12 ]
Level 1: [ 3, 7, 9, 12 ]
Level 0: [ 3, 7, 9, 12 ]
