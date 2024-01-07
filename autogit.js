class SkipListNode {
  constructor(value, level) {
    this.value = value;
    this.forward = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.MAX_LEVEL = 16; // adjust this value according to your needs
    this.level = 0;
    this.header = new SkipListNode(null, this.MAX_LEVEL);
  }

  insert(value) {
    const update = new Array(this.MAX_LEVEL + 1);
    let node = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (node.forward[i] !== undefined && node.forward[i].value < value) {
        node = node.forward[i];
      }
      update[i] = node;
    }

    // Generate a random level for the new node
    const randomLevel = this.randomLevel();

    // If randomLevel is greater than current level, update the update array
    if (randomLevel > this.level) {
      for (let i = this.level + 1; i <= randomLevel; i++) {
        update[i] = this.header;
      }
      this.level = randomLevel;
    }

    const newNode = new SkipListNode(value, randomLevel);

    // Insert the new node at each level in the update array
    for (let i = 0; i <= randomLevel; i++) {
      newNode.forward[i] = update[i].forward[i];
      update[i].forward[i] = newNode;
    }
  }

  search(value) {
    let node = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (node.forward[i] !== undefined && node.forward[i].value < value) {
        node = node.forward[i];
      }
    }

    node = node.forward[0];

    if (node !== undefined && node.value === value) {
      return node;
    }

    return null;
  }

  delete(value) {
    const update = new Array(this.MAX_LEVEL + 1);
    let node = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (node.forward[i] !== undefined && node.forward[i].value < value) {
        node = node.forward[i];
      }
      update[i] = node;
    }

    node = node.forward[0];

    if (node !== undefined && node.value === value) {
      for (let i = 0; i <= this.level; i++) {
        if (update[i].forward[i] !== node) {
          break;
        }
        update[i].forward[i] = node.forward[i];
      }

      // Remove any extra levels
      while (this.level > 0 && this.header.forward[this.level] === undefined) {
        this.level--;
      }
    }
  }

  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.MAX_LEVEL) {
      level++;
    }
    return level;
  }
}
const skipList = new SkipList();

skipList.insert(5);
skipList.insert(10);
skipList.insert(2);

console.log(skipList.search(10)); // Output: SkipListNode { value: 10, forward: [ 2, 10 ] }

skipList.delete(10);

console.log(skipList.search(10)); // Output: null
