class Node {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level + 1).fill(null);
  }
}
class SkipList {
  constructor(maxLevel) {
    this.head = new Node(-Infinity, maxLevel);
    this.level = 0;
    this.maxLevel = maxLevel;
  }
}
SkipList.prototype.insert = function(value) {
  const update = new Array(this.maxLevel + 1).fill(null);
  let node = this.head;
  
  for (let i = this.level; i >= 0; i--) {
    while (node.next[i] && node.next[i].value < value) {
      node = node.next[i];
    }
    update[i] = node; // Track the highest node at each level
  }
  
  // Generate a random level for the new node
  const newNodeLevel = this.randomLevel();
  
  if (newNodeLevel > this.level) {
    // If the new node level surpasses the current level, update the head
    for (let i = this.level + 1; i <= newNodeLevel; i++) {
      update[i] = this.head;
    }
    this.level = newNodeLevel;
  }
  
  // Create new node with the given value
  const newNode = new Node(value, newNodeLevel);
  
  // Insert the new node at each level
  for (let i = 0; i <= newNodeLevel; i++) {
    newNode.next[i] = update[i].next[i];
    update[i].next[i] = newNode;
  }
};
SkipList.prototype.search = function(target) {
  let node = this.head;
  
  for (let i = this.level; i >= 0; i--) {
    while (node.next[i] && node.next[i].value < target) {
      node = node.next[i];
    }
  }
  
  // Check if the next node has the target value
  if (node.next[0] && node.next[0].value === target) {
    return true;
  }
  
  return false;
};
SkipList.prototype.delete = function(value) {
  const update = new Array(this.maxLevel + 1).fill(null);
  let node = this.head;
  
  for (let i = this.level; i >= 0; i--) {
    while (node.next[i] && node.next[i].value < value) {
      node = node.next[i];
    }
    update[i] = node; // Track the highest node at each level
  }
  
  if (node.next[0] && node.next[0].value === value) {
    const deleteNode = node.next[0];
    
    for (let i = 0; i <= this.level; i++) {
      if (update[i].next[i] === deleteNode) {
        update[i].next[i] = deleteNode.next[i];
      }
    }
    
    // Update the level of the skip list if necessary
    while (this.level > 0 && this.head.next[this.level] === null) {
      this.level--;
    }
    
    return true;
  }
  
  return false;
};
SkipList.prototype.randomLevel = function() {
  let level = 0;
  
  // Generate a random integer between 0 and 1
  while (Math.random() < 0.5 && level < this.maxLevel) {
    level++;
  }
  
  return level;
};
