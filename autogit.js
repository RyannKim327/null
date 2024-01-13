// Define the linked list node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define the queue class
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add an element to the end of the queue
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

  // Remove and return an element from the front of the queue
  dequeue() {
    if (this.head === null) {
      return null; // Queue is empty
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.size--;

    if (this.head === null) {
      this.tail = null; // Queue is now empty
    }

    return value;
  }

  // Return the number of elements in the queue
  getSize() {
    return this.size;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Peek at the element at the front of the queue without removing it
  peek() {
    if (this.head === null) {
      return null; // Queue is empty
    }

    return this.head.value;
  }
}

// Usage example
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.getSize()); // Output: 3
console.log(queue.peek()); // Output: 1

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

console.log(queue.isEmpty()); // Output: false
console.log(queue.getSize()); // Output: 1
