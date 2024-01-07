class Node {
  constructor(value, level) {
    this.value = value;
    this.next = Array(level + 1).fill(null);
  }
}

class SkipList {
  constructor() {
    this.head = new Node(-Infinity, 0);
    this.level = 0;
  }

  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.level + 1) {
      level++;
    }
    return level;
  }

  insert(value) {
    const update = Array(this.level + 1).fill(null);
    let current = this.head;

    for (let i = this.level; i >= 0; i--) {
      while (current.next[i] !== null && current.next[i].value < value) {
        current = current.next[i];
      }
      update[i] = current;
    }

    const newNode = new Node(value, this.randomLevel());
    if (newNode.next.length > this.level) {
      this.level = newNode.next.length - 1;
      update.push(this.head);
    }

    for (let i = 0; i < newNode.next.length; i++) {
      newNode.next[i] = update[i].next[i];
      update[i].next[i] = newNode;
    }
  }

  search(value) {
    let current = this.head;

    for (let i = this.level; i >= 0; i--) {
      while (current.next[i] !== null && current.next[i].value < value) {
        current = current.next[i];
      }
    }

    if (
      current.next[0] !== null &&
      current.next[0].value === value
    ) {
      return current.next[0];
    }

    return null;
  }

  delete(value) {
    const update = Array(this.level + 1).fill(null);
    let current = this.head;

    for (let i = this.level; i >= 0; i--) {
      while (current.next[i] !== null && current.next[i].value < value) {
        current = current.next[i];
      }
      update[i] = current;
    }

    current = current.next[0];

    if (current !== null && current.value === value) {
      for (let i = 0; i < current.next.length; i++) {
        update[i].next[i] = current.next[i];
      }

      while (this.level > 0 && this.head.next[this.level] === null) {
        this.level--;
      }

      return current;
    }

    return null;
  }

  print() {
    let current = this.head.next[0];
    let output = '';
    while (current !== null) {
      output += current.value + ' -> ';
      current = current.next[0];
    }
    console.log(output);
  }
}

// Example usage
const skipList = new SkipList();
skipList.insert(3);
skipList.insert(7);
skipList.insert(5);
skipList.insert(10);
skipList.print(); // Output: 3 -> 5 -> 7 -> 10 ->
console.log(skipList.search(7)); // Output: Node { value: 7, next: [...] }
skipList.delete(7);
skipList.print(); // Output: 3 -> 5 -> 10 ->
