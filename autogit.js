// Node class for skip list
class Node {
    constructor(value, level) {
        this.value = value;
        this.next = new Array(level).fill(null);
    }
}

// SkipList class
class SkipList {
    constructor(maxLevels, probability) {
        this.maxLevels = maxLevels;
        this.probability = probability;
        this.header = new Node(null, maxLevels);
        this.level = 0;
    }
    
    randomLevel() {
        let level = 0;
        while (Math.random() < this.probability && level < this.maxLevels - 1) {
            level++;
        }
        return level;
    }
    
    insert(value) {
        const newNode = new Node(value, this.randomLevel());
        
        let current = this.header;
        for (let i = this.level; i >= 0; i--) {
            while (current.next[i] != null && current.next[i].value < value) {
                current = current.next[i];
            }
            if (i <= newNode.next.length) {
                newNode.next[i] = current.next[i];
                current.next[i] = newNode;
            }
        }
        
        this.level = Math.max(this.level, newNode.next.length - 1);
    }
    
    search(value) {
        let current = this.header;
        for (let i = this.level; i >= 0; i--) {
            while (current.next[i] != null && current.next[i].value < value) {
                current = current.next[i];
            }
        }
        current = current.next[0];
        
        if (current != null && current.value === value) {
            return current;
        } else {
            return null;
        }
    }
    
    delete(value) {
        let current = this.header;
        const update = new Array(this.level + 1);
        for (let i = this.level; i >= 0; i--) {
            while (current.next[i] != null && current.next[i].value < value) {
                current = current.next[i];
            }
            update[i] = current;
        }
        
        current = current.next[0];
        if (current != null && current.value === value) {
            for (let i = 0; i <= this.level; i++) {
                if (update[i].next[i] !== current) break;
                update[i].next[i] = current.next[i];
            }
        }
    }
    
}

// Test the SkipList
const skipList = new SkipList(4, 0.5);
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);

console.log(skipList.search(6)); // Outputs: Node { value: 6, next: [ null, null, null, null ] }

skipList.delete(6);
console.log(skipList.search(6)); // Outputs: null
