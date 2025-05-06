class Node<T> {
  value: T;
  forward: Node<T>[];

  constructor(value: T, level: number) {
    this.value = value;
    this.forward = new Array(level + 1).fill(null);
  }
}

class SkipList<T> {
  private head: Node<T>;
  private maxLevel: number;
  private probability: number;
  private level: number;

  constructor(maxLevel: number = 16, probability: number = 0.5) {
    this.maxLevel = maxLevel;
    this.probability = probability;
    this.level = 0;
    this.head = new Node<T>(null, this.maxLevel); // Create a head node with null value
  }

  // Randomly determine level for the new node
  private randomLevel(): number {
    let lvl = 0;
    while (Math.random() < this.probability && lvl < this.maxLevel) {
      lvl++;
    }
    return lvl;
  }

  // Insert a value into the skip list
  insert(value: T): void {
    const update = new Array<Node<T>>(this.maxLevel + 1);
    let current: Node<T> = this.head;

    // Traverse the skip list to find insertion point
    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] !== null && current.forward[i].value < value) {
        current = current.forward[i];
      }
      update[i] = current;
    }

    current = current.forward[0];

    // If current node's value is the same as the value to insert, do nothing
    if (current === null || current.value !== value) {
      const newLevel = this.randomLevel();
      if (newLevel > this.level) {
        for (let i = this.level + 1; i <= newLevel; i++) {
          update[i] = this.head;
        }
        this.level = newLevel;
      }

      // Create the new node and insert it
      const newNode = new Node(value, newLevel);
      for (let i = 0; i <= newLevel; i++) {
        newNode.forward[i] = update[i].forward[i];
        update[i].forward[i] = newNode;
      }
    }
  }

  // Search for a value in the skip list
  search(value: T): boolean {
    let current: Node<T> = this.head;

    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] !== null && current.forward[i].value < value) {
        current = current.forward[i];
      }
    }
    current = current.forward[0];

    return current !== null && current.value === value; // Return true if found
  }

  // Remove a value from the skip list
  remove(value: T): boolean {
    const update = new Array<Node<T>>(this.maxLevel + 1);
    let current: Node<T> = this.head;

    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] !== null && current.forward[i].value < value) {
        current = current.forward[i];
      }
      update[i] = current;
    }

    current = current.forward[0];

    // If current node is found, remove it
    if (current !== null && current.value === value) {
      for (let i = 0; i <= this.level; i++) {
        if (update[i].forward[i] !== current) break;
        update[i].forward[i] = current.forward[i];
      }

      // Reduce the level of the skip list if needed
      while (this.level > 0 && this.head.forward[this.level] === null) {
        this.level--;
      }
      return true; // Successfully removed
    }
    return false; // Value not found
  }

  // To facilitate debugging
  print(): void {
    for (let i = this.level; i >= 0; i--) {
      let current: Node<T> = this.head.forward[i];
      let line = `Level ${i}: `;
      while (current !== null) {
        line += current.value + " ";
        current = current.forward[i];
      }
      console.log(line);
    }
  }
}

// Usage example
const skipList = new SkipList<number>();
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);
skipList.insert(12);
skipList.insert(19);
skipList.insert(17);
skipList.insert(26);
skipList.insert(21);
skipList.insert(25);

console.log("Skip List after insertions:");
skipList.print();

console.log("Searching for 19:", skipList.search(19)); // Should return true
console.log("Removing 19:", skipList.remove(19)); // Should return true
console.log("Searching for 19:", skipList.search(19)); // Should return false
