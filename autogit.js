// Node class for skip list node
class Node {
    constructor(value, level) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}

// SkipList class
class SkipList {
    constructor(maxLevels, probability) {
        this.maxLevels = maxLevels;
        this.probability = probability;
        this.level = 0;
        this.head = new Node(-1, maxLevels);
    }

    // Random level generator
    randomLevel() {
        let level = 0;
        while (Math.random() < this.probability && level < this.maxLevels) {
            level++;
        }
        return level;
    }

    // Insert a value into the skip list
    insert(value) {
        let node = this.head;
        const update = new Array(this.maxLevels + 1).fill(null);

        for (let i = this.level; i >= 0; i--) {
            while (node.forward[i] !== null && node.forward[i].value < value) {
                node = node.forward[i];
            }
            update[i] = node;
        }

        node = node.forward[0];

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

    // Search for a value in the skip list
    search(value) {
        let node = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (node.forward[i] !== null && node.forward[i].value < value) {
                node = node.forward[i];
            }
        }

        node = node.forward[0];

        if (node !== null && node.value === value) {
            return node;
        } else {
            return null;
        }
    }

    // Remove a value from the skip list
    remove(value) {
        let node = this.head;
        const update = new Array(this.maxLevels + 1).fill(null);

        for (let i = this.level; i >= 0; i--) {
            while (node.forward[i] !== null && node.forward[i].value < value) {
                node = node.forward[i];
            }
            update[i] = node;
        }

        node = node.forward[0];

        if (node !== null && node.value === value) {
            for (let i = 0; i <= this.level; i++) {
                if (update[i].forward[i] !== node) {
                    break;
                }
                update[i].forward[i] = node.forward[i];
            }

            while (this.level > 0 && this.head.forward[this.level] === null) {
                this.level--;
            }
        }
    }

    // Display the skip list
    display() {
        for (let i = 0; i <= this.level; i++) {
            let node = this.head;
            while (node.forward[i] !== null) {
                console.log(node.forward[i].value);
                node = node.forward[i];
            }
            console.log('---');
        }
    }
}

// Example usage
const skipList = new SkipList(3, 0.5);
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);
skipList.insert(12);
skipList.insert(19);
skipList.insert(17);
skipList.insert(26);
skipList.insert(21);
skipList.display();

console.log('Searching for value 12:', skipList.search(12));
skipList.remove(12);
console.log('After removing value 12:');
skipList.display();
