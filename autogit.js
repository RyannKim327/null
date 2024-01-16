class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}
class Queue {
  // ...

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // If the queue is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the queue has elements
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}
class Queue {
  // ...

  dequeue() {
    if (!this.head) {
      // If the queue is empty
      return null;
    }

    const removedNode = this.head;
    this.head = this.head.next;

    if (!this.head) {
      // If the queue had only one element
      this.tail = null;
    }

    return removedNode.value;
  }
}
