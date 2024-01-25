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
      return null;
    }

    const removedNode = this.head;
    this.head = this.head.next;

    if (this.size === 1) {
      this.tail = null;
    }

    this.size--;
    return removedNode.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

console.log(queue.isEmpty()); // Output: false

queue.enqueue(4);
console.log(queue.dequeue()); // Output: 3
console.log(queue.dequeue()); // Output: 4

console.log(queue.isEmpty()); // Output: true
