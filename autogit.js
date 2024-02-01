// Node class to represent each element in the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Queue class to manage the operations of the queue
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Method to add an element to the end of the queue
  enqueue(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // Method to remove and return the first element in the queue
  dequeue() {
    if (this.size === 0) {
      throw new Error("Queue is empty");
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.size--;

    if (this.size === 0) {
      this.tail = null;
    }

    return value;
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Method to get the size of the queue
  getSize() {
    return this.size;
  }

  // Method to get the first element in the queue without removing it
  peek() {
    if (this.size === 0) {
      throw new Error("Queue is empty");
    }

    return this.head.value;
  }
}

// Example usage
const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

console.log(queue.peek()); // Output: "A"
console.log(queue.getSize()); // Output: 3

console.log(queue.dequeue()); // Output: "A"
console.log(queue.peek()); // Output: "B"

console.log(queue.isEmpty()); // Output: false
console.log(queue.getSize()); // Output: 2
