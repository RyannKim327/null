class Node {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level + 1).fill(null);
  }
}
class SkipList {
  constructor() {
    this.head = new Node(-Infinity, 0);
    this.maxLevel = 0;
  }

  display() {
    let current = this.head;

    while (current.next[0]) {
      console.log(current.next[0].value);
      current = current.next[0];
    }
  }

  search(target) {
    let current = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < target) {
        current = current.next[i];
      }
    }

    current = current.next[0];

    if (current && current.value === target) {
      return current;
    }

    return null;
  }

  insert(value) {
    const level = this.getRandomLevel();
    const newNode = new Node(value, level);

    if (level > this.maxLevel) {
      this.head.next.push(null);
      this.maxLevel++;
    }

    let current = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }

      if (i <= level) {
        newNode.next[i] = current.next[i];
        current.next[i] = newNode;
      }
    }
  }

  delete(value) {
    let current = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }

      if (current.next[i] && current.next[i].value === value) {
        current.next[i] = current.next[i].next[i];
      }
    }
  }

  getRandomLevel() {
    let level = 0;

    while (Math.random() < 0.5 && level < this.maxLevel) {
      level++;
    }

    return level;
  }
}
// Create a new skip list
const skipList = new SkipList();

// Insert elements
skipList.insert(3);
skipList.insert(1);
skipList.insert(5);
skipList.insert(2);

// Search for an element
console.log(skipList.search(5)); // Node { value: 5, next: [ null, Node ] }

// Delete an element
skipList.delete(5);
console.log(skipList.search(5)); // null

// Display all elements
skipList.display(); // 1, 2, 3
