// Define the Node class
class Node {
    constructor(value, level) {
        this.value = value;
        this.next = new Array(level + 1).fill(null);
    }
}

// Define the SkipList class
class SkipList {
    constructor(maxLevel, p) {
        this.maxLevel = maxLevel;
        this.p = p;
        this.head = new Node(-1, maxLevel);
        this.level = 0;
    }

    // Generate a random level for a new node
    randomLevel() {
        let level = 0;
        while (Math.random() < this.p && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    // Insert a new value into the skip list
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

            let newNode = new Node(value, newLevel);

            for (let i = 0; i <= newLevel; i++) {
                newNode.next[i] = update[i].next[i];
                update[i].next[i] = newNode;
            }
        }
    }

    // Search for a value in the skip list
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
        }
        
        return false;
    }
}

// Testing the SkipList implementation
let skipList = new SkipList(3, 0.5);
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);

console.log(skipList.search(6));  // Output: true
console.log(skipList.search(8));  // Output: false
