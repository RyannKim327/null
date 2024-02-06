class SkipNode {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new SkipNode(-Infinity, 0); // Sentinel node with minimum value
    this.maxLevel = 0;
  }

  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  insert(value) {
    const newNodeLevel = this.randomLevel();
    const newNode = new SkipNode(value, newNodeLevel);

    // Update the maxLevel if necessary
    this.maxLevel = Math.max(this.maxLevel, newNodeLevel);

    let current = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      if (i <= newNodeLevel) {
        newNode.next[i] = current.next[i];
        current.next[i] = newNode;
      }
    }
  }

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

  search(value) {
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
skipList.insert(5);
skipList.insert(10);
skipList.insert(2);

console.log(skipList.search(10)); // true
console.log(skipList.search(7)); // false

skipList.delete(5);
console.log(skipList.search(2)); // true
console.log(skipList.search(5)); // false
