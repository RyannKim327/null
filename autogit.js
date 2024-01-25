class SkipList {
  constructor() {
    this.head = new SkipNode(-Infinity);
    this.tail = new SkipNode(Infinity);
    this.head.next = this.tail;
    this.tail.previous = this.head;
  }

  // implementation of insertion, deletion, search, and display methods goes here
}
class SkipNode {
  constructor(value = null, previous = null, next = null, down = null) {
    this.value = value;
    this.previous = previous;
    this.next = next;
    this.down = down;
  }
}
class SkipList {
  // ...

  insert(value) {
    const path = []; // keep track of the nodes visited at each level
    let current = this.head;

    // Find the appropriate insertion position in each level
    while (current.down) {
      while (current.next.value < value) {
        current = current.next;
      }
      path.push(current);
      current = current.down;
    }

    // Insert the new node at the bottom level
    let newNode = new SkipNode(value, current, current.next);
    current.next.previous = newNode;
    current.next = newNode;

    // Build the tower up
    while (Math.random() < 0.5) {
      // Check if we need to create a new level
      if (path.length === 0) {
        let newHead = new SkipNode(-Infinity, null, null, this.head);
        let newTail = new SkipNode(Infinity, null, null, this.tail);
        newHead.next = newTail;
        newTail.previous = newHead;
        this.head = newHead;
        this.tail = newTail;
        this.head.down = current.down;
        this.tail.down = newNode.down;
      }

      // Move up the path
      let prev = path.pop();
      while (!prev.down) {
        prev = path.pop();
      }

      // Insert the new node at the upper level
      newNode = new SkipNode(value, prev, prev.next, newNode);
      prev.next.previous = newNode;
      prev.next = newNode;
    }
  }

  // ...
}
class SkipList {
  // ...

  search(value) {
    let current = this.head;

    // Traverse the skip list until value is found or the bottom level is reached
    while (current !== null) {
      if (current.next.value === value) {
        return current.next;
      } else if (current.next.value < value) {
        current = current.next;
      } else if (current.down) {
        current = current.down;
      } else {
        break;
      }
    }

    return null; // Not found
  }

  // ...
}
class SkipList {
  // ...

  delete(value) {
    let current = this.search(value);
    if (current === null) {
      return; // Value not found, no deletion required
    }

    // Delete the node from all levels
    while (current !== null) {
      current.previous.next = current.next;
      current.next.previous = current.previous;
      current = current.down;
    }
  }

  // ...
}
class SkipList {
  // ...

  display() {
    let level = this.head;
    let current = level;

    while (current.down) {
      level = level.down;
      current = level;
      let result = '';
      while (current.next !== this.tail) {
        result += current.next.value + ' ';
        current = current.next;
      }
      console.log(result.trim());
    }
  }
}

// Example usage:
const skipList = new SkipList();
skipList.insert(5);
skipList.insert(10);
skipList.insert(2);
skipList.insert(8);
skipList.insert(15);
skipList.display(); // Output: 2 5 8 10 15
