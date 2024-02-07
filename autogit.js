class SkipList {
  constructor() {
    this.head = new Node(-1, null); // Sentinel node at the beginning
    this.maxLevel = 0; // Current maximum level
  }
}
class Node {
  constructor(value, forward) {
    this.value = value; // Value of the node
    this.forward = forward || []; // Array of pointers to next nodes
  }
}
  insert(value) {
    const update = new Array(this.maxLevel + 1).fill(null);
    let current = this.head;

    // Find the right position to insert the new node
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.forward[i] && current.forward[i].value < value) {
        current = current.forward[i];
      }
      update[i] = current;
    }

    current = current.forward[0];

    // Generate a random level for the new node
    const level = this.randomLevel();

    // If the new level is greater than the current maximum level, update it
    if (level > this.maxLevel) {
      for (let i = this.maxLevel + 1; i <= level; i++) {
        update[i] = this.head;
      }
      this.maxLevel = level;
    }

    // Create the new node with the generated level
    const newNode = new Node(value, new Array(level + 1));

    // Update the pointers of the previous nodes
    for (let i = 0; i <= level; i++) {
      newNode.forward[i] = update[i].forward[i];
      update[i].forward[i] = newNode;
    }
  }
  delete(value) {
    const update = new Array(this.maxLevel + 1).fill(null);
    let current = this.head;

    // Find the right position to delete the node
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.forward[i] && current.forward[i].value < value) {
        current = current.forward[i];
      }
      update[i] = current;
    }

    current = current.forward[0];

    // Check if the node is found
    if (current && current.value === value) {
      for (let i = 0; i <= this.maxLevel; i++) {
        if (update[i].forward[i] !== current) {
          break;
        }
        update[i].forward[i] = current.forward[i];
      }

      // Update the maximum level if necessary
      while (this.maxLevel > 0 && this.head.forward[this.maxLevel] === null) {
          this.maxLevel--;
      }
    }
  }
  contains(value) {
    let current = this.head;

    // Search the skip list for the value
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.forward[i] && current.forward[i].value < value) {
        current = current.forward[i];
      }
    }

    current = current.forward[0];

    // Check if the value is found
    return current && current.value === value;
  }
  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }
const skipList = new SkipList();

skipList.insert(1);
skipList.insert(3);
skipList.insert(2);

console.log(skipList.contains(2)); // Output: true

skipList.delete(2);

console.log(skipList.contains(2)); // Output: false
