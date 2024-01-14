class SkipListNode {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level + 1).fill(null);
  }
}
class SkipList {
  constructor() {
    this.head = new SkipListNode(-Infinity, 0);
    this.level = 0;
  }
}
class SkipList {
  // ... existing code

  search(target) {
    let currentNode = this.head;
    for (let i = this.level; i >= 0; i--) {
      while (currentNode.next[i] && currentNode.next[i].value < target) {
        currentNode = currentNode.next[i];
      }
    }
    currentNode = currentNode.next[0];
    if (currentNode && currentNode.value === target) {
      return currentNode;
    }
    return null;
  }

  insert(value) {
    const update = new Array(this.level + 1);
    let currentNode = this.head;
    for (let i = this.level; i >= 0; i--) {
      while (currentNode.next[i] && currentNode.next[i].value < value) {
        currentNode = currentNode.next[i];
      }
      update[i] = currentNode;
    }
    currentNode = currentNode.next[0];
    if (!currentNode || currentNode.value !== value) {
      const newNode = new SkipListNode(value, this.randomLevel());
      if (newNode.level > this.level) {
        for (let i = this.level + 1; i <= newNode.level; i++) {
          update[i] = this.head;
        }
        this.level = newNode.level;
      }
      for (let i = 0; i <= newNode.level; i++) {
        newNode.next[i] = update[i].next[i];
        update[i].next[i] = newNode;
      }
    }
  }

  delete(value) {
    const update = new Array(this.level + 1);
    let currentNode = this.head;
    for (let i = this.level; i >= 0; i--) {
      while (currentNode.next[i] && currentNode.next[i].value < value) {
        currentNode = currentNode.next[i];
      }
      update[i] = currentNode;
    }
    currentNode = currentNode.next[0];
    if (currentNode && currentNode.value === value) {
      for (let i = 0; i <= this.level; i++) {
        if (update[i].next[i] !== currentNode) break;
        update[i].next[i] = currentNode.next[i];
      }
    }
  }

  // ... existing code
}
class SkipList {
  // ... existing code

  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.level + 1) {
      level++;
    }
    return level;
  }

  // ... existing code
}
