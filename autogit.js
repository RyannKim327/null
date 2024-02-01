class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  addToHead(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  addToTail(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeFromHead() {
    if (this.isEmpty()) {
      return undefined;
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    return value;
  }

  removeFromTail() {
    if (this.isEmpty()) {
      return undefined;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (previousNode === null) {
      // Only one element in the list
      this.head = null;
      this.tail = null;
    } else {
      previousNode.next = null;
      this.tail = previousNode;
    }

    return currentNode.value;
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }
}
const list = new LinkedList();
list.addToHead(3);
list.addToHead(2);
list.addToHead(1);

console.log(list.search(2)); // true
console.log(list.search(4)); // false

list.removeFromHead();
console.log(list.search(1)); // false
