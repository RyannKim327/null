class SkipNode {
  constructor(value = null, level = 0) {
    this.value = value;
    this.next = new Array(level + 1);
    this.previous = null;
  }
}
class SkipList {
  constructor() {
    this.head = new SkipNode();
    this.maxLevel = 0;
    this.length = 0;
  }

  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  insert(value) {
    const newNode = new SkipNode(value, this.randomLevel());

    if (newNode.level > this.maxLevel) {
      for (let i = this.maxLevel + 1; i <= newNode.level; i++) {
        this.head.next[i] = newNode;
      }
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
        if (newNode.next[i]) {
          newNode.next[i].previous = newNode;
        }
      }
    }

    newNode.previous = current;
    if (newNode.next[0]) {
      newNode.next[0].previous = newNode;
    }
    this.length++;
  }

  remove(value) {
    let current = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      if (current.next[i] && current.next[i].value === value) {
        const nodeToRemove = current.next[i];
        current.next[i] = nodeToRemove.next[i];
        if (nodeToRemove.next[i]) {
          nodeToRemove.next[i].previous = current;
        }
        if (i === 0) {
          this.length--;
        }
      }
    }
  }

  contains(value) {
    let current = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      if (current.next[i] && current.next[i].value === value) {
        return true;
      }
    }
    return false;
  }
}
const skipList = new SkipList();

skipList.insert(3);
skipList.insert(1);
skipList.insert(5);

console.log(skipList.contains(1)); // true
console.log(skipList.contains(2)); // false

skipList.remove(1);
console.log(skipList.contains(1)); // false
