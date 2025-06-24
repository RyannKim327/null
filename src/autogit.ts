class Node {
    public value: number;
    public next: Node | null; // Pointer to the next node at the same level
    public down: Node | null; // Pointer to the node at the level below

    constructor(value: number, next: Node | null = null, down: Node | null = null) {
        this.value = value;
        this.next = next;
        this.down = down;
    }
}

class SkipList {
    private head: Node; // Top-left corner of the skip list
    private maxLevel: number; // Maximum number of levels
    private currentLevel: number; // Current highest level in use

    constructor(maxLevel: number = 16) {
        this.head = new Node(-Infinity); // Sentinel node with a very small value
        this.maxLevel = maxLevel;
        this.currentLevel = 0;
    }

    // Search for a value in the skip list
    public search(target: number): boolean {
        let current: Node | null = this.head;

        while (current !== null) {
            while (current.next !== null && current.next.value < target) {
                current = current.next;
            }

            if (current.next !== null && current.next.value === target) {
                return true;
            }

            current = current.down;
        }

        return false;
    }

    // Insert a value into the skip list
    public insert(value: number): void {
        const update: (Node | null)[] = new Array(this.maxLevel).fill(null);
        let current: Node | null = this.head;

        // Find the position to insert the new node at each level
        for (let i = this.currentLevel; i >= 0; i--) {
            while (current.next !== null && current.next.value < value) {
                current = current.next;
            }
            update[i] = current;
            current = current.down;
        }

        // Insert the new node starting from the bottom level
        let shouldInsertHigher = true;
        let downNode: Node | null = null;

        while (shouldInsertHigher && this.currentLevel < this.maxLevel) {
            const newNode = new Node(value, null, downNode);
            const prevNode = update[this.currentLevel];

            if (prevNode !== null) {
                newNode.next = prevNode.next;
                prevNode.next = newNode;
            }

            downNode = newNode;

            // Randomly decide whether to insert at the next higher level
            shouldInsertHigher = Math.random() < 0.5;

            if (shouldInsertHigher) {
                if (this.currentLevel < this.maxLevel - 1) {
                    this.currentLevel++;
                    if (update[this.currentLevel] === null) {
                        // Create a new level with a sentinel node
                        const newHead = new Node(-Infinity, null, this.head);
                        this.head = newHead;
                        update[this.currentLevel] = newHead;
                    }
                }
            }
        }
    }

    // Delete a value from the skip list
    public delete(value: number): boolean {
        let current: Node | null = this.head;
        const update: (Node | null)[] = new Array(this.maxLevel).fill(null);
        let found = false;

        // Find the node to delete and record the path
        for (let i = this.currentLevel; i >= 0; i--) {
            while (current.next !== null && current.next.value < value) {
                current = current.next;
            }
            update[i] = current;
            current = current.down;
        }

        // Check if the value exists at the bottom level
        if (current !== null && current.next !== null && current.next.value === value) {
            found = true;

            // Delete the node at each level where it exists
            for (let i = 0; i <= this.currentLevel; i++) {
                const prevNode = update[i];
                if (prevNode !== null && prevNode.next !== null && prevNode.next.value === value) {
                    prevNode.next = prevNode.next.next;
                }
            }

            // Remove empty levels if necessary
            while (this.currentLevel > 0 && this.head.next === null) {
                this.head = this.head.down!;
                this.currentLevel--;
            }
        }

        return found;
    }

    // Display the skip list (for debugging purposes)
    public display(): void {
        let current: Node | null = this.head;

        while (current !== null) {
            let levelNodes: string[] = [];
            let node: Node | null = current;

            while (node !== null) {
                levelNodes.push(node.value.toString());
                node = node.next;
            }

            console.log(levelNodes.join(" -> "));
            current = current.down;
        }
    }
}
const skipList = new SkipList();

skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);
skipList.insert(12);

console.log("Skip List after insertions:");
skipList.display();

console.log("Search for 7:", skipList.search(7)); // true
console.log("Search for 10:", skipList.search(10)); // false

skipList.delete(7);
console.log("Skip List after deleting 7:");
skipList.display();
