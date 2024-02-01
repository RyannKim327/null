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
    this.length = 0;
  }

  // Pushes an element to the back of the queue
  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Removes and returns the element from the front of the queue
  dequeue() {
    if (this.length === 0) {
      return null;
    }

    const removedNode = this.head;
    this.head = this.head.next;
    removedNode.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return removedNode.value;
  }

  // Returns the element at the front of the queue without removing it
  peek() {
    if (this.length === 0) {
      return null;
    }

    return this.head.value;
  }

  // Returns the size of the queue
  size() {
    return this.length;
  }

  // Checks if the queue is empty
  isEmpty() {
    return this.length === 0;
  }
}
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // Output: 1

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

console.log(queue.size()); // Output: 1

console.log(queue.isEmpty()); // Output: false
