class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newNode = new Node(value, this.head);
    if (!this.head) {
      this.tail = newNode;
    }
    this.head = newNode;
  }

  addToTail(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  removeHead() {
    if (!this.head) {
      return null;
    }
    const removedValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return removedValue;
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  remove(value) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === value) {
      return this.removeHead();
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        const removedValue = currentNode.next.value;
        currentNode.next = currentNode.next.next;
        if (!currentNode.next) {
          this.tail = currentNode;
        }
        return removedValue;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
