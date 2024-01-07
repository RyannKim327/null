class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (this.head === null) {
      return null; // No elements in the queue
    }

    const removedNode = this.head;

    if (this.head === this.tail) {
      this.tail = null;
    }

    this.head = this.head.next;
    this.size--;

    return removedNode.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}
const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');

console.log(queue.dequeue()); // Output: A
console.log(queue.dequeue()); // Output: B

console.log(queue.getSize()); // Output: 1
console.log(queue.isEmpty()); // Output: false
