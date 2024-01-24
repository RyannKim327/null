class Node {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new Node(-Infinity, 0);
    this.maxLevel = 0;
  }

  // other methods...
}
search(value) {
  let current = this.head;

  // Traverse the skip list starting from the highest level
  for (let level = this.maxLevel; level >= 0; level--) {
    while (
      current.next[level] &&
      current.next[level].value < value
    ) {
      current = current.next[level];
    }
  }

  // Move to the next level if the current value is less than the search value
  current = current.next[0];

  if (current && current.value === value) {
    return current;
  } else {
    return null;
  }
}
insert(value) {
  const update = new Array(this.maxLevel + 1);
  let current = this.head;

  // Find the appropriate position to insert the new node
  for (let level = this.maxLevel; level >= 0; level--) {
    while (
      current.next[level] &&
      current.next[level].value < value
    ) {
      current = current.next[level];
    }
    update[level] = current;
  }

  current = current.next[0];

  if (current && current.value === value) {
    // Node with the same value already exists, do not insert
    return;
  }

  const newNode = new Node(value, this.randomLevel());

  if (newNode.level > this.maxLevel) {
    // Update the maximum level of the skip list
    for (let level = this.maxLevel + 1; level <= newNode.level; level++) {
      update[level] = this.head;
    }
    this.maxLevel = newNode.level;
  }

  // Link the new node to the next nodes at each level
  for (let level = 0; level <= newNode.level; level++) {
    newNode.next[level] = update[level].next[level];
    update[level].next[level] = newNode;
  }
}
delete(value) {
  const update = new Array(this.maxLevel + 1);
  let current = this.head;

  // Find the appropriate position to delete the node
  for (let level = this.maxLevel; level >= 0; level--) {
    while (
      current.next[level] &&
      current.next[level].value < value
    ) {
      current = current.next[level];
    }
    update[level] = current;
  }

  current = current.next[0];

  if (current && current.value === value) {
    // Remove the node from the skip list
    for (let level = 0; level <= this.maxLevel; level++) {
      if (update[level].next[level] === current) {
        update[level].next[level] = current.next[level];
      }
    }
  }
}
randomLevel() {
  let level = 0;
  while (Math.random() < 0.5 && level < maxLevel) {
    level++;
  }
  return level;
}
const skipList = new SkipList();
skipList.insert(3);
skipList.insert(7);
skipList.insert(2);
skipList.insert(9);
console.log(skipList.search(7)); // Outputs the node with value 7
skipList.delete(7);
console.log(skipList.search(7)); // Outputs null (node is deleted)
