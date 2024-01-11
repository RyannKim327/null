class Node {
  constructor(value = null) {
    this.value = value;
    this.next = [];
  }
}
class SkipList {
  constructor() {
    this.head = new Node(); // The head node doesn't store any value
    this.maxLevel = 0; // Current maximum level of the skip list
  }

  // Insert a value into the skip list
  insert(value) {
    // Determine the level of the new node
    const level = this.randomLevel();

    // Create a new node
    const newNode = new Node(value);
    newNode.next = new Array(level + 1).fill(null);

    // Track the current node while traversing the skip list
    let currentNode = this.head;

    // Track the highest level where we have reached a node
    let highestAffectedLevel = -1;

    // Traverse the skip list from the top level to the lowest
    for (let i = this.maxLevel; i >= 0; i--) {
      // Move forward until we find the right position
      while (
        currentNode.next[i] !== null &&
        currentNode.next[i].value < value
      ) {
        currentNode = currentNode.next[i];
      }

      // If the current level is within the level of the new node
      if (i <= level) {
        // Insert the new node into the skip list
        newNode.next[i] = currentNode.next[i];
        currentNode.next[i] = newNode;

        // Track the highest level affected by the insertion
        if (i > highestAffectedLevel) {
          highestAffectedLevel = i;
        }
      }
    }

    // Update the maximum level if necessary
    if (highestAffectedLevel > this.maxLevel) {
      this.maxLevel = highestAffectedLevel;
    }
  }

  // Remove a value from the skip list
  remove(value) {
    // Track the current node while traversing the skip list
    let currentNode = this.head;

    // Flag to indicate if we found the value
    let found = false;

    // Traverse the skip list from the top level to the lowest
    for (let i = this.maxLevel; i >= 0; i--) {
      // Move forward until we find the right position
      while (
        currentNode.next[i] !== null &&
        currentNode.next[i].value < value
      ) {
        currentNode = currentNode.next[i];
      }

      // If the current node contains the desired value
      if (
        currentNode.next[i] !== null &&
        currentNode.next[i].value === value
      ) {
        // Delete the node from the skip list
        currentNode.next[i] = currentNode.next[i].next[i];

        // Update the maximum level if necessary
        if (this.head.next[i] === null) {
          this.maxLevel--;
        }

        // Mark as found
        found = true;
      }
    }

    return found;
  }

  // Search for a value in the skip list
  search(value) {
    // Track the current node while traversing the skip list
    let currentNode = this.head;

    // Traverse the skip list from the top level to the lowest
    for (let i = this.maxLevel; i >= 0; i--) {
      // Move forward until we find the right position
      while (
        currentNode.next[i] !== null &&
        currentNode.next[i].value < value
      ) {
        currentNode = currentNode.next[i];
      }

      // If we found the value, return true
      if (
        currentNode.next[i] !== null &&
        currentNode.next[i].value === value
      ) {
        return true;
      }
    }

    // Value not found
    return false;
  }

  // Generate a random level for a new node
  randomLevel() {
    let level = 0;

    // Increase the level with a 50% probability
    while (Math.random() < 0.5) {
      level++;
    }

    return level;
  }
}
const skipList = new SkipList();

skipList.insert(10);
skipList.insert(5);
skipList.insert(7);
skipList.insert(20);

console.log(skipList.search(7)); // Output: true
console.log(skipList.search(15)); // Output: false

skipList.remove(5);
console.log(skipList.search(5)); // Output: false
