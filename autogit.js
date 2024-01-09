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
  }
}
enqueue(data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
}
dequeue() {
  if (!this.head) {
    return null;
  }
  const removedNode = this.head;
  this.head = this.head.next;
  if (!this.head) {
    this.tail = null;
  }
  return removedNode.data;
}
isEmpty() {
  return this.head === null && this.tail === null;
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // Output: 10
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 20
console.log(queue.dequeue()); // Output: 30
console.log(queue.isEmpty()); // Output: true
