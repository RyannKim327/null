class SkipNode {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new SkipNode(-Infinity, 0);
    this.maxLevel = 0;
    this.size = 0;
  }
}
class SkipList {
  // ...

  search(value) {
    let currentNode = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (
        currentNode.next[i] !== undefined &&
        currentNode.next[i].value < value
      ) {
        currentNode = currentNode.next[i];
      }
    }

    currentNode = currentNode.next[0];

    if (currentNode !== undefined && currentNode.value === value) {
      return currentNode;
    }

    return null;
  }

  insert(value) {
    const update = new Array(this.maxLevel + 1);
    let currentNode = this.head;

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
      return; // value already exists
    }

    const level = randomLevel(); // determine the level for the new node

    if (level > this.maxLevel) {
      for (let i = this.maxLevel + 1; i <= level; i++) {
        update[i] = this.head;
      }
      this.maxLevel = level;
    }

    const newNode = new SkipNode(value, level);

    for (let i = 0; i <= level; i++) {
      newNode.next[i] = update[i].next[i];
      update[i].next[i] = newNode;
    }

    this.size++;
  }
}
function randomLevel() {
  let level = 0;
  while (Math.random() < 0.5 && level < maxLevel) {
    level++;
  }
  return level;
}
