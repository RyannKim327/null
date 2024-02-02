class Node {
  constructor(value = null) {
    this.value = value;
    this.next = [];
  }
}
class SkipList {
  constructor() {
    this.head = new Node(-Infinity); // sentinel node with lowest possible value
    this.maxLevel = 1; // maximum level of the skip list
    this.size = 0; // number of elements in the skip list
    this.probability = 0.5; // probability to include a node in each level
  }
  
  // Generate a random level for a new node
  randomLevel() {
    let level = 1;
    while (Math.random() < this.probability && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  // Insert a value into the skip list
  insert(value) {
    const newNode = new Node(value);
    const update = Array(this.maxLevel + 1).fill(this.head);
    let current = this.head;

    // Find the appropriate position to insert the new node
    for (let level = this.maxLevel; level >= 0; level--) {
      while (current.next[level] && current.next[level].value < value) {
        current = current.next[level];
      }
      update[level] = current;
    }

    current = current.next[0];

    // If the value already exists, update its value
    if (current && current.value === value) {
      current.value = value;
    } else {
      let newLevel = this.randomLevel();
      
      // If newLevel is greater than the current max level, update the update array
      if (newLevel > this.maxLevel) {
        for (let level = this.maxLevel + 1; level <= newLevel; level++) {
          update[level] = this.head;
        }
        this.maxLevel = newLevel;
      }

      // Create the links for the new node at each level
      for (let level = 0; level <= newLevel; level++) {
        newNode.next[level] = update[level].next[level];
        update[level].next[level] = newNode;
      }
      this.size++;
    }
  }

  // Search for a value in the skip list
  search(value) {
    let current = this.head;
    
    // Traverse through the skip list
    for (let level = this.maxLevel; level >= 0; level--) {
      while (current.next[level] && current.next[level].value < value) {
        current = current.next[level];
      }
    }

    current = current.next[0];

    // If found, return the node
    if (current && current.value === value) {
      return current;
    }

    return null; // Not found
  }

  // Delete a value from the skip list
  delete(value) {
    const update = Array(this.maxLevel + 1);
    let current = this.head;

    // Find the node to delete
    for (let level = this.maxLevel; level >= 0; level--) {
      while (current.next[level] && current.next[level].value < value) {
        current = current.next[level];
      }
      update[level] = current;
    }

    current = current.next[0];

    // If the found node matches the value, delete it
    if (current && current.value === value) {
      for (let level = 0; level <= this.maxLevel; level++) {
        if (update[level].next[level] !== current) {
          break;
        }
        update[level].next[level] = current.next[level];
      }
      this.size--;
      
      // Decrease the max level if necessary
      while (this.maxLevel > 0 && this.head.next[this.maxLevel] === null) {
        this.maxLevel--;
      }
      return true; // Successfully deleted
    }

    return false; // Not found
  }
}
const skipList = new SkipList();
skipList.insert(3);
skipList.insert(1);
skipList.insert(2);
console.log(skipList.search(2)); // Node { value: 2, next: [ Node { value: 3, next: [] } ] }
skipList.delete(1);
console.log(skipList.search(1)); // null
