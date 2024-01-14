class Node {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level);
  }
}
class SkipList {
  constructor() {
    this.head = new Node(null, 1);
    this.level = 1;
    this.maxLevel = 16; // maximum number of levels in the skip list
    this.min = Number.MIN_VALUE; // minimum possible value
    this.max = Number.MAX_VALUE; // maximum possible value
  }
}
class SkipList {
  ...

  insert(value) {
    const update = new Array(this.maxLevel);
    let current = this.head;

    for (let i = this.level - 1; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      update[i] = current;
    }

    const newNode = new Node(value, this.randomLevel());
    if (newNode.level > this.level) {
      for (let i = this.level; i < newNode.level; i++) {
        update[i] = this.head;
      }
      this.level = newNode.level;
    }

    for (let i = 0; i < newNode.level; i++) {
      newNode.next[i] = update[i].next[i];
      update[i].next[i] = newNode;
    }
  }

  randomLevel() {
    let level = 1;
    while (Math.random() < 0.5 && level < this.maxLevel) {
      level++;
    }
    return level;
  }
}
class SkipList {
  ...

  search(value) {
    let current = this.head;
    for (let i = this.level - 1; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
    }
    current = current.next[0];
    if (current && current.value === value) {
      return true;
    }
    return false;
  }
}
const skipList = new SkipList();
skipList.insert(3);
skipList.insert(7);
skipList.insert(4);
console.log(skipList.search(7)); // Output: true
console.log(skipList.search(5)); // Output: false
