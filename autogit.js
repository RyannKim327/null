// SkipNode class represents a node in the skip list
class SkipNode {
    constructor(value, level) {
        this.value = value;
        this.next = new Array(level).fill(null);
    }
}

// SkipList class represents the skip list data structure
class SkipList {
    constructor(maxLevels, probability) {
        this.maxLevels = maxLevels;
        this.probability = probability;
        this.head = new SkipNode(-Infinity, maxLevels);
    }

    // Helper function to generate random level for a new node
    randomLevel() {
        let level = 1;
        while (Math.random() < this.probability && level < this.maxLevels) {
            level++;
        }
        return level;
    }

    // Insert a new value into the skip list
    insert(value) {
        let level = this.randomLevel();
        const newNode = new SkipNode(value, level);
        let current = this.head;

        for (let i = level - 1; i >= 0; i--) {
            while (current.next[i] !== null && current.next[i].value < value) {
                current = current.next[i];
            }
            newNode.next[i] = current.next[i];
            current.next[i] = newNode;
        }
    }

    // Search for a value in the skip list
    search(target) {
        let current = this.head;

        for (let i = this.maxLevels - 1; i >= 0; i--) {
            while (current.next[i] !== null && current.next[i].value < target) {
                current = current.next[i];
            }
        }

        if (current.next[0] !== null && current.next[0].value === target) {
            return current.next[0];
        } else {
            return null;
        }
    }

    // Delete a value from the skip list
    delete(value) {
        let current = this.head;

        for (let i = this.maxLevels - 1; i >= 0; i--) {
            while (current.next[i] !== null && current.next[i].value < value) {
                current = current.next[i];
            }

            if (current.next[i] !== null && current.next[i].value === value) {
                current.next[i] = current.next[i].next[i];
            }
        }
    }
}

// Usage
const skipList = new SkipList(4, 0.5);
skipList.insert(3);
skipList.insert(6);
skipList.insert(2);
const node = skipList.search(6);
console.log(node.value);
skipList.delete(6);
