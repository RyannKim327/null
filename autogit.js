class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  // Add an element to the rear of the queue
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

  // Remove and return the element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const removedNode = this.front;
    if (this.front === this.rear) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
    }
    return removedNode.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.front === null;
  }

  // Get the element at the front of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.value;
  }

  // Print the elements of the queue
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let current = this.front;
      let elements = "";
      while (current) {
        elements += current.value + " ";
        current = current.next;
      }
      console.log(elements.trim());
    }
  }
}
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print(); // Output: 1 2 3

console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2

queue.print(); // Output: 2 3
