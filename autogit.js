class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;  // points to the front of the queue
    this.rear = null;   // points to the rear of the queue
  }

  // Add an item to the rear of the queue
  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  // Remove and return the item from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.front;

    if (this.front === this.rear) {
      // only one node in the queue
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
    }

    return removedNode.value;
  }

  // Return the item at the front of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.front.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.front === null;
  }
}
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue());  // Output: 10
console.log(queue.peek());     // Output: 20
console.log(queue.isEmpty());  // Output: false
