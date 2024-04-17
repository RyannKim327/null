class Node {
    constructor(value, level) {
        this.value = value;
        this.next = Array(level + 1).fill(null);
    }
}

class SkipList {
    constructor(maxLevels, probability) {
        this.MAX_LEVELS = maxLevels;
        this.PROBABILITY = probability;
        this.level = 0;
        this.head = new Node(-1, this.MAX_LEVELS);
    }

    randomLevel() {
        let level = 0;
        while (Math.random() < this.PROBABILITY && level < this.MAX_LEVELS) {
            level++;
        }
        return level;
    }

    insert(value) {
        const update = Array(this.MAX_LEVELS).fill(null);
        let current = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (current.next[i] !== null && current.next[i].value < value) {
                current = current.next[i];
            }
            update[i] = current;
        }

        current = current.next[0];

        if (current === null || current.value !== value) {
            const newLevel = this.randomLevel();

            if (newLevel > this.level) {
                for (let i = this.level + 1; i < newLevel + 1; i++) {
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
        } else {
            return false;
        }
    }

    remove(value) {
        const update = Array(this.MAX_LEVELS).fill(null);
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
                if (update[i].next[i] !== current) break;
                update[i].next[i] = current.next[i];
            }

            while (this.level > 0 && this.head.next[this.level] === null) {
                this.level--;
            }
        }
    }
}

// Example Usage
const skipList = new SkipList(4, 0.5);
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);
console.log(skipList.search(6));  // Output: true
skipList.remove(6);
console.log(skipList.search(6));  // Output: false
