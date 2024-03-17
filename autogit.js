// Node class to represent each node in the skip list
class Node {
    constructor(value, level) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}

// SkipList class
class SkipList {
    constructor(maxLevel, p) {
        this.maxLevel = maxLevel;
        this.p = p;
        this.level = 0;
        this.head = new Node(-1, maxLevel);
    }

    randomLevel() {
        let level = 0;
        while (Math.random() < this.p && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    insert(value) {
        let update = new Array(this.maxLevel + 1);
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
                for (let i = this.level + 1; i < newLevel + 1; i++) {
                    update[i] = this.head;
                }
                this.level = newLevel;
            }

            let newNode = new Node(value, newLevel);

            for (let i = 0; i <= newLevel; i++) {
                newNode.forward[i] = update[i].forward[i];
                update[i].forward[i] = newNode;
            }

            console.log("Successfully inserted value:", value);
        } else {
            console.log("Value", value, "already exists in the skip list.");
        }
    }

    search(value) {
        let current = this.head;
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }

        current = current.forward[0];

        if (current !== null && current.value === value) {
            console.log("Value", value, "found in the skip list.");
            return current;
        }

        console.log("Value", value, "not found in the skip list.");
        return null;
    }

    delete(value) {
        let update = new Array(this.maxLevel + 1);
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

            console.log("Successfully deleted value:", value);
        } else {
            console.log("Value", value, "not found in the skip list.");
        }
    }
}

// Example usage
const skipList = new SkipList(3, 0.5);

skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);

skipList.search(6);
skipList.search(8);

skipList.delete(6);
skipList.delete(8);
