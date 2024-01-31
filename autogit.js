class Node {
  constructor(value = null, level = 0) {
    this.value = value;
    this.forward = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new Node();
    this.maxLevel = 0;
  }
}
find(value) {
  let currentNode = this.head;
  
  // Traverse the list starting from the highest level
  for (let level = this.maxLevel; level >= 0; level--) {
    while (
      currentNode.forward[level] !== undefined && 
      currentNode.forward[level].value < value
    ) {
      currentNode = currentNode.forward[level];
    }
  }
  
  currentNode = currentNode.forward[0];
  
  if (currentNode !== undefined && currentNode.value === value) {
    return currentNode;
  } else {
    return null;
  }
}
insert(value) {
  const level = this.randomLevel();
  
  const newNode = new Node(value, level);
  
  // Update the max level of the skip list
  this.maxLevel = Math.max(this.maxLevel, level);
  
  let currentNode = this.head;
  
  // Find the appropriate position to insert the new node
  for (let i = this.maxLevel; i >= 0; i--) {
    while (
      currentNode.forward[i] !== undefined && 
      currentNode.forward[i].value < value
    ) {
      currentNode = currentNode.forward[i];
    }
    
    if (i <= level) {
      newNode.forward[i] = currentNode.forward[i];
      currentNode.forward[i] = newNode;
    }
  }
}
remove(value) {
  let currentNode = this.head;
  let found = false;
  
  // Find the node to remove
  for (let i = this.maxLevel; i >= 0; i--) {
    while (
      currentNode.forward[i] !== undefined && 
      currentNode.forward[i].value < value
    ) {
      currentNode = currentNode.forward[i];
    }
    
    if (
      currentNode.forward[i] !== undefined && 
      currentNode.forward[i].value === value
    ) {
      currentNode.forward[i] = currentNode.forward[i].forward[i];
      found = true;
    }
  }
  
  if (found) {
    // Update the max level if necessary
    while (
      this.maxLevel > 0 &&
      this.head.forward[this.maxLevel] === undefined
    ) {
      this.maxLevel--;
    }
    return true;
  } else {
    return false;
  }
}
randomLevel() {
  const p = 0.5; // Probability of increasing the level
  let level = 0;
  
  while (Math.random() < p && level < this.maxLevel + 1) {
    level++;
  }
  
  return level;
}
