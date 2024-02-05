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
    this.size = 0;
  }

  // Add an element to the back of the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Remove and return the element at the front of the queue
  dequeue() {
    if (this.head === null) {
      return null; // Return null if the queue is empty
    }
    const removedNode = this.head;
    this.head = this.head.next;
    removedNode.next = null;
    if (this.head === null) {
      this.tail = null;
    }
    this.size--;
    return removedNode.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the number of elements in the queue
  getSize() {
    return this.size;
  }

  // Peek and return the element at the front of the queue without removing it
  peek() {
    return this.head ? this.head.value : null;
  }

  // Clear the queue
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}
const queue = new Queue();

queue.enqueue(10); // Add elements to the queue
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.getSize()); // Output: 3

console.log(queue.peek()); // Output: 10

console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20

console.log(queue.getSize()); // Output: 1
console.log(queue.isEmpty()); // Output: false

queue.clear(); // Clear the queue

console.log(queue.isEmpty()); // Output: true
