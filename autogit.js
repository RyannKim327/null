// Node class for skip list nodes
class SkipListNode {
  constructor(value = null, next = null, down = null) {
    this.value = value;
    this.next = next;
    this.down = down;
  }
}

// Skip list class
class SkipList {
  constructor() {
    this.head = new SkipListNode();
    this.maxLevel = 1;
  }

  // Generate a random level for a newly inserted node
  randomLevel() {
    let level = 1;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  // Insert a node into the skip list
  insert(value) {
    const newNode = new SkipListNode(value);
    const update = new Array(this.maxLevel + 1).fill(this.head);
    let currentNode = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (currentNode.next && currentNode.next.value < value) {
        currentNode = currentNode.next;
      }
      update[i] = currentNode;
      currentNode = currentNode.down;
    }
    for (let i = 0; i < newNode.next.length; i++) {
      newNode.next[i] = update[i].next;
      update[i].next = newNode;
    }
    if (newNode.next[0]) {
      newNode.next[0].prev = newNode;
    }
    if (newNode.next.length > this.maxLevel) {
      this.maxLevel = newNode.next.length;
    }
  }

  // Remove a node from the skip list
  remove(value) {
    let currentNode = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (currentNode.next && currentNode.next.value < value) {
        currentNode = currentNode.next;
      }
      if (currentNode.next && currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      }
      currentNode = currentNode.down;
    }
  }

  // Search for a node in the skip list
  search(value) {
    let currentNode = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (currentNode.next && currentNode.next.value < value) {
        currentNode = currentNode.next;
      }
      if (currentNode.next && currentNode.next.value === value) {
        return true;
      }
      currentNode = currentNode.down;
    }
    return false;
  }
}

// Usage example
const skipList = new SkipList();
skipList.insert(3);
skipList.insert(5);
skipList.insert(7);
console.log(skipList.search(5)); // Output: true
skipList.remove(5);
console.log(skipList.search(5)); // Output: false
