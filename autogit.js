class Node {
    constructor(value) {
        this.value = value;
        this.next = [];
    }
}

class SkipList {
    constructor(maxLevel, probability) {
        this.maxLevel = maxLevel;
        this.head = new Node(-Infinity);
        this.probability = probability;
    }

    getRandomLevel() {
        let level = 1;
        while (Math.random() < this.probability && level < this.maxLevel) {
            level++;
        }
        return level;
    }

    insert(value) {
        let update = [];
        let current = this.head;

        for (let i = this.maxLevel - 1; i >= 0; i--) {
            while (current.next[i] && current.next[i].value < value) {
                current = current.next[i];
            }
            update[i] = current;
        }

        let level = this.getRandomLevel();
        let newNode = new Node(value);
        
        for (let i = 0; i < level; i++) {
            newNode.next[i] = update[i].next[i];
            update[i].next[i] = newNode;
        }
    }

    search(value) {
        let current = this.head;
        for (let i = this.maxLevel - 1; i >= 0; i--) {
            while (current.next[i] && current.next[i].value < value) {
                current = current.next[i];
            }
        }

        current = current.next[0];
        return current && current.value === value ? current : null;
    }

    delete(value) {
        let update = [];
        let current = this.head;

        for (let i = this.maxLevel - 1; i >= 0; i--) {
            while (current.next[i] && current.next[i].value < value) {
                current = current.next[i];
            }
            update[i] = current;
        }

        current = current.next[0];

        if (current && current.value === value) {
            for (let i = 0; i < this.maxLevel; i++) {
                if (update[i].next[i] === current) {
                    update[i].next[i] = current.next[i];
                }
            }
        }
    }
}
