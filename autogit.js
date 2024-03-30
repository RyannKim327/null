// Node class for skip list node
class Node {
    constructor(value, level) {
        this.value = value;
        this.next = Array(level).fill(null);
    }
}

// Skip list class
class SkipList {
    constructor(maxLevel, probability) {
        this.maxLevel = maxLevel;
        this.probability = probability;
        this.level = 0;
        this.head = new Node(-1, maxLevel);
    }

    // Generate random level for new node
    randomLevel() {
        let level = 0;
        while (Math.random() < this.probability && level < this.maxLevel - 1) {
            level++;
        }
        return level;
    }

    // Insert a value into the skip list
    insert(value) {
        let newLevel = this.randomLevel();
        let newNode = new Node(value, newLevel);
        let current = this.head;
        
        for (let i = this.level; i >= 0; i--) {
            while (current.next[i] && current.next[i].value < value) {
                current = current.next[i];
            }
            if (i <= newLevel) {
                newNode.next[i] = current.next[i];
                current.next[i] = newNode;
            }
        }

        this.level = Math.max(this.level, newLevel);
    }

    // Search for a value in the skip list
    search(value) {
        let current = this.head;
        
        for (let i = this.level; i >= 0; i--) {
            while (current.next[i] && current.next[i].value < value) {
                current = current.next[i];
            }
        }
        
        current = current.next[0];
        if (current && current.value === value) {
            return true;
        }
        
        return false;
    }

    // Remove a value from the skip list
    remove(value) {
        let current = this.head;
        let removed = false;
        
        for (let i = this.level; i >= 0; i--) {
            while (current.next[i] && current.next[i].value < value) {
                current = current.next[i];
            }
            if (current.next[i] && current.next[i].value === value) {
                current.next[i] = current.next[i].next[i];
                removed = true;
            }
        }
        
        if (removed) {
            while (this.level > 0 && !this.head.next[this.level]) {
                this.level--;
            }
        }
    }
}

// Example usage
const skipList = new SkipList(5, 0.5);
skipList.insert(3);
skipList.insert(6);
skipList.insert(2);
skipList.insert(9);

console.log(skipList.search(6)); // Output: true
skipList.remove(6);
console.log(skipList.search(6)); // Output: false
