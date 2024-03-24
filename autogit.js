// Node class for skip list
class Node {
  constructor(value, level) {
    this.value = value;
    this.forward = new Array(level + 1).fill(null);
  }
}

// SkipList class
class SkipList {
  constructor(maxLevel, probability) {
    this.head = new Node(-1, maxLevel);
    this.maxLevel = maxLevel;
    this.probability = probability;
  }

  randomLevel() {
    let level = 0;
    while (Math.random() < this.probability && level < this.maxLevel) {
      level++;
    }
    return level;
  }

  insert(value) {
    const update = new Array(this.maxLevel + 1).fill(null);
    let current = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.forward[i] && current.forward[i].value < value) {
        current = current.forward[i];
      }
      update[i] = current;
    }

    current = current.forward[0];

    const level = this.randomLevel();

    const newNode = new Node(value, level);

    for (let i = 0; i <= level; i++) {
      newNode.forward[i] = update[i].forward[i];
      update[i].forward[i] = newNode;
    }
  }

  search(value) {
    let current = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.forward[i] && current.forward[i].value < value) {
        current = current.forward[i];
      }
    }

    current = current.forward[0];

    if (current && current.value === value) {
      return true;
    }

    return false;
  }
}

// Usage example
const skipList = new SkipList(3, 0.5);
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);

console.log(skipList.search(3)); // Output: true
console.log(skipList.search(4)); // Output: false
