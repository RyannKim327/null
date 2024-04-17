class Node {
    constructor(value, level) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}

class SkipList {
    constructor(maxLevel, probability) {
        this.maxLevel = maxLevel;
        this.probability = probability;
        this.level = 0;
        this.head = new Node(-1, maxLevel);
    }

    randomLevel() {
        let level = 0;
        while (Math.random() < this.probability && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    insert(value) {
        const update = new Array(this.maxLevel + 1);
        let current = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        if (current === null || current.value !== value) {
            const newLevel = this.randomLevel();

            if (newLevel > this.level) {
                for (let i = this.level + 1; i <= newLevel; i++) {
                    update[i] = this.head;
                }
                this.level = newLevel;
            }

            const newNode = new Node(value, newLevel);
            for (let i = 0; i <= newLevel; i++) {
                newNode.forward[i] = update[i].forward[i];
                update[i].forward[i] = newNode;
            }
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
            return current.value;
        } else {
            return null;
        }
    }

    remove(value) {
        const update = new Array(this.maxLevel + 1);
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

// Example usage:
const skipList = new SkipList(3, 0.5);
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);
console.log(skipList.search(6)); // Output: 6
skipList.remove(6);
console.log(skipList.search(6)); // Output: null
