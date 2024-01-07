class SkipNode {
  constructor(value, level) {
    this.value = value;
    this.next = Array(level + 1).fill(null);
  }
}
class SkipList {
  constructor() {
    this.head = new SkipNode(-Infinity, 0);
    this.maxLevel = 0;
    this.length = 0;
  }

  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  insert(value) {
    const newNode = new SkipNode(value, this.randomLevel());
    
    if (newNode.level > this.maxLevel) {
      this.maxLevel = newNode.level;
    }

    let current = this.head;
    const update = Array(this.maxLevel + 1).fill(null);

    for (let level = this.maxLevel; level >= 0; level--) {
      while (current.next[level] && current.next[level].value < value) {
        current = current.next[level];
      }
      update[level] = current;
    }

    for (let level = 0; level <= newNode.level; level++) {
      newNode.next[level] = update[level].next[level];
      update[level].next[level] = newNode;
    }

    this.length++;
  }

  remove(value) {
    let current = this.head;
    const update = Array(this.maxLevel + 1).fill(null);

    for (let level = this.maxLevel; level >= 0; level--) {
      while (current.next[level] && current.next[level].value < value) {
        current = current.next[level];
      }
      update[level] = current;
    }

    current = current.next[0];

    if (current && current.value === value) {
      for (let level = 0; level <= this.maxLevel; level++) {
        if (update[level].next[level] !== current) {
          break;
        }
        update[level].next[level] = current.next[level];
      }
      this.length--;
    }
  }

  search(value) {
    let current = this.head;

    for (let level = this.maxLevel; level >= 0; level--) {
      while (current.next[level] && current.next[level].value < value) {
        current = current.next[level];
      }
    }

    current = current.next[0];

    if (current && current.value === value) {
      return current;
    }

    return null;
  }

  print() {
    let current = this.head.next[0];
    const result = [];

    while (current) {
      result.push(current.value);
      current = current.next[0];
    }

    console.log(result);
  }
}
const skipList = new SkipList();

skipList.insert(3);
skipList.insert(6);
skipList.insert(2);
skipList.insert(8);
skipList.insert(1);

skipList.print(); // Output: [1, 2, 3, 6, 8]

skipList.remove(6);

skipList.print(); // Output: [1, 2, 3, 8]

const foundNode = skipList.search(2);
console.log(foundNode.value); // Output: 2
