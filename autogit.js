class SkipListNode {
  constructor(value, level) {
    this.value = value;
    this.level = level;
    this.next = new Array(level + 1); // Array of next pointers
  }
}
class SkipList {
  constructor() {
    this.head = new SkipListNode(-Infinity, 0); // Dummy head node
    this.tail = new SkipListNode(Infinity, 0); // Dummy tail node
    this.level = 0; // Current maximum level of the skip list
  }
}
randomLevel() {
  let level = 0;
  while (Math.random() < 0.5 && level < this.level + 1) {
    level++;
  }
  return level;
}
insert(value) {
  const newNode = new SkipListNode(value, this.randomLevel());
  let currentNode = this.head;

  // Find the appropriate positions to insert the new node
  for (let i = this.level; i >= 0; i--) {
    while (currentNode.next[i] && currentNode.next[i].value < value) {
      currentNode = currentNode.next[i];
    }
    if (i <= newNode.level) {
      newNode.next[i] = currentNode.next[i];
      currentNode.next[i] = newNode;
    }
  }

  // Update the maximum level of the skip list
  if (newNode.level > this.level) {
    this.level = newNode.level;
  }
}
search(value) {
  let currentNode = this.head;

  // Traverse the skip list to find the node
  for (let i = this.level; i >= 0; i--) {
    while (currentNode.next[i] && currentNode.next[i].value < value) {
      currentNode = currentNode.next[i];
    }
  }

  // Check if the node's value matches the given value
  if (currentNode.next[0] && currentNode.next[0].value === value) {
    return currentNode.next[0];
  } else {
    return null;
  }
}
remove(value) {
  let currentNode = this.head;

  // Find the node to be removed
  for (let i = this.level; i >= 0; i--) {
    while (currentNode.next[i] && currentNode.next[i].value < value) {
      currentNode = currentNode.next[i];
    }
    if (currentNode.next[i] && currentNode.next[i].value === value) {
      currentNode.next[i] = currentNode.next[i].next[i];
    }
  }
}
