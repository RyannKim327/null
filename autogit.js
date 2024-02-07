class Node {
  constructor(value = null, level = 0) {
    this.value = value;
    this.forward = new Array(level + 1).fill(null);
  }
}

class SkipList {
  constructor() {
    this.head = new Node();
    this.maxLevel = 0;
  }

  // Insert element into the skip list
  insert(value) {
    // ...
  }

  // Search for an element in the skip list
  search(value) {
    // ...
  }

  // Delete an element from the skip list
  delete(value) {
    // ...
  }

  // Optional: Print the skip list
  print() {
    // ...
  }
}
// Insert element into the skip list
insert(value) {
  const update = new Array(this.maxLevel + 1);
  let node = this.head;

  for (let i = this.maxLevel; i >= 0; i--) {
    while (node.forward[i] && node.forward[i].value < value) {
      node = node.forward[i];
    }
    update[i] = node;
  }

  const newNodeLevel = this.randomLevel();
  const newNode = new Node(value, newNodeLevel);

  for (let i = 0; i <= newNodeLevel; i++) {
    newNode.forward[i] = update[i].forward[i];
    update[i].forward[i] = newNode;
  }

  if (newNodeLevel > this.maxLevel) {
    this.maxLevel = newNodeLevel;
  }
}

// Search for an element in the skip list
search(value) {
  let node = this.head;

  for (let i = this.maxLevel; i >= 0; i--) {
    while (node.forward[i] && node.forward[i].value < value) {
      node = node.forward[i];
    }
  }

  node = node.forward[0];

  if (node && node.value === value) {
    return node;
  }

  return null;
}

// Delete an element from the skip list
delete(value) {
  const update = new Array(this.maxLevel + 1);
  let node = this.head;

  for (let i = this.maxLevel; i >= 0; i--) {
    while (node.forward[i] && node.forward[i].value < value) {
      node = node.forward[i];
    }
    update[i] = node;
  }

  node = node.forward[0];

  if (node && node.value === value) {
    for (let i = 0; i <= this.maxLevel; i++) {
      if (update[i].forward[i] !== node) {
        break;
      }
      update[i].forward[i] = node.forward[i];
    }

    while (this.maxLevel > 0 && this.head.forward[this.maxLevel] === null) {
      this.maxLevel--;
    }
  }
}
const skipList = new SkipList();
skipList.insert(10);
skipList.insert(5);
skipList.insert(15);

console.log(skipList.search(5)); // Node { value: 5, forward: [ null, [Node], null ] }
console.log(skipList.search(20)); // null

skipList.delete(5);

console.log(skipList.search(5)); // null
