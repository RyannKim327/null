class Node {
  constructor(value = null, level = 0) {
    this.value = value;
    this.forward = Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new Node();
    this.maxLevel = 0;
  }
}
/*
   Insert a new node into the skip list
   by maintaining the sorted order
*/
insert(value) {
  const update = new Array(this.maxLevel + 1);
  let currentNode = this.head;

  // Find the appropriate position for the new node
  for (let i = this.maxLevel; i >= 0; i--) {
    while (currentNode.forward[i] && currentNode.forward[i].value < value) {
      currentNode = currentNode.forward[i];
    }
    update[i] = currentNode;
  }

  currentNode = currentNode.forward[0];

  // Generate a random level for the new node
  const level = this.randomLevel();

  // Create a new node with the given value and level
  const newNode = new Node(value, level);

  // Update the forward pointers in the skip list
  for (let i = 0; i <= level; i++) {
    newNode.forward[i] = update[i].forward[i];
    update[i].forward[i] = newNode;
  }

  if (this.maxLevel < level) {
    this.maxLevel = level;
  }
}
/*
   Remove a node with the given value from the skip list
*/
remove(value) {
  const update = new Array(this.maxLevel + 1);
  let currentNode = this.head;

  // Find the node to be deleted
  for (let i = this.maxLevel; i >= 0; i--) {
    while (currentNode.forward[i] && currentNode.forward[i].value < value) {
      currentNode = currentNode.forward[i];
    }
    update[i] = currentNode;
  }

  currentNode = currentNode.forward[0];

  if (currentNode && currentNode.value === value) {
    // Update the forward pointers in the skip list
    for (let i = 0; i <= this.maxLevel; i++) {
      if (update[i].forward[i] !== currentNode) {
        break;
      }
      update[i].forward[i] = currentNode.forward[i];
    }

    // Update the maximum level of the skip list
    while (this.maxLevel > 0 && !this.head.forward[this.maxLevel]) {
      this.maxLevel--;
    }
  }
}
/*
   Search for a node with the given value
   and return true if found, false otherwise
*/
search(value) {
  let currentNode = this.head;

  // Traverse the skip list from highest level to lowest
  for (let i = this.maxLevel; i >= 0; i--) {
    while (currentNode.forward[i] && currentNode.forward[i].value < value) {
      currentNode = currentNode.forward[i];
    }
  }

  currentNode = currentNode.forward[0];

  return currentNode && currentNode.value === value;
}
/*
   Generate a random level for a new node
   based on the probability factor
*/
randomLevel() {
  const p = 0.5;
  let level = 0;

  while (Math.random() < p && level < this.maxLevel + 1) {
    level++;
  }

  return level;
}
const skipList = new SkipList();
skipList.insert(3);
skipList.insert(1);
skipList.insert(5);

console.log(skipList.search(2));  // returns false
console.log(skipList.search(3));  // returns true

skipList.remove(1);

console.log(skipList.search(1));  // returns false
