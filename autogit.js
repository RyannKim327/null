// Create a Node class that represents a node in the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create a LinkedList class to implement the queue
class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
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
  }

  // Remove and return the first element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.head;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    return removedNode.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.head === null;
  }
}
const queue = new LinkedListQueue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20
console.log(queue.isEmpty()); // Output: false
