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

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const value = this.head.value;

    if (this.head === this.tail) {
      this.tail = null;
    }

    this.head = this.head.next;
    this.size--;

    return value;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  peek() {
    return this.head ? this.head.value : null;
  }
}
const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

console.log(myQueue.getSize()); // Output: 3
console.log(myQueue.isEmpty()); // Output: false
console.log(myQueue.peek()); // Output: 10

console.log(myQueue.dequeue()); // Output: 10
console.log(myQueue.dequeue()); // Output: 20

console.log(myQueue.getSize()); // Output: 1
console.log(myQueue.isEmpty()); // Output: false
console.log(myQueue.peek()); // Output: 30
