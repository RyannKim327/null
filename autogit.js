class SkipNode {
  constructor(value = null, level = 0) {
    this.value = value;
    this.next = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new SkipNode();
    this.maxLevel = 0;
  }

  // Helper function to generate the level for a new node
  generateRandomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  // Function to insert a new node into the skip list
  insert(value) {
    const newNode = new SkipNode(value, this.generateRandomLevel());

    // If the new node has a greater level than the current skip list
    // max level, update the max level accordingly
    if (newNode.level > this.maxLevel) {
      this.maxLevel = newNode.level;
    }

    let current = this.head;

    // Keep track of the most recent node before reaching the insert position
    const update = new Array(this.maxLevel + 1);

    // Find the insert position by traversing the skip list
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] !== undefined && current.next[i].value < value) {
        current = current.next[i];
      }
      update[i] = current; // Update the most recent node at this level
    }

    // Insert the new node into the skip list at the appropriate levels
    for (let i = 0; i <= newNode.level; i++) {
      newNode.next[i] = update[i].next[i];
      update[i].next[i] = newNode;
    }
  }

  // Function to search for a specific value in the skip list
  search(value) {
    let current = this.head;

    // Traverse the skip list to find the value
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] !== undefined && current.next[i].value <= value) {
        if (current.next[i].value === value) {
          return true; // Found the value in the skip list
        }
        current = current.next[i];
      }
    }

    return false; // Value not found in the skip list
  }

  // Function to remove a value from the skip list
  remove(value) {
    let current = this.head;

    // Keep track of the most recent node before reaching the remove position
    const update = new Array(this.maxLevel + 1);

    // Find the remove position by traversing the skip list
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] !== undefined && current.next[i].value < value) {
        current = current.next[i];
      }
      update[i] = current; // Update the most recent node at this level
    }

    // If the value exists in the skip list, remove it from all levels
    if (current.next[0] !== undefined && current.next[0].value === value) {
      for (let i = 0; i <= this.maxLevel; i++) {
        if (update[i].next[i] !== undefined && update[i].next[i].value === value) {
          update[i].next[i] = update[i].next[i].next[i];
        }
      }
    }

    // Update the max level if necessary
    while (this.maxLevel > 0 && this.head.next[this.maxLevel] === undefined) {
      this.maxLevel--;
    }
  }

  // Function to print the skip list
  print() {
    let current = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      let output = `Level ${i}: `;
      while (current.next[i] !== undefined) {
        output += `${current.next[i].value} `;
        current = current.next[i];
      }
      console.log(output);
      current = this.head;
    }
  }
}
const skipList = new SkipList();
skipList.insert(5);
skipList.insert(9);
skipList.insert(2);
skipList.insert(12);
skipList.insert(6);
skipList.print(); // Output the skip list
console.log(skipList.search(9)); // Search for a value
skipList.remove(2); // Remove a value
skipList.print(); // Output the updated skip list
