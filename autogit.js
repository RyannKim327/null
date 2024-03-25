// Define the Node class for individual nodes in the skip list
class Node {
    constructor(value, level) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}

// Define the SkipList class
class SkipList {
    constructor(maxLevel, probability) {
        this.maxLevel = maxLevel;
        this.probability = probability;
        this.level = 0;
        this.head = new Node(-Infinity, maxLevel);
    }

    // Generate a random level for a new node
    randomLevel() {
        let level = 0;
        while (Math.random() < this.probability && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    // Insert a value into the skip list
    insert(value) {
        let update = [];
        let current = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        if (current === null || current.value !== value) {
            let newLevel = this.randomLevel();
            if (newLevel > this.level) {
                for (let i = this.level + 1; i <= newLevel; i++) {
                    update[i] = this.head;
                }
                this.level = newLevel;
            }

            let newNode = new Node(value, newLevel);

            for (let i = 0; i <= newLevel; i++) {
                newNode.forward[i] = update[i].forward[i];
                update[i].forward[i] = newNode;
            }
        }
    }

    // Search for a value in the skip list
    search(value) {
        let current = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }

        current = current.forward[0];

        if (current !== null && current.value === value) {
            return true;
        } else {
            return false;
        }
    }

    // Delete a value from the skip list
    delete(value) {
        let update = [];
        let current = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        if (current !== null && current.value === value) {
            for (let i = 0; i <= this.level; i++) {
                if (update[i].forward[i] !== current) {
                    break;
                }
                update[i].forward[i] = current.forward[i];
            }

            while (this.level > 0 && this.head.forward[this.level] === null) {
                this.level--;
            }
        }
    }
}

// Example usage
const skipList = new SkipList(4, 0.5);
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);

console.log(skipList.search(3)); // Output: true
console.log(skipList.search(5)); // Output: false

skipList.delete(6);
console.log(skipList.search(6)); // Output: false
