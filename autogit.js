class Node {
  constructor(value = null, level = 0) {
    this.value = value;
    this.nextNodes = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new Node();
    this.maxLevel = 0;
  }

  // Helper function to generate a random level
  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  // Helper function to insert a new level in the skip list
  insertLevel() {
    const newLevel = this.head.nextNodes.length;
    this.head.nextNodes[newLevel] = null;
  }

  // Helper function to update the max level of the skip list
  updateMaxLevel() {
    let level = this.head.nextNodes.length - 1;
    while (level > 0 && this.head.nextNodes[level] === null) {
      level--;
    }
    this.maxLevel = level;
  }

  // Helper function to find the previous nodes for insertion or deletion
  findPreviousNodes(value) {
    const previousNodes = new Array(this.head.nextNodes.length).fill(this.head);
    let currentNode = this.head;

    for (let level = this.maxLevel; level >= 0; level--) {
      while (
        currentNode.nextNodes[level] !== null &&
        currentNode.nextNodes[level].value < value
      ) {
        currentNode = currentNode.nextNodes[level];
      }
      previousNodes[level] = currentNode;
    }

    return previousNodes;
  }

  // Insert a new node with the given value into the skip list
  insert(value) {
    const previousNodes = this.findPreviousNodes(value);

    // If the value already exists, return without inserting
    if (
      previousNodes[0].nextNodes[0] !== null &&
      previousNodes[0].nextNodes[0].value === value
    ) {
      return;
    }

    const level = this.randomLevel();

    // Insert new nodes up to the random level
    for (let i = this.head.nextNodes.length; i <= level; i++) {
      this.insertLevel();
      previousNodes[i] = this.head;
    }

    const newNode = new Node(value, level);

    // Connect the new nodes to the previous nodes
    for (let i = 0; i <= level; i++) {
      newNode.nextNodes[i] = previousNodes[i].nextNodes[i];
      previousNodes[i].nextNodes[i] = newNode;
    }

    // Update the max level if necessary
    if (level > this.maxLevel) {
      this.maxLevel = level;
    }
  }

  // Remove the node with the given value from the skip list
  remove(value) {
    const previousNodes = this.findPreviousNodes(value);

    const currentNode = previousNodes[0].nextNodes[0];

    // If the node with the value doesn't exist, return without removing
    if (currentNode === null || currentNode.value !== value) {
      return;
    }

    // Remove the node from all levels
    for (let i = 0; i <= this.maxLevel; i++) {
      if (previousNodes[i].nextNodes[i] === currentNode) {
        previousNodes[i].nextNodes[i] = currentNode.nextNodes[i];
      }
    }

    // Update the max level if necessary
    this.updateMaxLevel();
  }

  // Search for a node with the given value in the skip list
  search(value) {
    const previousNodes = this.findPreviousNodes(value);
    const currentNode = previousNodes[0].nextNodes[0];

    // If the node with the value exists, return it; otherwise, return null
    if (currentNode !== null && currentNode.value === value) {
      return currentNode;
    } else {
      return null;
    }
  }

  // Print the skip list in a readable format
  print() {
    for (let level = this.maxLevel; level >= 0; level--) {
      let currentNode = this.head.nextNodes[level];
      let output = `Level ${level}: HEAD -> `;
      while (currentNode !== null) {
        output += `${currentNode.value} -> `;
        currentNode = currentNode.nextNodes[level];
      }
      output += "null";
      console.log(output);
    }
  }
}
const skipList = new SkipList();
skipList.insert(3);
skipList.insert(6);
skipList.insert(2);
skipList.insert(9);
skipList.insert(1);
skipList.insert(7);
skipList.print();

console.log(skipList.search(3)); // Node {value: 3, nextNodes: Array(2)}
console.log(skipList.search(5)); // null

skipList.remove(6);
skipList.print();
