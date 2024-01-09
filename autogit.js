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
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
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

    this.length++;
  }

  removeFromHead() {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;

    return removedNode.value;
  }
}

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.addToTail(value);
  }

  dequeue() {
    return this.linkedList.removeFromHead();
  }

  isEmpty() {
    return this.linkedList.isEmpty();
  }

  peek() {
    return this.linkedList.head ? this.linkedList.head.value : null;
  }

  size() {
    return this.linkedList.length;
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.size()); // Output: 3
console.log(queue.isEmpty()); // Output: false
console.log(queue.peek()); // Output: 1

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
console.log(queue.dequeue()); // Output: 3

console.log(queue.isEmpty()); // Output: true
console.log(queue.peek()); // Output: null
console.log(queue.size()); // Output: 0
