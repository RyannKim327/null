// Define the Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Define the Queue class
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add an element to the end of the queue
  enqueue(data) {
    const newNode = new Node(data);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Remove and return the element at the front of the queue
  dequeue() {
    if (!this.head) {
      return null;
    }

    const removedNode = this.head;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.length--;

    return removedNode.data;
  }

  // Get the element at the front of the queue without removing it
  peek() {
    return this.head ? this.head.data : null;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.length;
  }
}
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size()); // Output: 3
console.log(queue.peek()); // Output: 10

console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20

console.log(queue.size()); // Output: 1
console.log(queue.isEmpty()); // Output: false
