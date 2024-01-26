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
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      throw new Error('Queue is empty');
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
    }
    return value;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  peek() {
    if (this.size === 0) {
      throw new Error('Queue is empty');
    }
    return this.head.value;
  }
}
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.getSize()); // Output: 3
console.log(queue.peek()); // Output: 1

console.log(queue.dequeue()); // Output: 1

console.log(queue.getSize()); // Output: 2
console.log(queue.peek()); // Output: 2

console.log(queue.isEmpty()); // Output: false
