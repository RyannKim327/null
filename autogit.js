class SkipListNode {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level);
  }
}

class SkipList {
  constructor() {
    this.head = new SkipListNode(-Infinity, 1);
    this.tail = new SkipListNode(Infinity, 1);
    this.head.next[0] = this.tail;
    this.maxLevel = 1; // Current maximum level
    this.probability = 0.5; // Probability for a node to be at the next level
  }

  randomLevel() {
    let level = 1;
    while (Math.random() < this.probability && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  insert(value) {
    const newNode = new SkipListNode(value, this.randomLevel());
    const update = new Array(this.maxLevel);

    let currentNode = this.head;
    for (let i = this.maxLevel - 1; i >= 0; i--) {
      while (currentNode.next[i].value < value) {
        currentNode = currentNode.next[i];
      }
      update[i] = currentNode;
    }

    for (let i = 0; i < newNode.next.length; i++) {
      newNode.next[i] = update[i].next[i];
      update[i].next[i] = newNode;
    }

    if (newNode.next.length > this.maxLevel) {
      this.maxLevel = newNode.next.length;
    }
  }

  search(value) {
    let currentNode = this.head;
    for (let i = this.maxLevel - 1; i >= 0; i--) {
      while (currentNode.next[i].value < value) {
        currentNode = currentNode.next[i];
      }
    }

    if (currentNode.next[0].value === value) {
      return currentNode.next[0];
    } else {
      return null;
    }
  }

  remove(value) {
    const update = new Array(this.maxLevel);
    let currentNode = this.head;

    for (let i = this.maxLevel - 1; i >= 0; i--) {
      while (currentNode.next[i].value < value) {
        currentNode = currentNode.next[i];
      }
      update[i] = currentNode;
    }

    const nodeToRemove = currentNode.next[0];

    if (nodeToRemove.value === value) {
      for (let i = 0; i < nodeToRemove.next.length; i++) {
        update[i].next[i] = nodeToRemove.next[i];
      }

      while (
        this.maxLevel > 1 &&
        this.head.next[this.maxLevel - 1] === this.tail
      ) {
        this.maxLevel--;
      }
    }
  }

  print() {
    let currentNode = this.head.next[0];
    let output = "";
    while (currentNode !== this.tail) {
      output += currentNode.value + " -> ";
      currentNode = currentNode.next[0];
    }
    console.log(output + "null");
  }
}
const skipList = new SkipList();

skipList.insert(3);
skipList.insert(1);
skipList.insert(5);
skipList.insert(2);

skipList.print(); // Output: -Infinity -> 1 -> 2 -> 3 -> 5 -> Infinity -> null

console.log(skipList.search(5)); // Output: SkipListNode { value: 5, next: [ [SkipListNode] ] }

skipList.remove(3);

skipList.print(); // Output: -Infinity -> 1 -> 2 -> 5 -> Infinity -> null
