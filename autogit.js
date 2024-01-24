class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);

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

    const removedNode = this.head;
    this.head = this.head.next;
    removedNode.next = null;

    if (this.head === null) {
      this.tail = null;
    }

    this.size--;
    return removedNode.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.head.data;
  }
}
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // Output: 1

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

console.log(queue.getSize()); // Output: 1

console.log(queue.dequeue()); // Output: 3

console.log(queue.isEmpty()); // Output: true
