// Node class to represent each element in the queue
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Queue class to implement the queue using linked list
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // Method to add an element to the queue
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  // Method to remove an element from the queue
  dequeue() {
    if (!this.front) {
      return null;
    }
    let removedValue = this.front.value;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null;
    }
    this.size--;
    return removedValue;
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Method to get the size of the queue
  getSize() {
    return this.size;
  }

  // Method to get the front element of the queue
  getFront() {
    if (!this.front) {
      return null;
    }
    return this.front.value;
  }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.getFront()); // Output: 2
console.log(queue.getSize()); // Output: 2
console.log(queue.isEmpty()); // Output: false
