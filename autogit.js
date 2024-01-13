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

  // Method to insert a new value into the skip list
  insert(value) {
    const update = new Array(this.maxLevel + 1);
    let current = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      update[i] = current;
    }

    const newNode = new Node(value, this.randomLevel());
    if (newNode.next.length > this.maxLevel) {
      for (let i = this.maxLevel + 1; i < newNode.next.length; i++) {
        update[i] = this.head;
      }
      this.maxLevel = newNode.next.length - 1;
    }

    for (let i = 0; i < newNode.next.length; i++) {
      newNode.next[i] = update[i].next[i];
      update[i].next[i] = newNode;
    }
  }

  // Method to search for a value in the skip list
  search(value) {
    let current = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
    }

    current = current.next[0];
    if (current && current.value === value) {
      return current;
    }
    return null;
  }

  // Method to delete a value from the skip list
  delete(value) {
    const update = new Array(this.maxLevel + 1);
    let current = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      update[i] = current;
    }

    current = current.next[0];

    if (current && current.value === value) {
      for (let i = 0; i <= this.maxLevel; i++) {
        if (update[i].next[i] !== current) {
          break;
        }
        update[i].next[i] = current.next[i];
      }

      while (this.maxLevel > 0 && this.head.next[this.maxLevel] === null) {
        this.maxLevel--;
      }
    }
  }

  // Method to generate the level for a new node
  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  // Method to print the skip list
  print() {
    for (let level = this.maxLevel; level >= 0; level--) {
      let current = this.head.next[level];
      let values = [];
      while (current) {
        values.push(current.value);
        current = current.next[level];
      }
      console.log(`Level ${level}: ${values.join(' -> ')}`);
    }
  }
}
const skipList = new SkipList();

skipList.insert(3);
skipList.insert(6);
skipList.insert(2);
skipList.insert(9);
skipList.insert(7);

skipList.print(); // Print the skip list

console.log(skipList.search(6)); // Search for a value

skipList.delete(6); // Delete a value
skipList.delete(2); // Delete a value

skipList.print(); // Print the updated skip list
