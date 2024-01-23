// Node class representing a single node in the skip list
class SkipNode {
  constructor(value, level) {
    this.value = value;          // Value stored in the node
    this.next = new Array(level); // Array to store next pointers
  }
}

// Skip List class representing the skip list data structure
class SkipList {
  constructor() {
    this.head = new SkipNode(-Infinity, 1);  // Head node with minimum value
    this.maxLevel = 1;                       // Maximum level of the skip list
  }

  // Function to generate a random level for a new node
  generateRandomLevel() {
    let level = 1;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  // Function to insert a value into the skip list
  insert(value) {
    const newNodeLevel = this.generateRandomLevel();

    // Increase the level of the head if necessary
    if (newNodeLevel > this.maxLevel) {
      this.maxLevel = newNodeLevel;
      this.head.next[newNodeLevel - 1] = null;
    }

    const newNode = new SkipNode(value, newNodeLevel);
    let current = this.head;

    // Update the pointers at each level
    for (let level = this.maxLevel; level >= 1; level--) {
      while (current.next[level - 1] && current.next[level - 1].value < value) {
        current = current.next[level - 1];
      }
      if (level <= newNodeLevel) {
        newNode.next[level - 1] = current.next[level - 1];
        current.next[level - 1] = newNode;
      }
    }
  }

  // Function to search for a value in the skip list
  search(value) {
    let current = this.head;

    // Traverse the skip list from highest level to lowest
    for (let level = this.maxLevel; level >= 1; level--) {
      while (current.next[level - 1] && current.next[level - 1].value < value) {
        current = current.next[level - 1];
      }
    }

    // Check if the next node's value matches the search value
    if (current.next[0] && current.next[0].value === value) {
      return current.next[0];
    }

    return null; // Value not found
  }

  // Function to remove a value from the skip list
  remove(value) {
    let current = this.head;

    // Traverse the skip list from highest level to lowest
    for (let level = this.maxLevel; level >= 1; level--) {
      while (current.next[level - 1] && current.next[level - 1].value < value) {
        current = current.next[level - 1];
      }
      if (current.next[level - 1] && current.next[level - 1].value === value) {
        current.next[level - 1] = current.next[level - 1].next[level - 1];
      }
    }
  }

  // Function to print the skip list
  print() {
    let current = this.head.next[0];
    while (current) {
      console.log(current.value);
      current = current.next[0];
    }
  }
}
const skipList = new SkipList();

skipList.insert(3);
skipList.insert(1);
skipList.insert(2);
skipList.insert(4);
skipList.print(); // Output: 1 2 3 4

const searchResult = skipList.search(2);
console.log("Search Result:", searchResult); // Output: Search Result: SkipNode { value: 2, next: [ SkipNode ] }

skipList.remove(2);
skipList.print(); // Output: 1 3 4
