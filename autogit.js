class Node {
  constructor(value, level) {
    this.value = value;
    this.forward = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.level = 0;
    this.head = new Node(null, 0);
  }

  // Helper function to generate random level for a node
  generateRandomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.level + 1) {
      level++;
    }
    return level;
  }

  // Insert a value into the Skip List
  insert(value) {
    const update = new Array(this.level + 1);
    let current = this.head;

    // Find the appropriate position to insert the new node
    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] && current.forward[i].value < value) {
        current = current.forward[i];
      }
      update[i] = current;
    }

    current = current.forward[0];

    if (!current || current.value !== value) {
      const newNodeLevel = this.generateRandomLevel();
      const newNode = new Node(value, newNodeLevel);

      // If the new node has a higher level than the current skip list level, update the update array and the skip list level
      if (newNodeLevel > this.level) {
        for (let i = this.level + 1; i <= newNodeLevel; i++) {
          update[i] = this.head;
        }
        this.level = newNodeLevel;
      }

      // Insert the new node into the skip list
      for (let i = 0; i <= newNodeLevel; i++) {
        newNode.forward[i] = update[i].forward[i];
        update[i].forward[i] = newNode;
      }
    }
  }

  // Search for a value in the Skip List
  search(value) {
    let current = this.head;
    for (let i = this.level; i >= 0; i--) {
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

  // Remove a value from the Skip List
  remove(value) {
    const update = new Array(this.level + 1);
    let current = this.head;

    // Find the node to be removed
    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] && current.forward[i].value < value) {
        current = current.forward[i];
      }
      update[i] = current;
    }

    current = current.forward[0];

    if (current && current.value === value) {
      // Remove the node from the skip list
      for (let i = 0; i <= this.level; i++) {
        if (update[i].forward[i] === current) {
          update[i].forward[i] = current.forward[i];
        }
      }

      // Update the skip list level if necessary
      while (this.level > 0 && this.head.forward[this.level] === null) {
        this.level--;
      }

      return true;
    }

    return false;
  }

  // Print the Skip List
  print() {
    let current = this.head;
    while (current.forward[0]) {
      console.log(current.forward[0].value);
      current = current.forward[0];
    }
  }
}
const skipList = new SkipList();
skipList.insert(3);
skipList.insert(7);
skipList.insert(2);
skipList.insert(1);

console.log(skipList.search(3)); // Output: true
console.log(skipList.search(5)); // Output: false

skipList.remove(2);
skipList.print(); // Output: 1, 3, 7
