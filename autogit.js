class Node {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level + 1);
    this.previous = null;
  }
}

class SkipList {
  constructor() {
    this.head = new Node(-Infinity, 0);
    this.maxLevel = 0;
    this.length = 0;
    this.probability = 0.5; // adjust the probability based on the desired performance characteristics
  }

  randomLevel() {
    let level = 0;
    while (Math.random() < this.probability && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  insert(value) {
    const newNode = new Node(value, this.randomLevel());

    if (newNode.level > this.maxLevel) {
      this.maxLevel = newNode.level;
    }

    let currentNode = this.head;
    const update = new Array(this.maxLevel + 1);

    for (let i = this.maxLevel; i >= 0; i--) {
      while (
        currentNode.next[i] !== undefined &&
        currentNode.next[i].value < value
      ) {
        currentNode = currentNode.next[i];
      }
      update[i] = currentNode;
    }

    currentNode = currentNode.next[0];

    if (currentNode !== undefined && currentNode.value === value) {
      // Value already exists in the skip list
      return;
    }

    for (let i = 0; i <= newNode.level; i++) {
      newNode.next[i] = update[i].next[i];
      update[i].next[i] = newNode;
    }

    if (newNode.next[0] !== undefined) {
      newNode.next[0].previous = newNode;
    }

    newNode.previous = update[0];

    this.length++;
  }

  remove(value) {
    let currentNode = this.head;
    const update = new Array(this.maxLevel + 1);

    for (let i = this.maxLevel; i >= 0; i--) {
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
      // Value does not exist in the skip list
      return;
    }

    for (let i = 0; i <= this.maxLevel; i++) {
      if (update[i].next[i] === currentNode) {
        update[i].next[i] = currentNode.next[i];
      }
    }

    if (currentNode.next[0] !== undefined) {
      currentNode.next[0].previous = currentNode.previous;
    }

    while (this.maxLevel > 0 && this.head.next[this.maxLevel] === undefined) {
      this.maxLevel--;
    }

    this.length--;
  }

  search(value) {
    let currentNode = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (
        currentNode.next[i] !== undefined &&
        currentNode.next[i].value <= value
      ) {
        if (currentNode.next[i].value === value) {
          return currentNode.next[i];
        }
        currentNode = currentNode.next[i];
      }
    }

    return null;
  }
}
const skipList = new SkipList();

skipList.insert(10);
skipList.insert(5);
skipList.insert(20);

console.log(skipList.search(5)); // Node { value: 5, next: [Node], previous: null }
console.log(skipList.search(15)); // null

skipList.remove(5);

console.log(skipList.search(5)); // null
