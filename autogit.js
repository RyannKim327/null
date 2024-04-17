// Node class to represent elements in the skip list
class Node {
    constructor(value, level) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}

class SkipList {
    constructor(maxLevel, p) {
        this.maxLevel = maxLevel;
        this.p = p;
        this.header = new Node(-1, maxLevel);
        this.level = 0;
    }

    // Generate a random level for a new node
    randomLevel() {
        let level = 0;
        while (Math.random() < this.p && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    // Insert a new element into the skip list
    insert(value) {
        let update = new Array(this.maxLevel + 1).fill(null);
        let current = this.header;

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
                    update[i] = this.header;
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

    // Search for an element in the skip list
    search(value) {
        let current = this.header;
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
}

// Usage
const skipList = new SkipList(4, 0.5);
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
console.log(skipList.search(6)); // true
console.log(skipList.search(8)); // false
