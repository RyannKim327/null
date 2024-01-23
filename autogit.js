class SkipList {
  constructor() {
    this.head = new Node(-Infinity);
    this.tail = new Node(Infinity);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.maxLevel = 0;
  }

  insert(value) {
    const newNode = new Node(value);
    const update = Array(this.maxLevel + 1);

    let current = this.head;
    for (let level = this.maxLevel; level >= 0; level--) {
      while (current.next[level].value < value) {
        current = current.next[level];
      }
      update[level] = current;
    }

    for (let level = 0; level <= newNode.level; level++) {
      newNode.next[level] = update[level].next[level];
      update[level].next[level] = newNode;
    }

    if (newNode.next[0]) {
      newNode.next[0].prev = newNode;
    }

    if (newNode.level > this.maxLevel) {
      this.maxLevel = newNode.level;
    }
  }

  remove(value) {
    let current = this.head;
    const update = Array(this.maxLevel + 1);

    for (let level = this.maxLevel; level >= 0; level--) {
      while (current.next[level].value < value) {
        current = current.next[level];
      }
      update[level] = current;
    }

    current = current.next[0];

    if (current.value === value) {
      for (let level = 0; level <= this.maxLevel; level++) {
        if (update[level].next[level] !== current) {
          break;
        }
        update[level].next[level] = current.next[level];
      }

      while (this.maxLevel > 0 && this.head.next[this.maxLevel] === this.tail) {
        this.maxLevel--;
      }
    }
  }

  find(value) {
    let current = this.head;
    for (let level = this.maxLevel; level >= 0; level--) {
      while (current.next[level].value < value) {
        current = current.next[level];
      }
    }

    current = current.next[0];
    if (current.value === value) {
      return current;
    }
    return null;
  }
}

class Node {
  constructor(value, level = 0) {
    this.value = value;
    this.next = Array(level + 1);
    this.prev = null;
    this.level = level;
  }
}
const skipList = new SkipList();
skipList.insert(1);
skipList.insert(4);
skipList.insert(2);
skipList.remove(4);
const foundNode = skipList.find(1);
console.log(foundNode.value); // Output: 1
