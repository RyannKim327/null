class SkipListNode {
  constructor(value) {
    this.value = value;
    this.nextNodes = [];
  }
}
class SkipList {
  constructor() {
    this.head = new SkipListNode(-Infinity);
    this.maxLevel = 0;
  }
}
class SkipList {
  // ...

  search(value) {
    let currentNode = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (
        currentNode.nextNodes[i] &&
        currentNode.nextNodes[i].value < value
      ) {
        currentNode = currentNode.nextNodes[i];
      }
    }

    currentNode = currentNode.nextNodes[0];

    if (currentNode && currentNode.value === value) {
      return currentNode;
    } else {
      return null;
    }
  }
}
class SkipList {
  // ...

  insert(value) {
    const newNode = new SkipListNode(value);
    const update = new Array(this.maxLevel + 1).fill(this.head);

    let currentNode = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (
        currentNode.nextNodes[i] &&
        currentNode.nextNodes[i].value < value
      ) {
        currentNode = currentNode.nextNodes[i];
      }
      update[i] = currentNode;
    }

    for (let i = 0; i < newNode.nextNodes.length; i++) {
      newNode.nextNodes[i] = update[i].nextNodes[i];
      update[i].nextNodes[i] = newNode;
    }

    if (this.maxLevel < newNode.nextNodes.length - 1) {
      this.maxLevel = newNode.nextNodes.length - 1;
    }
  }
}
class SkipList {
  // ...

  delete(value) {
    const update = new Array(this.maxLevel + 1).fill(this.head);

    let currentNode = this.head;

    for (let i = this.maxLevel; i >= 0; i--) {
      while (
        currentNode.nextNodes[i] &&
        currentNode.nextNodes[i].value < value
      ) {
        currentNode = currentNode.nextNodes[i];
      }
      update[i] = currentNode;
    }

    currentNode = currentNode.nextNodes[0];

    if (currentNode && currentNode.value === value) {
      for (let i = 0; i < currentNode.nextNodes.length; i++) {
        update[i].nextNodes[i] = currentNode.nextNodes[i];
      }

      while (this.maxLevel > 0 && this.head.nextNodes[this.maxLevel] === null) {
        this.maxLevel--;
      }

      return true;
    } else {
      return false;
    }
  }
}
