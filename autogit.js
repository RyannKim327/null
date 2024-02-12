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
    this.length = 0;
  }
  
  // Generate a random level for a node
  generateRandomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }
  
  // Insert a value into the skip list
  insert(value) {
    const newNode = new Node(value, this.generateRandomLevel());
    
    // Increase the max level if necessary
    if (newNode.level > this.maxLevel) {
      this.maxLevel = newNode.level;
    }
    
    let currentNode = this.head;
    const update = new Array(this.maxLevel + 1);
    
    // Find the right position to insert the new node
    for (let i = this.maxLevel; i >= 0; i--) {
      while (currentNode.next[i] && currentNode.next[i].value < value) {
        currentNode = currentNode.next[i];
      }
      update[i] = currentNode;
    }
    
    // Update the next references
    for (let i = 0; i <= newNode.level; i++) {
      newNode.next[i] = update[i].next[i];
      update[i].next[i] = newNode;
    }
    
    this.length++;
  }
  
  // Search for a value in the skip list
  search(value) {
    let currentNode = this.head;
    
    // Start from the highest level and move downwards
    for (let i = this.maxLevel; i >= 0; i--) {
      while (currentNode.next[i] && currentNode.next[i].value < value) {
        currentNode = currentNode.next[i];
      }
    }
    
    currentNode = currentNode.next[0]; // Move to the bottom level
    
    if (currentNode && currentNode.value === value) {
      return currentNode;
    }
    
    return null;
  }
  
  // Remove a value from the skip list
  remove(value) {
    let currentNode = this.head;
    const update = new Array(this.maxLevel + 1);
    
    // Find the right position to remove the node
    for (let i = this.maxLevel; i >= 0; i--) {
      while (currentNode.next[i] && currentNode.next[i].value < value) {
        currentNode = currentNode.next[i];
      }
      update[i] = currentNode;
    }
    
    currentNode = currentNode.next[0]; // Move to the bottom level
    
    if (currentNode && currentNode.value === value) {
      // Update the next references
      for (let i = 0; i <= this.maxLevel; i++) {
        if (update[i].next[i] !== currentNode) {
          break;
        }
        update[i].next[i] = currentNode.next[i];
      }
      
      // Decrease the max level if necessary
      while (this.maxLevel > 0 && this.head.next[this.maxLevel] === null) {
        this.maxLevel--;
      }
      
      this.length--;
      return currentNode;
    }
    
    return null;
  }
  
  // Display the skip list in the console
  display() {
    let currentNode = this.head;
    while (currentNode.next[0]) {
      console.log(currentNode.next[0].value);
      currentNode = currentNode.next[0];
    }
  }
}
const skipList = new SkipList();
skipList.insert(3);
skipList.insert(1);
skipList.insert(9);
skipList.insert(5);
skipList.display(); // Output: 1 3 5 9

const node = skipList.search(5);
console.log(node.value); // Output: 5

skipList.remove(3);
skipList.display(); // Output: 1 5 9
