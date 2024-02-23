class Node {
    constructor(value, level) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}

class SkipList {
    constructor(maxLevels, probability) {
        this.maxLevels = maxLevels;
        this.probability = probability;
        this.header = new Node(-1, maxLevels);
        this.level = 0;
    }

    randomLevel() {
        let level = 0;
        while (Math.random() < this.probability && level < this.maxLevels) {
            level++;
        }
        return level;
    }

    insert(value) {
        let current = this.header;
        let update = new Array(this.maxLevels + 1).fill(null);

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

    search(value) {
        let current = this.header;

        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }

        current = current.forward[0];

        if (current !== null && current.value === value) {
            return current;
        } else {
            return null;
        }
    }

    delete(value) {
        let update = new Array(this.maxLevels + 1).fill(null);
        let current = this.header;

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

            while (this.level > 0 && this.header.forward[this.level] === null) {
                this.level--;
            }
        }
    }
}

// Usage
let skipList = new SkipList(4, 0.5);
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);

console.log(skipList.search(6)); // Node { value: 6, forward: [ null, Node ] }

skipList.delete(6);
console.log(skipList.search(6)); // null
