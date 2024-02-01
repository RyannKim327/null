class Node {
  constructor(value = null, level = 0) {
    this.value = value;
    this.next = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new Node();
    this.maxLevel = 0;
  }

  // Generate a random level for a new node
  getRandomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  // Insert a new node into the skip list
  insert(value) {
    const newNode = new Node(value, this.getRandomLevel());
    const update = new Array(this.maxLevel + 1);
    let current = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      update[i] = current;
    }

    for (let i = 0; i <= newNode.next.length - 1; i++) {
      newNode.next[i] = update[i].next[i];
      update[i].next[i] = newNode;
    }

    if (newNode.next.length > this.maxLevel) {
      this.maxLevel = newNode.next.length - 1;
    }
  }

  // Search for a value in the skip list
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

  // Remove a value from the skip list
  remove(value) {
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
      for (let i = 0; i <= current.next.length - 1; i++) {
        if (update[i].next[i] !== current) {
          break;
        }
        update[i].next[i] = current.next[i];
      }

      // Adjust the max level if necessary
      while (this.maxLevel > 0 && this.head.next[this.maxLevel] === null) {
        this.maxLevel--;
      }

      return true;
    }

    return false;
  }

  // Print the skip list
  print() {
    for (let level = this.maxLevel; level >= 0; level--) {
      let output = `Level ${level}: `;
      let current = this.head.next[level];
      while (current) {
        output += `${current.value} `;
        current = current.next[level];
      }
      console.log(output);
    }
  }
}
const list = new SkipList();

list.insert(3);
list.insert(7);
list.insert(2);
list.insert(5);

list.print(); // Prints the skip list

console.log(list.search(7)); // Searches for the value 7
console.log(list.search(4)); // Searches for the value 4

console.log(list.remove(2)); // Removes the value 2
list.print(); // Prints the updated skip list
