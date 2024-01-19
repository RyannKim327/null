class Node {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level);
  }
}

class SkipList {
  constructor() {
    this.maxLevel = 16; // maximum number of levels
    this.level = 0; // current number of levels in the list
    this.head = new Node(-Infinity, this.maxLevel);
  }

  insert(value) {
    const node = new Node(value, this.randomLevel());
    const update = new Array(this.maxLevel);

    let current = this.head;

    // Search for the correct insertion position and update pointers
    for (let i = this.level; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      update[i] = current;
    }

    // Insert the new node into the skip list at appropriate levels
    for (let i = 0; i <= node.level; i++) {
      node.next[i] = update[i].next[i];
      update[i].next[i] = node;
    }

    if (node.level > this.level) {
      this.level = node.level;
    }
  }

  remove(value) {
    let current = this.head;

    // Search for the node to remove and update pointers
    for (let i = this.level; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      if (current.next[i] && current.next[i].value === value) {
        current.next[i] = current.next[i].next[i];
      }
    }
  }

  search(value) {
    let current = this.head;

    // Search for the node with the given value
    for (let i = this.level; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      if (current.next[i] && current.next[i].value === value) {
        return true; // Found the value in the skip list
      }
    }

    return false; // Value not found
  }

  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.maxLevel) {
      level++;
    }
    return level;
  }
}
