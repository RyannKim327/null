class Node {
    constructor(value, level) {
        this.value = value;
        this.next = new Array(level).fill(null);
    }
}

class SkipList {
    constructor(maxLevel, probability) {
        this.maxLevel = maxLevel;
        this.probability = probability;
        this.head = new Node(-Infinity, maxLevel);
        this.level = 0;
    }

    randomLevel() {
        let level = 0;
        while (Math.random() < this.probability && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    insert(value) {
        const update = new Array(this.maxLevel);
        let current = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (current.next[i] && current.next[i].value < value) {
                current = current.next[i];
            }
            update[i] = current;
        }

        current = current.next[0];

        if (current === null || current.value !== value) {
            const newNodeLevel = this.randomLevel();
            const newNode = new Node(value, newNodeLevel);

            if (newNodeLevel > this.level) {
                for (let i = this.level + 1; i < newNodeLevel; i++) {
                    update[i] = this.head;
                }
                this.level = newNodeLevel;
            }

            for (let i = 0; i < newNodeLevel; i++) {
                newNode.next[i] = update[i].next[i];
                update[i].next[i] = newNode;
            }
        }
    }

    search(value) {
        let current = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (current.next[i] && current.next[i].value < value) {
                current = current.next[i];
            }
        }

        current = current.next[0];

        if (current !== null && current.value === value) {
            return current;
        } else {
            return null;
        }
    }

    remove(value) {
        const update = new Array(this.maxLevel);
        let current = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (current.next[i] && current.next[i].value < value) {
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
