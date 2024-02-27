class Node {
  constructor(value, level) {
    this.value = value;
    this.forward = new Array(level + 1).fill(null);
  }
}

class SkipList {
  constructor(maxLevel, probability) {
    this.maxLevel = maxLevel;
    this.probability = probability;
    this.header = new Node(-Infinity, maxLevel);
    this.level = 0;
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
    let current = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] !== null && current.forward[i].value < value) {
        current = current.forward[i];
      }
      update[i] = current;
    }

    current = current.forward[0];

    const newLevel = this.randomLevel();
    if (newLevel > this.level) {
      for (let i = this.level + 1; i <= newLevel; i++) {
        update[i] = this.header;
      }
      this.level = newLevel;
    }

    const newNode = new Node(value, newLevel);
    for (let i = 0; i <= newLevel; i++) {
      newNode.forward[i] = update[i].forward[i];
      update[i].forward[i] = newNode;
    }
  }

  search(value) {
    let current = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] !== null && current.forward[i].value < value) {
        current = current.forward[i];
      }
    }

    current = current.forward[0];

    if (current !== null && current.value === value) {
      return current;
    } else {
      return null;
    }
  }

  delete(value) {
    const update = new Array(this.maxLevel + 1).fill(null);
    let current = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] !== null && current.forward[i].value < value) {
        current = current.forward[i];
      }
      update[i] = current;
    }

    current = current.forward[0];

    if (current !== null && current.value === value) {
      for (let i = 0; i <= this.level; i++) {
        if (update[i].forward[i] !== current) {
          break;
        }
        update[i].forward[i] = current.forward[i];
      }

      while (this.level > 0 && this.header.forward[this.level] === null) {
        this.level--;
      }
    }
  }
}

// Usage example
const skipList = new SkipList(4, 0.5);
skipList.insert(1);
skipList.insert(3);
skipList.insert(5);
console.log(skipList.search(3)); // Node { value: 3, forward: [ [Node], null, null, null, null ] }
skipList.delete(3);
console.log(skipList.search(3)); // null
