class Node {
  constructor(value, level) {
    this.value = value;
    this.level = level;
    this.forward = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new Node(-Infinity, 0);
    this.maxLevel = 0;
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
    const update = new Array(this.maxLevel + 1);
    let node = this.head;

    // Find the right position to insert the new node
    for (let i = this.maxLevel; i >= 0; i--) {
      while (node.forward[i] && node.forward[i].value < value) {
        node = node.forward[i];
      }
      update[i] = node;
    }

    node = node.forward[0];

    // If the value already exists, update its level
    if (node && node.value === value) {
      node.level = this.randomLevel();
    } else {
      // Generate a new level for the new node
      const level = this.randomLevel();

      // If the new level is higher than the current max level, update the update array
      if (level > this.maxLevel) {
        for (let i = this.maxLevel + 1; i <= level; i++) {
          update[i] = this.head;
        }
        this.maxLevel = level;
      }

      // Create the new node and update the forward references
      const newNode = new Node(value, level);
      for (let i = 0; i <= level; i++) {
        newNode.forward[i] = update[i].forward[i];
        update[i].forward[i] = newNode;
      }
    }
  }

  // Search for a value in the skip list
  search(value) {
    let node = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (node.forward[i] && node.forward[i].value < value) {
        node = node.forward[i];
      }
    }

    node = node.forward[0];

    if (node && node.value === value) {
      return node;
    }

    return null;
  }

  // Remove a value from the skip list
  remove(value) {
    const update = new Array(this.maxLevel + 1);
    let node = this.head;

    // Find the node to remove
    for (let i = this.maxLevel; i >= 0; i--) {
      while (node.forward[i] && node.forward[i].value < value) {
        node = node.forward[i];
      }
      update[i] = node;
    }

    node = node.forward[0];

    // If the value is found, remove it and update the forward references
    if (node && node.value === value) {
      for (let i = 0; i <= this.maxLevel; i++) {
        if (update[i].forward[i] !== node) {
          break;
        }
        update[i].forward[i] = node.forward[i];
      }

      // Update the max level if necessary
      while (this.maxLevel > 0 && this.head.forward[this.maxLevel] === null) {
        this.maxLevel--;
      }
    }
  }

  // Print the skip list for visualization
  print() {
    for (let i = this.maxLevel; i >= 0; i--) {
      let output = `Level ${i}: `;
      let node = this.head.forward[i];
      while (node) {
        output += `${node.value} `;
        node = node.forward[i];
      }
      console.log(output);
    }
  }
}
const skipList = new SkipList();

// Insert elements
skipList.insert(5);
skipList.insert(1);
skipList.insert(10);
skipList.insert(3);
skipList.insert(7);

// Search for an element
console.log(skipList.search(3)); // Node { value: 3, level: 1, forward: [ Node ] }

// Remove an element
skipList.remove(3);
console.log(skipList.search(3)); // null

// Print the skip list
skipList.print();
