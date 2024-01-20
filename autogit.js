class SkipListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.down = null;
  }
}
class SkipList {
  constructor() {
    this.head = null;
    this.maxLevel = 0; // The maximum level of the skip list
    this.probability = 0.5; // The probability of moving to the next level
  }

  // Insert a new node into the skip list
  insert(key, value) {
    // If the skip list is empty, create a new level
    if (!this.head) {
      this.head = new SkipListNode(null, null);
      this.head.next = new SkipListNode(key, value);
      this.maxLevel = 1;
      return;
    }

    // Find the insertion point on each level
    let currentLevel = this.maxLevel;
    const update = new Array(currentLevel + 1);
    let node = this.head;

    while (currentLevel >= 0) {
      while (node.next && node.next.key < key) {
        node = node.next;
      }
      update[currentLevel] = node;
      if (node.down) {
        node = node.down;
      }
      currentLevel--;
    }

    // Create a new node and connect it with the previous level
    const newNode = new SkipListNode(key, value);
    for (let i = 0; i < update.length; i++) {
      newNode.next = update[i].next;
      update[i].next = newNode;

      // Randomly decide whether to create a new level
      if (Math.random() < this.probability) {
        const newLevelNode = new SkipListNode(key, value);
        newLevelNode.next = newNode;
        newNode = newLevelNode;

        // If a new level is created, update the head
        if (i === this.maxLevel - 1) {
          const newHead = new SkipListNode(null, null);
          newHead.next = newNode;
          this.head.down = newHead;
          this.maxLevel++;
        }
      }
    }
  }

  // Search for a node with a given key in the skip list
  search(key) {
    let node = this.head;

    while (node) {
      if (node.next && node.next.key <= key) {
        if (node.next.key === key) {
          return node.next.value;
        }
        node = node.next;
      } else if (node.down) {
        node = node.down;
      } else {
        break;
      }
    }

    return null; // Key not found
  }

  // Delete a node with a given key from the skip list
  delete(key) {
    let node = this.head;
    let deleted = false;

    while (node) {
      if (node.next && node.next.key <= key) {
        if (node.next.key === key) {
          node.next = node.next.next;
          deleted = true;
        }
        node = node.next;
      } else if (node.down) {
        node = node.down;
      } else {
        break;
      }
    }

    if (deleted && this.head.next === null) {
      // If all nodes are deleted, reset the skip list
      this.head = null;
      this.maxLevel = 0;
    }
  }
}
const skipList = new SkipList();

skipList.insert(1, "Value 1");
skipList.insert(3, "Value 3");
skipList.insert(2, "Value 2");

console.log(skipList.search(2)); // Output: Value 2

skipList.delete(2);

console.log(skipList.search(2)); // Output: null
