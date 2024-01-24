class SkipListNode {
  constructor(key, value, level) {
    this.key = key;
    this.value = value;
    this.next = new Array(level);
  }
}
const MAX_LEVEL = 16; // The maximum level for the skip list

class SkipList {
  constructor() {
    this.head = new SkipListNode(null, null, MAX_LEVEL);
    this.level = 0;
  }

  // ...
}
class SkipList {
  // ...

  insert(key, value) {
    const update = new Array(MAX_LEVEL);
    let current = this.head;

    // Find the appropriate position to insert the new node
    for (let i = this.level; i >= 0; i--) {
      while (
        current.next[i] !== undefined &&
        current.next[i].key < key
      ) {
        current = current.next[i];
      }
      update[i] = current;
    }

    current = current.next[0];

    // If the node with the same key exists, update its value
    if (current !== undefined && current.key === key) {
      current.value = value;
    } else {
      const randomLevel = this.randomLevel();

      // If the new node has a level greater than the current level of the skip list, update the update array
      if (randomLevel > this.level) {
        for (let i = this.level + 1; i <= randomLevel; i++) {
          update[i] = this.head;
        }
        this.level = randomLevel;
      }

      const newNode = new SkipListNode(key, value, randomLevel);

      // Insert the new node into the skip list at each level
      for (let i = 0; i <= randomLevel; i++) {
        newNode.next[i] = update[i].next[i];
        update[i].next[i] = newNode;
      }
    }
  }

  delete(key) {
    const update = new Array(MAX_LEVEL);
    let current = this.head;

    // Find the node to delete
    for (let i = this.level; i >= 0; i--) {
      while (
        current.next[i] !== undefined &&
        current.next[i].key < key
      ) {
        current = current.next[i];
      }
      update[i] = current;
    }

    current = current.next[0];

    // Delete the node if found
    if (current !== undefined && current.key === key) {
      for (let i = 0; i <= this.level; i++) {
        if (update[i].next[i] !== current) {
          break;
        }
        update[i].next[i] = current.next[i];
      }

      // Update the level if necessary
      while (this.level > 0 && this.head.next[this.level] === undefined) {
        this.level--;
      }
    }
  }

  search(key) {
    let current = this.head;

    // Find the node with the given key
    for (let i = this.level; i >= 0; i--) {
      while (
        current.next[i] !== undefined &&
        current.next[i].key <= key
      ) {
        if (current.next[i].key === key) {
          return current.next[i].value;
        }
        current = current.next[i];
      }
    }

    return null;
  }

  // ...
}
class SkipList {
  // ...

  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < MAX_LEVEL) {
      level++;
    }
    return level;
  }

  // ...
}
// Example usage
const skipList = new SkipList();
skipList.insert(1, 'A');
skipList.insert(2, 'B');
skipList.insert(3, 'C');

console.log(skipList.search(2)); // Output: B
console.log(skipList.search(4)); // Output: null

skipList.delete(2);
console.log(skipList.search(2)); // Output: null
