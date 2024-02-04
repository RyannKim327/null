class SkipNode {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new SkipNode(-Infinity, 0);
    this.level = 0;
  }

  // Flip a coin to decide the level of a new node
  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.level + 1) {
      level++;
    }
    return level;
  }

  // Insert a value into the skip list
  insert(value) {
    const update = new Array(this.level + 1);
    let node = this.head;

    for (let i = this.level; i >= 0; i--) {
      while (node.next[i] && node.next[i].value < value) {
        node = node.next[i];
      }
      update[i] = node;
    }

    node = node.next[0];

    if (!node || node.value !== value) {
      const level = this.randomLevel();

      if (level > this.level) {
        for (let i = this.level + 1; i <= level; i++) {
          update[i] = this.head;
        }
        this.level = level;
      }

      const newNode = new SkipNode(value, level);
      for (let i = 0; i <= level; i++) {
        newNode.next[i] = update[i].next[i];
        update[i].next[i] = newNode;
      }
    }
  }

  // Search for a value in the skip list
  search(value) {
    let node = this.head;

    for (let i = this.level; i >= 0; i--) {
      while (node.next[i] && node.next[i].value < value) {
        node = node.next[i];
      }
    }

    node = node.next[0];

    if (node && node.value === value) {
      return node;
    } else {
      return null;
    }
  }

  // Remove a value from the skip list
  remove(value) {
    const update = new Array(this.level + 1);
    let node = this.head;

    for (let i = this.level; i >= 0; i--) {
      while (node.next[i] && node.next[i].value < value) {
        node = node.next[i];
      }
      update[i] = node;
    }

    node = node.next[0];

    if (node && node.value === value) {
      for (let i = 0; i <= this.level; i++) {
        if (update[i].next[i] !== node) {
          break;
        }
        update[i].next[i] = node.next[i];
      }

      while (this.level > 0 && !this.head.next[this.level]) {
        this.level--;
      }
    }
  }

  // Print the values of the skip list
  print() {
    let node = this.head.next[0];
    let values = [];

    while (node) {
      values.push(node.value);
      node = node.next[0];
    }

    console.log(values);
  }
}
const skipList = new SkipList();

skipList.insert(3);
skipList.insert(1);
skipList.insert(5);
skipList.insert(2);
skipList.insert(4);

skipList.print(); // [1, 2, 3, 4, 5]

console.log(skipList.search(3)); // SkipNode { value: 3, next: [ SkipNode ] }

skipList.remove(3);

skipList.print(); // [1, 2, 4, 5]
