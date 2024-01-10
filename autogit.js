class Node {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new Node(null, 0); // Initialize with null head node
    this.maxLevel = 0; // Maximum level in the skip list
  }

  // Generate a random level for a node
  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  // Insert a value into the skip list
  insert(value) {
    const level = this.randomLevel();
    const newNode = new Node(value, level);

    // Update the head pointers at each level
    while (this.head.next.length < level + 1) {
      this.head.next.push(null);
    }

    let current = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      if (i <= level) {
        newNode.next[i] = current.next[i];
        current.next[i] = newNode;
      }
    }

    if (level > this.maxLevel) {
      this.maxLevel = level;
    }
  }

  // Remove a value from the skip list
  remove(value) {
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

  // Search for a value in the skip list
  search(value) {
    let current = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
    }
    if (current.next[0] && current.next[0].value === value) {
      return current.next[0];
    }
    return null;
  }
}
// Create a new skip list
const skipList = new SkipList();

// Insert values
skipList.insert(10);
skipList.insert(5);
skipList.insert(15);
skipList.insert(7);

// Search for a value
const result = skipList.search(15);
console.log(result); // Output: Node { value: 15, next: [...] }

// Remove a value
skipList.remove(7);
