class Node {
  constructor(value = null, level = 0) {
    this.value = value;
    this.next = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new Node();
    this.maxLevel = 0;
  }
  
  // Get a random level for a node
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
    let currentNode = this.head;
    
    // Search for the position to insert the new node
    for (let level = this.maxLevel; level >= 0; level--) {
      while (
        currentNode.next[level] &&
        currentNode.next[level].value < value
      ) {
        currentNode = currentNode.next[level];
      }
      // Store the rightmost node at each level before inserting
      update[level] = currentNode;
    }
    
    const level = this.randomLevel();
    const newNode = new Node(value, level);
    
    // Update the maximum level of the skip list
    if (level > this.maxLevel) {
      this.maxLevel = level;
    }
    
    // Insert the new node into the skip list
    for (let i = 0; i <= level; i++) {
      newNode.next[i] = update[i].next[i];
      update[i].next[i] = newNode;
    }
  }
  
  // Search for a value in the skip list
  search(value) {
    let currentNode = this.head;
    
    // Start from the top level and move downwards
    for (let level = this.maxLevel; level >= 0; level--) {
      while (
        currentNode.next[level] &&
        currentNode.next[level].value <= value
      ) {
        if (currentNode.next[level].value === value) {
          return true; // Found the value
        }
        currentNode = currentNode.next[level];
      }
    }
    
    return false; // Value not found
  }
  
  // Remove a value from the skip list
  remove(value) {
    const update = new Array(this.maxLevel + 1);
    let currentNode = this.head;
    
    // Search for the node to remove
    for (let level = this.maxLevel; level >= 0; level--) {
      while (
        currentNode.next[level] &&
        currentNode.next[level].value < value
      ) {
        currentNode = currentNode.next[level];
      }
      // Store the rightmost node at each level before removing
      update[level] = currentNode;
    }
    
    currentNode = currentNode.next[0];
    
    if (currentNode.value === value) {
      // Remove the node from the skip list
      for (let i = 0; i <= this.maxLevel; i++) {
        if (update[i].next[i] !== currentNode) {
          break;
        }
        update[i].next[i] = currentNode.next[i];
      }
      
      // Update the maximum level of the skip list if needed
      while (
        this.maxLevel > 0 &&
        this.head.next[this.maxLevel] === undefined
      ) {
        this.maxLevel--;
      }
      
      return true; // Node removed successfully
    }
    
    return false; // Node not found
  }
}
// Create a skip list instance
const skipList = new SkipList();

// Insert some values
skipList.insert(3);
skipList.insert(6);
skipList.insert(2);
skipList.insert(7);
skipList.insert(4);

// Search for a value
console.log(skipList.search(6)); // Output: true
console.log(skipList.search(8)); // Output: false

// Remove a value
console.log(skipList.remove(6)); // Output: true
console.log(skipList.search(6)); // Output: false
