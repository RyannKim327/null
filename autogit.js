class SkipListNode {
  constructor(value = null, level = 0) {
    this.value = value;
    this.forward = Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new SkipListNode();
    this.level = 0;
  }

  // Generate a random level for a new node
  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.level + 1) {
      level++;
    }
    return level;
  }

  // Insert a value into the skip list
  insert(value) {
    const update = Array(this.level + 1);
    let node = this.head;
    for (let i = this.level; i >= 0; i--) {
      while (node.forward[i] && node.forward[i].value < value) {
        node = node.forward[i];
      }
      update[i] = node;
    }
    node = node.forward[0];

    if (node && node.value === value) {
      // Value already exists, no need to insert
      return;
    }

    const newNodeLevel = this.randomLevel();
    if (newNodeLevel > this.level) {
      for (let i = this.level + 1; i <= newNodeLevel; i++) {
        update[i] = this.head;
      }
      this.level = newNodeLevel;
    }

    const newNode = new SkipListNode(value, newNodeLevel);
    for (let i = 0; i <= newNodeLevel; i++) {
      newNode.forward[i] = update[i].forward[i];
      update[i].forward[i] = newNode;
    }
  }

  // Search for a value in the skip list
  search(value) {
    let node = this.head;
    for (let i = this.level; i >= 0; i--) {
      while (node.forward[i] && node.forward[i].value < value) {
        node = node.forward[i];
      }
    }
    node = node.forward[0];
    if (node && node.value === value) {
      return node;
    } else {
      return null;
    }
  }

  // Remove a value from the skip list
  remove(value) {
    const update = Array(this.level + 1);
    let node = this.head;
    for (let i = this.level; i >= 0; i--) {
      while (node.forward[i] && node.forward[i].value < value) {
        node = node.forward[i];
      }
      update[i] = node;
    }
    node = node.forward[0];

    if (!node || node.value !== value) {
      // Value doesn't exist, nothing to remove
      return;
    }

    for (let i = 0; i <= this.level; i++) {
      if (update[i].forward[i] !== node) {
        break;
      }
      update[i].forward[i] = node.forward[i];
    }

    while (this.level > 0 && !this.head.forward[this.level]) {
      this.level--;
    }
  }

  // Print the skip list (for debugging purposes)
  print() {
    let node = this.head;
    while (node.forward[0]) {
      console.log(node.forward[0].value);
      node = node.forward[0];
    }
  }
}
const list = new SkipList();
list.insert(3);
list.insert(1);
list.insert(5);
list.insert(4);
list.print(); // Output: 1, 3, 4, 5

console.log(list.search(5)); // Output: SkipListNode { value: 5, forward: [ null, null ] }

list.remove(3);
list.print(); // Output: 1, 4, 5
