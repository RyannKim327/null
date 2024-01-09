class SkipListNode {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level + 1);
    this.level = level;
  }
}
class SkipList {
  constructor() {
    this.head = new SkipListNode(null, 0);
    this.level = 0;
  }
  // implement the operations like insert, delete, search, etc.
}
class SkipList {
  // ...

  insert(value) {
    const update = new Array(this.level + 1);
    let currentNode = this.head;
  
    for (let i = this.level; i >= 0; i--) {
      while (
        currentNode.next[i] !== undefined &&
        currentNode.next[i].value < value
      ) {
        currentNode = currentNode.next[i];
      }
      update[i] = currentNode;
    }
  
    currentNode = currentNode.next[0];
  
    if (currentNode === undefined || currentNode.value !== value) {
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

  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < 32) {
      level++;
    }
    return level;
  }
}
