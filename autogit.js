class Node {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level);
  }
}
class SkipList {
  constructor() {
    this.head = new Node(-Infinity, 32); // Head node with minimum value and maximum level
    this.level = 1; // Current level of the skip list
  }

  // Returns a random level for a new node
  randomLevel() {
    let level = 1;
    while (Math.random() < 0.5 && level < this.head.next.length) {
      level++;
    }
    return level;
  }

  // Inserts a new value into the skip list
  insert(value) {
    const newNode = new Node(value, this.randomLevel());
    const update = new Array(newNode.next.length);

    let current = this.head;
    for (let i = this.level - 1; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      update[i] = current;
    }

    for (let i = 0; i < newNode.next.length; i++) {
      newNode.next[i] = update[i].next[i];
      update[i].next[i] = newNode;
    }

    if (newNode.next.length > this.level) {
      this.level = newNode.next.length;
    }
  }

  // Searches for a value in the skip list and returns true if found, false otherwise
  search(value) {
    let current = this.head;
    for (let i = this.level - 1; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
    }
    current = current.next[0];
    return current && current.value === value;
  }

  // Removes a value from the skip list
  remove(value) {
    const update = new Array(this.level);

    let current = this.head;
    for (let i = this.level - 1; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      update[i] = current;
    }

    current = current.next[0];
    if (current && current.value === value) {
      for (let i = 0; i < current.next.length; i++) {
        update[i].next[i] = current.next[i];
      }

      while (this.level > 1 && !this.head.next[this.level - 1]) {
        this.level--;
      }
      return true;
    }

    return false;
  }

  // Displays the skip list
  display() {
    for (let i = this.level - 1; i >= 0; i--) {
      let current = this.head.next[i];
      let line = `Level ${i}: `;
      while (current) {
        line += `${current.value} -> `;
        current = current.next[i];
      }
      console.log(line);
    }
  }
}

// Usage example:
const skipList = new SkipList();
skipList.insert(1);
skipList.insert(4);
skipList.insert(2);
skipList.insert(3);
skipList.display(); // Displays the skip list
console.log(skipList.search(2)); // Returns true
skipList.remove(2);
console.log(skipList.search(2)); // Returns false
