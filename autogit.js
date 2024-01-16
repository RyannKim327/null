class Node {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level); // Array to store references to next nodes at different levels
  }
}
class SkipList {
  constructor() {
    this.head = new Node(-Infinity, 32); // Initialize the head with a minimum value
    this.tail = new Node(Infinity, 32); // Initialize the tail with a maximum value
    this.levels = 1; // Current number of levels in the skip list
  }
  
  // Generate a random level
  randomLevel() {
    let level = 1;
    while (Math.random() < 0.5 && level < this.levels)
      level++;

    return level;
  }

  // Insert a value into the skip list
  insert(value) {
    const node = new Node(value, this.randomLevel());
    let current = this.head;

    // Update references to next nodes
    for (let i = this.levels - 1; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value)
        current = current.next[i];

      if (i < node.next.length)
        node.next[i] = current.next[i];

      if (i === 0)
        current.next[i] = node;
    }

    if (node.next[0] !== this.tail)
      this.levels = Math.max(this.levels, node.next.length);
  }

  // Search for a value in the skip list
  search(value) {
    let current = this.head;

    for (let i = this.levels - 1; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value)
        current = current.next[i];

      if (current.next[i] && current.next[i].value === value)
        return true;
    }

    return false;
  }

  // Remove a value from the skip list
  remove(value) {
    let current = this.head;

    for (let i = this.levels - 1; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value)
        current = current.next[i];

      if (current.next[i] && current.next[i].value === value)
        current.next[i] = current.next[i].next[i];
    }
  }
}
const skipList = new SkipList();

skipList.insert(3);
skipList.insert(7);
skipList.insert(1);

console.log(skipList.search(7)); // Output: true
console.log(skipList.search(5)); // Output: false

skipList.remove(3);
skipList.remove(5);

console.log(skipList.search(3)); // Output: false
