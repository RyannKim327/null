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
  }
}
enqueue(value) {
  const newNode = new Node(value);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
}
dequeue() {
  if (this.head === null) {
    return null;
  }
  const value = this.head.value;
  this.head = this.head.next;
  if (this.head === null) {
    this.tail = null;
  }
  return value;
}
isEmpty() {
  return this.head === null && this.tail === null;
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 3
console.log(queue.isEmpty()); // Output: true
