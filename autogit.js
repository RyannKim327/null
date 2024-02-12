class Node {
  constructor(value, forward = []) {
    this.value = value;
    this.forward = forward;
  }
}
class SkipList {
  constructor() {
    this.head = new Node(-Infinity); // Smallest possible value as the head
    this.maxLevel = 0; // Maximum level of the skip list
  }

  // Generate a random level for a new node
  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  // Insert a value into the skip list
  insert(value) {
    const update = new Array(this.maxLevel + 1).fill(this.head); // Tracks the update nodes at each level

    let node = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (
        node.forward[i] !== undefined &&
        node.forward[i].value < value
      ) {
        node = node.forward[i];
      }
      update[i] = node;
    }

    node = node.forward[0];

    if (node === undefined || node.value !== value) {
      const level = this.randomLevel();
      const newNode = new Node(value, new Array(level + 1));

      for (let i = 0; i <= level; i++) {
        newNode.forward[i] = update[i].forward[i];
        update[i].forward[i] = newNode;
      }

      if (level > this.maxLevel) {
        this.maxLevel = level;
      }
    }
  }

  // Search for a value in the skip list
  search(value) {
    let node = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (
        node.forward[i] !== undefined &&
        node.forward[i].value < value
      ) {
        node = node.forward[i];
      }
    }

    node = node.forward[0];
    if (node !== undefined && node.value === value) {
      return true;
    }
    return false;
  }

  // Remove a value from the skip list
  remove(value) {
    const update = new Array(this.maxLevel + 1).fill(this.head);

    let node = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (
        node.forward[i] !== undefined &&
        node.forward[i].value < value
      ) {
        node = node.forward[i];
      }
      update[i] = node;
    }

    node = node.forward[0];

    if (node !== undefined && node.value === value) {
      for (let i = 0; i <= this.maxLevel; i++) {
        if (update[i].forward[i] !== node) {
          break;
        }
        update[i].forward[i] = node.forward[i];
      }

      while (this.maxLevel > 0 && this.head.forward[this.maxLevel] === undefined) {
        this.maxLevel--;
      }

      return true;
    }
    return false;
  }
}
// Create a new skip list
const skipList = new SkipList();

// Insert values into the skip list
skipList.insert(10);
skipList.insert(5);
skipList.insert(15);
skipList.insert(7);

// Search for a value in the skip list
console.log(skipList.search(10)); // Output: true

// Remove a value from the skip list
console.log(skipList.remove(5)); // Output: true
console.log(skipList.remove(20)); // Output: false
