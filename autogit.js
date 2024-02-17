class Node {
    constructor(value, level) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}

class SkipList {
    constructor(maxLevels) {
        this.maxLevels = maxLevels;
        this.head = new Node(-Infinity, maxLevels);
    }

    randomLevel() {
        let level = 0;
        while (Math.random() < 0.5 && level < this.maxLevels) {
            level++;
        }
        return level;
    }

    insert(value) {
        let level = this.randomLevel();
        let newNode = new Node(value, level);
        let current = this.head;
        
        for (let i = this.maxLevels; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            if (i <= level) {
                newNode.forward[i] = current.forward[i];
                current.forward[i] = newNode;
            }
        }
    }

    search(value) {
        let current = this.head;
        for (let i = this.maxLevels; i >= 0; i--) {
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
        let current = this.head;
        let toDelete = null;

        for (let i = this.maxLevels; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            if (current.forward[i] !== null && current.forward[i].value === value) {
                toDelete = current.forward[i];
                current.forward[i] = current.forward[i].forward[i];
            }
        }

        if (toDelete !== null) {
            // Clean up levels of deleted node
            for (let i = 0; i <= this.maxLevels; i++) {
                if (current.forward[i] === null) {
                    break;
                }
            }
            return true;
        } else {
            return false;
        }
    }
}

// Example usage:
const skipList = new SkipList(3);
skipList.insert(1);
skipList.insert(4);
skipList.insert(2);

console.log(skipList.search(2)); // Node { value: 2, forward: [ null, Node ] }
skipList.delete(4);
console.log(skipList.search(4)); // null
