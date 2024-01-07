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

  // Add an element to the end of the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Remove and return the first element in the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const removedNode = this.head;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.size--;
    return removedNode.value;
  }

  // Get the first element in the queue
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.head.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the size of the queue
  getSize() {
    return this.size;
  }
}

// Example usage:
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.dequeue()); // Output: 1
console.log(myQueue.peek()); // Output: 2
console.log(myQueue.getSize()); // Output: 2
