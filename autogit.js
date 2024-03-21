class Node {
    constructor(value, level) {
        this.value = value;
        this.next = Array(level).fill(null);
    }
}

class SkipList {
    constructor(maxLevels, probability) {
        this.maxLevels = maxLevels;
        this.probability = probability;
        this.head = new Node(-1, maxLevels);
        this.level = 1;
    }

    randomLevel() {
        let level = 1;
        while (Math.random() < this.probability && level < this.maxLevels) {
            level++;
        }
        return level;
    }

    insert(value) {
        const update = Array(this.maxLevels).fill(null);
        let current = this.head;

        for (let i = this.level - 1; i >= 0; i--) {
            while (current.next[i] !== null && current.next[i].value < value) {
                current = current.next[i];
            }
            update[i] = current;
        }

        const newLevel = this.randomLevel();
        const newNode = new Node(value, newLevel);

        for (let i = 0; i < newLevel; i++) {
            newNode.next[i] = update[i].next[i];
            update[i].next[i] = newNode;
        }

        if (newLevel > this.level) {
            this.level = newLevel;
        }
    }

    search(value) {
        let current = this.head;

        for (let i = this.level - 1; i >= 0; i--) {
            while (current.next[i] !== null && current.next[i].value < value) {
                current = current.next[i];
            }
        }

        if (current.next[0] !== null && current.next[0].value === value) {
            return true;
        }

        return false;
    }

    remove(value) {
        const update = Array(this.maxLevels).fill(null);
        let current = this.head;

        for (let i = this.level - 1; i >= 0; i--) {
            while (current.next[i] !== null && current.next[i].value < value) {
                current = current.next[i];
            }
            update[i] = current;
        }

        if (current.next[0] !== null && current.next[0].value === value) {
            for (let i = 0; i < this.level; i++) {
                if (update[i].next[i] !== null && update[i].next[i].value === value) {
                    update[i].next[i] = update[i].next[i].next[i];
                }
            }

            while (this.level > 1 && this.head.next[this.level - 1] === null) {
                this.level--;
            }
        }
    }
}

// Example usage
const skipList = new SkipList(4, 0.5);
skipList.insert(3);
skipList.insert(6);
skipList.insert(2);
skipList.insert(7);
console.log(skipList.search(3)); // Output: true
console.log(skipList.search(4)); // Output: false
skipList.remove(6);
console.log(skipList.search(6)); // Output: false
