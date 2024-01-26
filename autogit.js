class SkipNode {
  constructor(value = null, level = 0) {
    this.value = value;
    this.next = new Array(level + 1);
  }
}

class SkipList {
  constructor() {
    this.head = new SkipNode();
    this.maxLevel = 0;
  }

  // Generate a random level for a new node
  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  // Insert a value into the skip list
  insert(value) {
    const newNode = new SkipNode(value, this.randomLevel());

    // Increase the max level if necessary
    if (newNode.level > this.maxLevel) {
      this.maxLevel = newNode.level;
    }

    let current = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      if (i <= newNode.level) {
        newNode.next[i] = current.next[i];
        current.next[i] = newNode;
      }
    }
  }

  // Search for a value in the skip list
  search(value) {
    let current = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
    }

    current = current.next[0];
    if (current && current.value === value) {
      return current;
    }

    return null; // Value not found
  }

  // Delete a value from the skip list
  delete(value) {
    let current = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      if (current.next[i] && current.next[i].value === value) {
        current.next[i] = current.next[i].next[i];
      }
    }
  }
}

// Usage:

const skipList = new SkipList();

skipList.insert(1);
skipList.insert(4);
skipList.insert(2);
skipList.insert(3);

console.log(skipList.search(2)); // Output: SkipNode { value: 2, next: [ SkipNode ] }
console.log(skipList.search(5)); // Output: null

skipList.delete(4);
console.log(skipList.search(4)); // Output: null
