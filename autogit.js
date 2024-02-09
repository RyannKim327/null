class Node {
  constructor(value, next = []) {
    this.value = value;
    this.next = next;
  }
}
class SkipList {
  constructor() {
    this.head = new Node(-Infinity);
    this.levels = 1;
  }

  insert(value) {
    const newNode = new Node(value);
    let current = this.head;

    // Create an update array to store the previous nodes at each level
    const update = new Array(this.levels);

    // Find the appropriate position to insert the new node at each level
    for (let level = this.levels - 1; level >= 0; level--) {
      while (current.next[level] && current.next[level].value < value) {
        current = current.next[level];
      }
      update[level] = current;
    }

    // Update the next references of nodes to insert the new node
    for (let level = 0; level <= newNode.next.length; level++) {
      newNode.next[level] = update[level].next[level];
      update[level].next[level] = newNode;
    }

    // Increase the number of levels if needed
    if (Math.random() < 0.5) {
      this.levels++;
      this.head.next.push(null);
      newNode.next.push(null);
    }
  }

  delete(value) {
    let current = this.head;

    // Find the node to delete
    for (let level = this.levels - 1; level >= 0; level--) {
      while (current.next[level] && current.next[level].value < value) {
        current = current.next[level];
      }
    }

    // If the next node is the one to delete, remove it from each level
    if (current.next[0] && current.next[0].value === value) {
      for (let level = 0; level <= current.next.length - 1; level++) {
        if (current.next[level].value === value) {
          current.next[level] = current.next[level].next[level];
        }
      }
    }
  }

  search(value) {
    let current = this.head;

    // Find the node based on its value
    for (let level = this.levels - 1; level >= 0; level--) {
      while (current.next[level] && current.next[level].value <= value) {
        if (current.next[level].value === value) {
          return true;
        }
        current = current.next[level];
      }
    }

    return false;
  }
}
const skipList = new SkipList();
skipList.insert(1);
skipList.insert(2);
skipList.insert(3);

console.log(skipList.search(2)); // Output: true
console.log(skipList.search(4)); // Output: false

skipList.delete(2);

console.log(skipList.search(2)); // Output: false
