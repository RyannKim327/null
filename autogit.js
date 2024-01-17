class Node {
  constructor(value, forward = []) {
    this.value = value;
    this.forward = forward;
  }
}
class SkipList {
  constructor() {
    this.head = new Node(-Infinity);
    this.levels = 1; // current number of levels, starts with 1
  }

  insert(value) {
    const update = new Array(this.levels);
    let node = this.head;

    for (let i = this.levels - 1; i >= 0; i--) {
      while (node.forward[i] && node.forward[i].value < value) {
        node = node.forward[i];
      }
      update[i] = node;
    }

    node = node.forward[0];

    if (!node || node.value !== value) {
      const newNode = new Node(value);
      const newLevels = this.randomLevels();
      if (newLevels > this.levels) {
        for (let i = this.levels; i < newLevels; i++) {
          update[i] = this.head;
        }
        this.levels = newLevels;
      }

      for (let i = 0; i < newLevels; i++) {
        newNode.forward[i] = update[i].forward[i];
        update[i].forward[i] = newNode;
      }
    }
  }

  delete(value) {
    const update = new Array(this.levels);
    let node = this.head;

    for (let i = this.levels - 1; i >= 0; i--) {
      while (node.forward[i] && node.forward[i].value < value) {
        node = node.forward[i];
      }
      update[i] = node;
    }

    node = node.forward[0];

    if (node && node.value === value) {
      for (let i = 0; i < this.levels; i++) {
        if (update[i].forward[i] !== node)
          break;
        update[i].forward[i] = node.forward[i];
      }

      while (this.levels > 1 && this.head.forward[this.levels - 1] === null) {
        this.levels--;
      }
    }
  }

  search(value) {
    let node = this.head;

    for (let i = this.levels - 1; i >= 0; i--) {
      while (node.forward[i] && node.forward[i].value < value) {
        node = node.forward[i];
      }
    }

    node = node.forward[0];

    if (node && node.value === value) {
      return true;
    }

    return false;
  }

  display() {
    for (let i = this.levels - 1; i >= 0; i--) {
      let node = this.head.forward[i];
      let str = `Level ${i}: `;
      while (node) {
        str += `${node.value} `;
        node = node.forward[i];
      }
      console.log(str);
    }
  }

  randomLevels() {
    let levels = 1;

    while (Math.random() < 0.5 && levels < this.levels + 1) {
      levels++;
    }

    return levels;
  }
}
const list = new SkipList();

list.insert(3);
list.insert(6);
list.insert(2);
list.insert(8);
list.insert(1);

list.display(); // Display the skip list

console.log(list.search(6)); // Search for 6

list.delete(6); // Delete 6 from the skip list

list.display(); // Display the skip list after deletion
