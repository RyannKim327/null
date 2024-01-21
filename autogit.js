class SkipNode {
  constructor(value, level) {
    this.value = value;
    this.next = Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new SkipNode(-Infinity, 0);
    this.level = 0;
  }

  // Function to generate the level for a new node
  generateLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.level + 1) {
      level++;
    }
    return level;
  }

  // Function to search for a value in the skip list
  search(value) {
    let currentNode = this.head;
    for (let i = this.level; i >= 0; i--) {
      while (
        currentNode.next[i] !== undefined &&
        currentNode.next[i].value < value
      ) {
        currentNode = currentNode.next[i];
      }
    }
    currentNode = currentNode.next[0];
    if (currentNode !== undefined && currentNode.value === value) {
      return currentNode;
    } else {
      return null;
    }
  }

  // Function to insert a value into the skip list
  insert(value) {
    const update = Array(this.level + 1);
    let currentNode = this.head;
    for (let i = this.level; i >= 0; i--) {
      while (
        currentNode.next[i] !== undefined &&
        currentNode.next[i].value < value
      ) {
        currentNode = currentNode.next[i];
      }
      update[i] = currentNode;
    }
    currentNode = currentNode.next[0];
    if (currentNode === undefined || currentNode.value !== value) {
      const newNode = new SkipNode(value, this.generateLevel());
      if (newNode.level > this.level) {
        this.level = newNode.level;
      }
      for (let i = 0; i <= newNode.level; i++) {
        newNode.next[i] = update[i].next[i];
        update[i].next[i] = newNode;
      }
      console.log(`${value} inserted.`);
    } else {
      console.log(`${value} already exists.`);
    }
  }

  // Function to remove a value from the skip list
  remove(value) {
    const update = Array(this.level + 1);
    let currentNode = this.head;
    for (let i = this.level; i >= 0; i--) {
      while (
        currentNode.next[i] !== undefined &&
        currentNode.next[i].value < value
      ) {
        currentNode = currentNode.next[i];
      }
      update[i] = currentNode;
    }
    currentNode = currentNode.next[0];
    if (currentNode !== undefined && currentNode.value === value) {
      for (let i = 0; i <= this.level; i++) {
        if (update[i].next[i] !== currentNode) {
          break;
        }
        update[i].next[i] = currentNode.next[i];
      }
      console.log(`${value} removed.`);
      while (this.level > 0 && this.head.next[this.level] === undefined) {
        this.level--;
      }
    } else {
      console.log(`${value} not found.`);
    }
  }
}
const skipList = new SkipList();
skipList.insert(3);
skipList.insert(5);
skipList.insert(1);
skipList.insert(8);
console.log(skipList.search(5)); // Output: { value: 5, next: [SkipNode] }
skipList.remove(1); 
console.log(skipList.search(1)); // Output: null
