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

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    if (this.isEmpty()) {
      this.tail = null;
    }
    return value;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.isEmpty() ? null : this.head.value;
  }

  getSize() {
    return this.size;
  }
}
// Create a new queue
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek()); // Output: 10
console.log(queue.getSize()); // Output: 3

console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20

console.log(queue.peek()); // Output: 30
console.log(queue.isEmpty()); // Output: false
