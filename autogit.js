// Node class to represent each node in the skip list
class Node {
    constructor(value, level) {
        this.value = value; // Node value
        this.next = new Array(level + 1).fill(null); // Array to store references to the next nodes
    }
}

// SkipList class to represent the skip list data structure
class SkipList {
    constructor(maxLevel, probability) {
        this.maxLevel = maxLevel; // Maximum level of the skip list
        this.probability = probability; // Probability factor for determining node levels
        this.level = 0; // Current level of the skip list
        this.head = new Node(-Infinity, maxLevel); // Dummy head node
    }

    // Generate a random level for a new node
    randomLevel() {
        let level = 0;
        while (Math.random() < this.probability && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    // Insert a new value into the skip list
    insert(value) {
        let update = new Array(this.maxLevel + 1).fill(null);
        let current = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (current.next[i] !== null && current.next[i].value < value) {
                current = current.next[i];
            }
            update[i] = current;
        }

        current = current.next[0];

        if (current === null || current.value !== value) {
            let newLevel = this.randomLevel();
            if (newLevel > this.level) {
                for (let i = this.level + 1; i <= newLevel; i++) {
                    update[i] = this.head;
                }
                this.level = newLevel;
            }

            const newNode = new Node(value, newLevel);
            for (let i = 0; i <= newLevel; i++) {
                newNode.next[i] = update[i].next[i];
                update[i].next[i] = newNode;
            }
        }
    }

    // Search for a value in the skip list
    search(value) {
        let current = this.head;
        for (let i = this.level; i >= 0; i--) {
            while (current.next[i] !== null && current.next[i].value < value) {
                current = current.next[i];
            }
        }
        current = current.next[0];

        if (current !== null && current.value === value) {
            return true;
        }
        return false;
    }

    // Delete a value from the skip list
    delete(value) {
        let update = new Array(this.maxLevel + 1).fill(null);
        let current = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (current.next[i] !== null && current.next[i].value < value) {
                current = current.next[i];
            }
            update[i] = current;
        }

        current = current.next[0];

        if (current !== null && current.value === value) {
            for (let i = 0; i <= this.level; i++) {
                if (update[i].next[i] !== current) {
                    break;
                }
                update[i].next[i] = current.next[i];
            }

            while (this.level > 0 && this.head.next[this.level] === null) {
                this.level--;
            }
        }
    }
}

// Usage example
const skipList = new SkipList(4, 0.5);
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
console.log(skipList.search(3)); // Output: true
console.log(skipList.search(5)); // Output: false
skipList.delete(3);
console.log(skipList.search(3)); // Output: false
