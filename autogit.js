// Define the Node class representing a node in the list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define the LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  add(value) {
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

  remove() {
    if (this.isEmpty()) {
      return null;
    }
    const removedNode = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return removedNode.value;
  }
}

// Define the Queue class
class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.add(value);
  }

  dequeue() {
    return this.linkedList.remove();
  }

  isEmpty() {
    return this.linkedList.isEmpty();
  }

  size() {
    return this.linkedList.size;
  }
}

// Usage example
const queue = new Queue();

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);

console.log(queue.size()); // Output: 3

console.log(queue.dequeue()); // Output: 5

console.log(queue.isEmpty()); // Output: false

console.log(queue.dequeue()); // Output: 10

console.log(queue.dequeue()); // Output: 15

console.log(queue.isEmpty()); // Output: true
