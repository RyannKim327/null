class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
}
enqueue(value) {
  const newNode = new Node(value);
  if (!this.first) {
    this.first = newNode;
    this.last = newNode;
  } else {
    this.last.next = newNode;
    this.last = newNode;
  }
}
dequeue() {
  if (!this.first) {
    return null;
  }
  const removedNode = this.first;
  if (this.first === this.last) {
    this.last = null;
  }
  this.first = this.first.next;
  return removedNode.value;
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
