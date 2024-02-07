// Define the SkipNode class
class SkipNode {
  constructor(value, level) {
    this.value = value;
    this.forward = new Array(level + 1);
  }
}

// Define the SkipList class
class SkipList {
  constructor() {
    this.head = new SkipNode(null, 0);
    this.maxLevel = 0;
  }

  // Generate a random level for a node
  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  // Insert a value into the skip list
  insert(value) {
    const update = new Array(this.maxLevel + 1);
    let currentNode = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (
        currentNode.forward[i] !== undefined &&
        currentNode.forward[i].value < value
      ) {
        currentNode = currentNode.forward[i];
      }
      update[i] = currentNode;
    }

    currentNode = currentNode.forward[0];

    if (currentNode === undefined || currentNode.value !== value) {
      const level = this.randomLevel();
      if (level > this.maxLevel) {
        for (let i = this.maxLevel + 1; i <= level; i++) {
          update[i] = this.head;
        }
        this.maxLevel = level;
      }

      const newNode = new SkipNode(value, level);

      for (let i = 0; i <= level; i++) {
        newNode.forward[i] = update[i].forward[i];
        update[i].forward[i] = newNode;
      }
    }
  }

  // Search for a value in the skip list
  search(value) {
    let currentNode = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (
        currentNode.forward[i] !== undefined &&
        currentNode.forward[i].value < value
      ) {
        currentNode = currentNode.forward[i];
      }
    }

    currentNode = currentNode.forward[0];

    if (currentNode !== undefined && currentNode.value === value) {
      return currentNode;
    } else {
      return null;
    }
  }

  // Remove a value from the skip list
  remove(value) {
    const update = new Array(this.maxLevel + 1);
    let currentNode = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (
        currentNode.forward[i] !== undefined &&
        currentNode.forward[i].value < value
      ) {
        currentNode = currentNode.forward[i];
      }
      update[i] = currentNode;
    }

    currentNode = currentNode.forward[0];

    if (currentNode !== undefined && currentNode.value === value) {
      for (let i = 0; i <= this.maxLevel; i++) {
        if (update[i].forward[i] !== currentNode) {
          break;
        }
        update[i].forward[i] = currentNode.forward[i];
      }

      while (this.maxLevel > 0 && this.head.forward[this.maxLevel] === undefined) {
        this.maxLevel--;
      }
    }
  }
}
const skipList = new SkipList();
skipList.insert(1);
skipList.insert(4);
skipList.insert(2);

console.log(skipList.search(4)); // Output: SkipNode { value: 4, forward: [ ... ] }
console.log(skipList.search(3)); // Output: null

skipList.remove(4);
console.log(skipList.search(4)); // Output: null
