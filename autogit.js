// Node class to represent each node in the skip list
class Node {
    constructor(key, value, level) {
        this.key = key;
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}

// SkipList implementation
class SkipList {
    constructor(maxLevel) {
        this.MAX_LEVEL = maxLevel;
        this.level = 0;
        this.head = new Node(-1, null, this.MAX_LEVEL);
    }

    // Helper function to generate a random level for a node
    randomLevel() {
        let level = 0;
        while (Math.random() < 0.5 && level < this.MAX_LEVEL) {
            level++;
        }
        return level;
    }

    // Insert a key-value pair into the skip list
    insert(key, value) {
        const update = new Array(this.MAX_LEVEL + 1).fill(null);
        let current = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].key < key) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        if (current === null || current.key !== key) {
            const newLevel = this.randomLevel();
            const newNode = new Node(key, value, newLevel);

            if (newLevel > this.level) {
                for (let i = this.level + 1; i <= newLevel; i++) {
                    update[i] = this.head;
                }
                this.level = newLevel;
            }

            for (let i = 0; i <= newLevel; i++) {
                newNode.forward[i] = update[i].forward[i];
                update[i].forward[i] = newNode;
            }
            console.log(`Inserted key: ${key}, value: ${value}`);
        } else {
            console.log(`Key ${key} already exists in the skip list`);
        }
    }

    // Search for a key in the skip list
    search(key) {
        let current = this.head;
        
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].key < key) {
                current = current.forward[i];
            }
        }
        
        current = current.forward[0];
        
        if (current !== null && current.key === key) {
            console.log(`Found key: ${key}, value: ${current.value}`);
            return current.value;
        } else {
            console.log(`Key ${key} not found in the skip list`);
            return null;
        }
    }

    // Delete a key from the skip list
    delete(key) {
        const update = new Array(this.MAX_LEVEL + 1).fill(null);
        let current = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].key < key) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        if (current !== null && current.key === key) {
            for (let i = 0; i <= this.level; i++) {
                if (update[i].forward[i] !== current) break;
                update[i].forward[i] = current.forward[i];
            }

            while (this.level > 0 && this.head.forward[this.level] === null) {
                this.level--;
            }

            console.log(`Deleted key: ${key}`);
        } else {
            console.log(`Key ${key} not found in the skip list`);
        }
    }
}

// Usage Example
const mySkipList = new SkipList(3); // Max level is set to 3

mySkipList.insert(1, 'One');
mySkipList.insert(2, 'Two');
mySkipList.insert(3, 'Three');

mySkipList.search(2);

mySkipList.delete(3);
mySkipList.search(3);
