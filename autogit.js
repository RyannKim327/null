class Node {
  constructor(value, level = 1) {
    this.value = value;
    this.next = new Array(level).fill(null);
  }
}
class SkipList {
  constructor() {
    this.head = new Node(-Infinity);
    this.maxLevel = 1; // current maximum level
  }

  // Generate a random level for a node
  generateRandomLevel() {
    let level = 1;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  // Insert a value into the skip list
  insert(value) {
    const level = this.generateRandomLevel();
    const newNode = new Node(value, level);
    
    if (level > this.maxLevel) {
      this.head.next = this.head.next.concat(new Array(level - this.maxLevel).fill(null));
      this.maxLevel = level;
    }

    let current = this.head;
    for (let i = this.maxLevel - 1; i >= 0; i--) {
      while (current.next[i] !== null && current.next[i].value < value) {
        current = current.next[i];
      }
      if (i < level) {
        newNode.next[i] = current.next[i];
        current.next[i] = newNode;
      }
    }
  }

  // Search for a value in the skip list
  search(value) {
    let current = this.head;
    for (let i = this.maxLevel - 1; i >= 0; i--) {
      while (current.next[i] !== null && current.next[i].value < value) {
        current = current.next[i];
      }
    }
    
    current = current.next[0];
    if (current !== null && current.value === value) {
      return current;
    }
    return null;
  }

  // Delete a value from the skip list
  delete(value) {
    let current = this.head;
    let deleted = false;
    for (let i = this.maxLevel - 1; i >= 0; i--) {
      while (current.next[i] !== null && current.next[i].value < value) {
        current = current.next[i];
      }
      if (current.next[i] !== null && current.next[i].value === value) {
        current.next[i] = current.next[i].next[i];
        deleted = true;
      }
    }
    return deleted;
  }
}
// Create a skip list instance
const skipList = new SkipList();

// Insert values
skipList.insert(3);
skipList.insert(6);
skipList.insert(2);
skipList.insert(1);
skipList.insert(4);

// Search for a value
console.log(skipList.search(2)); // Node { value: 2, next: [ Node ] }
console.log(skipList.search(5)); // null

// Delete a value
console.log(skipList.delete(2)); // true
console.log(skipList.search(2)); // null
