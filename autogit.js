class SkipListNode {
  constructor(value, level) {
    this.value = value;
    this.forward = new Array(level + 1).fill(null);
  }
}

class SkipList {
  constructor(maxLevel, probability) {
    this.maxLevel = maxLevel;
    this.probability = probability;
    this.header = new SkipListNode(null, maxLevel);
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
      while (current.forward[i] != null && current.forward[i].value < value) {
        current = current.forward[i];
      }
      update[i] = current;
    }

    current = current.forward[0];

    if (current == null || current.value != value) {
      const newLevel = this.randomLevel();
      const newNode = new SkipListNode(value, newLevel);

      if (newLevel > this.level) {
        for (let i = this.level + 1; i <= newLevel; i++) {
          update[i] = this.header;
        }
        this.level = newLevel;
      }

      for (let i = 0; i <= newLevel; i++) {
        newNode.forward[i] = update[i].forward[i];
        update[i].forward[i] = newNode;
      }
    }
  }

  search(value) {
    let current = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] != null && current.forward[i].value < value) {
        current = current.forward[i];
      }
    }

    current = current.forward[0];

    if (current != null && current.value === value) {
      return current;
    }

    return null;
  }

  delete(value) {
    const update = new Array(this.maxLevel + 1).fill(null);
    let current = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] != null && current.forward[i].value < value) {
        current = current.forward[i];
      }
      update[i] = current;
    }

    current = current.forward[0];

    if (current != null && current.value === value) {
      for (let i = 0; i <= this.level; i++) {
        if (update[i].forward[i] != current)
          break;
        update[i].forward[i] = current.forward[i];
      }

      while (this.level > 0 && this.header.forward[this.level] == null) {
        this.level--;
      }
    }
  }
}

// Example usage:
const skipList = new SkipList(5, 0.5);
skipList.insert(3);
skipList.insert(6);
skipList.insert(2);
skipList.insert(9);

console.log(skipList.search(6)); // Outputs: SkipListNode { value: 6, forward: [ null, SkipListNode ] }

skipList.delete(6);
console.log(skipList.search(6)); // Outputs: null
