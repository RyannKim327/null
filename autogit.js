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
      throw new Error('Queue is empty');
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

  getSize() {
    return this.size;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }

    return this.head.value;
  }
}
const queue = new Queue();

queue.enqueue('apple');
queue.enqueue('banana');
queue.enqueue('cherry');

console.log(queue.getSize()); // Output: 3
console.log(queue.peek()); // Output: 'apple'

console.log(queue.dequeue()); // Output: 'apple'
console.log(queue.dequeue()); // Output: 'banana'
console.log(queue.peek()); // Output: 'cherry'

console.log(queue.getSize()); // Output: 1
console.log(queue.isEmpty()); // Output: false
