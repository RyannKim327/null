class SkipNode {
    constructor(value, level) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}

class SkipList {
    constructor(maxLevel) {
        this.maxLevel = maxLevel;
        this.head = new SkipNode(-1, maxLevel);
        this.level = 0;
    }

    randomLevel() {
        let level = 0;
        while (Math.random() < 0.5 && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    insert(value) {
        const update = new Array(this.maxLevel + 1).fill(null);
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

            const newNode = new SkipNode(value, newLevel);
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
            console.log("Found value: " + value);
        } else {
            console.log("Value not found");
        }
    }
}

// Example usage
const skipList = new SkipList(3);
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);
skipList.search(6);
skipList.search(8);
