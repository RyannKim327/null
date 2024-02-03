class Node {
  constructor(value = null, level = 0) {
    this.value = value;
    this.forward = new Array(level + 1); // Array to store references to next nodes
  }
}
class SkipList {
  constructor() {
    this.head = new Node();
    this.level = 0;
  }

  // Generate a random level for a Node
  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.level + 1) {
      level++;
    }
    return level;
  }

  // Insert a new value into the skip list
  insert(value) {
    const update = new Array(this.level + 1);
    let current = this.head;

    // Find a suitable position to insert the new node
    for (let i = this.level; i >= 0; i--) {
      while (
        current.forward[i] !== undefined &&
        current.forward[i].value < value
      ) {
        current = current.forward[i];
      }
      update[i] = current; // Keep track of nodes at each level
    }

    current = current.forward[0];

    // If the value already exists, update its value instead
    if (current !== undefined && current.value === value) {
      current.value = value;
    } else {
      const newNode = new Node(value, this.randomLevel());

      // If the new node's level is greater than current skip list level,
      // update the head node's forward references
      if (newNode.forward.length > this.level) {
        for (let i = this.level + 1; i < newNode.forward.length; i++) {
          update[i] = this.head;
        }
        this.level = newNode.forward.length - 1;
      }

      // Insert the new node by updating forward references
      for (let i = 0; i < newNode.forward.length; i++) {
        newNode.forward[i] = update[i].forward[i];
        update[i].forward[i] = newNode;
      }
    }
  }

  // Search for a value in the skip list
  search(value) {
    let current = this.head;

    for (let i = this.level; i >= 0; i--) {
      while (
        current.forward[i] !== undefined &&
        current.forward[i].value < value
      ) {
        current = current.forward[i];
      }
    }

    current = current.forward[0];

    if (current !== undefined && current.value === value) {
      return current;
    }
    return null;
  }

  // Delete a value from the skip list
  delete(value) {
    const update = new Array(this.level + 1);
    let current = this.head;

    // Find the node to delete
    for (let i = this.level; i >= 0; i--) {
      while (
        current.forward[i] !== undefined &&
        current.forward[i].value < value
      ) {
        current = current.forward[i];
      }
      update[i] = current; // Keep track of nodes at each level
    }

    current = current.forward[0];

    // If the node to delete is found, update forward references
    if (current !== undefined && current.value === value) {
      for (let i = 0; i < current.forward.length; i++) {
        if (update[i].forward[i] !== current) {
          break;
        }
        update[i].forward[i] = current.forward[i];
      }

      // Update skip list level if necessary
      while (
        this.level > 0 &&
        this.head.forward[this.level] === undefined
      ) {
        this.level--;
      }
      return current.value;
    }
    return null;
  }

  // Display the skip list
  display() {
    for (let i = this.level; i >= 0; i--) {
      let row = 'head -> ';
      let current = this.head.forward[i];
      while (current !== undefined) {
        row += `${current.value} -> `;
        current = current.forward[i];
      }
      console.log(row + 'null');
    }
  }
}
const skipList = new SkipList();
skipList.insert(3);
skipList.insert(8);
skipList.insert(2);
skipList.insert(6);
skipList.insert(9);

skipList.display(); // Display the skip list

console.log(skipList.search(6)); // Search for a value

skipList.delete(6); // Delete a value

skipList.display(); // Display the updated skip list
