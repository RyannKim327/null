// Define a class for a linked list node
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define a class for a linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add a new node to the end of the linked list
  append(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Remove and return the value of the first node in the linked list
  remove() {
    if (!this.head) {
      return null; // Empty list
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null; // Reset tail if list becomes empty
    }

    return value;
  }

  // Check if the linked list is empty
  isEmpty() {
    return this.head === null;
  }
}

// Define a class for a queue using a linked list
class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  // Add an element to the end of the queue
  enqueue(value) {
    this.list.append(value);
  }

  // Remove and return the element at the front of the queue
  dequeue() {
    return this.list.remove();
  }

  // Check if the queue is empty
  isEmpty() {
    return this.list.isEmpty();
  }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 3
console.log(queue.isEmpty()); // Output: true
