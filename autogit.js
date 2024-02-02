class Node {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level + 1).fill(null);
  }
}
class SkipList {
  constructor() {
    this.head = new Node(-Infinity, 16); // -Infinity represents the lowest possible value
    this.level = 0;
  }
}
class SkipList {
  // ...

  insert(value) {
    const update = new Array(this.level + 1).fill(null);
    let curr = this.head;

    // Find the proper insertion position at each level
    for (let i = this.level; i >= 0; i--) {
      while (curr.next[i] && curr.next[i].value < value) {
        curr = curr.next[i];
      }
      update[i] = curr;
    }

    curr = curr.next[0];

    // Create a new node and update the pointers
    const newNode = new Node(value, this.randomLevel());
    if (newNode.next.length > this.level) {
      this.level = newNode.next.length - 1;
    }

    for (let i = 0; i <= this.level; i++) {
      newNode.next[i] = update[i].next[i];
      update[i].next[i] = newNode;
    }
  }

  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.level) {
      level++;
    }
    return level;
  }
}
class SkipList {
  // ...

  search(value) {
    let curr = this.head;

    // Navigate through the skip list
    for (let i = this.level; i >= 0; i--) {
      while (curr.next[i] && curr.next[i].value < value) {
        curr = curr.next[i];
      }
    }

    curr = curr.next[0];

    // Check if the target value exists
    if (curr && curr.value === value) {
      return curr;
    } else {
      return null;
    }
  }
}
class SkipList {
  // ...

  delete(value) {
    const update = new Array(this.level + 1).fill(null);
    let curr = this.head;

    // Find the node to be deleted and store the previous nodes at each level
    for (let i = this.level; i >= 0; i--) {
      while (curr.next[i] && curr.next[i].value < value) {
        curr = curr.next[i];
      }
      update[i] = curr;
    }

    curr = curr.next[0];

    // Delete the node and update the pointers
    if (curr && curr.value === value) {
      for (let i = 0; i <= this.level; i++) {
        if (update[i].next[i] !== curr) {
          break;
        }
        update[i].next[i] = curr.next[i];
      }
    }
  }
}
