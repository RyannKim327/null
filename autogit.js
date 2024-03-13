class SkipListNodenode {
    constructor(value, levels) {
        this.value = value;
        this.levels = new Array(levels).fill(null);
    }
}
class SkipList {
    constructor(maxLevels, probability) {
        this.maxLevels = maxLevels;
        this.probability = probability;
        this.head = new SkipListNode(-1, maxLevels);
        this.levelCount = 1;
    }

    insert(value) {
        const node = new SkipListNode(value, this.randomLevel());
        const update = new Array(this.maxLevels).fill(null);

        let current = this.head;
        for (let i = this.levelCount - 1; i >= 0; i--) {
            while (current.levels[i] !== null && current.levels[i].value < value) {
                current = current.levels[i];
            }
            update[i] = current;
        }

        for (let i = 0; i < node.levels.length; i++) {
            node.levels[i] = update[i].levels[i];
            update[i].levels[i] = node;
        }

        if (node.levels[0] !== null) {
            node.levels[0].prev = node;
        }

        if (this.levelCount < node.levels.length) {
            this.levelCount = node.levels.length;
        }
    }

    search(value) {
        let current = this.head;
        for (let i = this.levelCount - 1; i >= 0; i--) {
            while (current.levels[i] !== null && current.levels[i].value < value) {
                current = current.levels[i];
            }
        }

        if (current.levels[0] !== null && current.levels[0].value === value) {
            return current.levels[0];
        } else {
            return null;
        }
    }

    randomLevel() {
        let level = 1;
        while (Math.random() < this.probability && level < this.maxLevels) {
            level++;
        }
        return level;
    }
}
