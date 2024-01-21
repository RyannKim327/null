class SkipNode {
  constructor(key, value, level) {
    this.key = key;
    this.value = value;
    this.forward = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.maxLevel = 16; // Maximum level of the skip list
    this.level = 0; // Current level of the skip list
    this.head = new SkipNode(-Infinity, null, this.maxLevel); // Head node
  }
  
  // Other methods will be implemented here
}
insert(key, value) {
  const update = new Array(this.maxLevel + 1);
  let node = this.head;

  for (let i = this.level; i >= 0; i--) {
    while (node.forward[i] && node.forward[i].key < key) {
      node = node.forward[i];
    }
    update[i] = node;
  }

  node = node.forward[0];

  if (node && node.key === key) {
    // Key already exists, update the value
    node.value = value;
  } else {
    // Generate a random level for the new node
    const newLevel = this.randomLevel();

    if (newLevel > this.level) {
      // If the new node's level is higher than the current level,
      // update the update array and increase the skip list's level
      for (let i = this.level + 1; i <= newLevel; i++) {
        update[i] = this.head;
      }
      this.level = newLevel;
    }

    // Create a new node
    const newNode = new SkipNode(key, value, newLevel);

    // Update the forward pointers
    for (let i = 0; i <= newLevel; i++) {
      newNode.forward[i] = update[i].forward[i];
      update[i].forward[i] = newNode;
    }
  }
}
search(key) {
  let node = this.head;

  for (let i = this.level; i >= 0; i--) {
    while (node.forward[i] && node.forward[i].key < key) {
      node = node.forward[i];
    }
  }

  node = node.forward[0];

  if (node && node.key === key) {
    return node.value;
  } else {
    return null;
  }
}
remove(key) {
  const update = new Array(this.maxLevel + 1);
  let node = this.head;

  for (let i = this.level; i >= 0; i--) {
    while (node.forward[i] && node.forward[i].key < key) {
      node = node.forward[i];
    }
    update[i] = node;
  }

  node = node.forward[0];

  if (node && node.key === key) {
    // Update the forward pointers
    for (let i = 0; i <= this.level; i++) {
      if (update[i].forward[i] !== node) {
        break;
      }
      update[i].forward[i] = node.forward[i];
    }

    // Decrease the skip list's level if necessary
    while (this.level > 0 && this.head.forward[this.level] === null) {
      this.level--;
    }
  }
}
randomLevel() {
  let level = 0;
  while (Math.random() < 0.5 && level < this.maxLevel) {
    level++;
  }
  return level;
}
