// Node class represents a single node in the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Queue class represents a queue implemented using a linked list
class Queue {
  constructor() {
    this.head = null; // Points to the head of the queue (front)
    this.tail = null; // Points to the tail of the queue (rear)
    this.length = 0; // Stores the number of elements in the queue
  }

  // Enqueue adds an element at the rear of the queue
  enqueue(value) {
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

  // Dequeue removes an element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    this.length--;
    return value;
  }

  // Peek returns the element at the front of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }

    return this.head.value;
  }

  // isEmpty checks if the queue is empty
  isEmpty() {
    return this.length === 0;
  }

  // size returns the number of elements in the queue
  size() {
    return this.length;
  }
}

// Usage example:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // Output: 1

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

console.log(queue.size()); // Output: 1

console.log(queue.isEmpty()); // Output: false
