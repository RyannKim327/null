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
    return null; // Empty queue
  }
  const value = this.head.value;
  this.head = this.head.next;
  if (this.head === null) {
    this.tail = null; // Last item removed
  }
  return value;
}
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.dequeue()); // Output: 1
console.log(myQueue.dequeue()); // Output: 2
console.log(myQueue.dequeue()); // Output: 3
