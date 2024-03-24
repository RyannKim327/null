class SkipNode {
    constructor(value, level) {
        this.value = value;
        this.next = new Array(level + 1).fill(null);
    }
}

class SkipList {
    constructor(maxLevel, p) {
        this.maxLevel = maxLevel;
        this.p = p;
        this.level = 0;
        this.head = new SkipNode(null, maxLevel);
    }

    randomLevel() {
        let level = 0;
        while (Math.random() < this.p && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    insert(value) {
        let update = new Array(this.maxLevel + 1).fill(null);
        let current = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (current.next[i] !== null && current.next[i].value < value) {
                current = current.next[i];
            }
            update[i] = current;
        }

        current = current.next[0];

        if (current === null || current.value !== value) {
            let newLevel = this.randomLevel();
            if (newLevel > this.level) {
                for (let i = this.level + 1; i <= newLevel; i++) {
                    update[i] = this.head;
                }
                this.level = newLevel;
            }

            let newNode = new SkipNode(value, newLevel);

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

    delete(value) {
        let update = new Array(this.maxLevel + 1).fill(null);
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
