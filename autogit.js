class SkipListNode {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new SkipListNode(null, 0);
    this.maxLevel = 0;
    this.length = 0;
  }
}
insert(value) {
    const level = this.randomLevel();
    const newNode = new SkipListNode(value, level);

    // Update the maxLevel if necessary
    if (level > this.maxLevel) {
      this.maxLevel = level;
    }

    let current = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      if (i <= level) {
        newNode.next[i] = current.next[i];
        current.next[i] = newNode;
      }
    }

    this.length++;
  }
search(value) {
    let current = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
    }

    current = current.next[0];
    if (current && current.value === value) {
      return current;
    } else {
      return null;
    }
  }
delete(value) {
    let current = this.head;
    const update = new Array(this.maxLevel + 1);
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      update[i] = current;
    }

    current = current.next[0];
    if (current && current.value === value) {
      for (let i = 0; i <= this.maxLevel; i++) {
        if (update[i].next[i] !== current) {
          break;
        }
        update[i].next[i] = current.next[i];
      }

      // Update the maxLevel if necessary
      while (this.maxLevel > 0 && this.head.next[this.maxLevel] === null) {
        this.maxLevel--;
      }

      this.length--;
      return current;
    } else {
      return null;
    }
  }
randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }
