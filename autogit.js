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

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.head;
    this.head = this.head.next;

    if (this.isEmpty()) {
      this.tail = null;
    }

    return removedNode.value;
  }
}

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return this.linkedList.isEmpty();
  }

  enqueue(value) {
    this.linkedList.enqueue(value);
  }

  dequeue() {
    return this.linkedList.dequeue();
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());  // Output: 1
console.log(queue.dequeue());  // Output: 2
console.log(queue.dequeue());  // Output: 3
console.log(queue.dequeue());  // Output: null (queue is empty)
