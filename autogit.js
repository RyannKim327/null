class Node {
  constructor(data) {
    this.data = data;    // Data stored in the node
    this.next = null;    // Reference to the next node in the queue
  }
}
class Queue {
  constructor() {
    this.head = null;    // Reference to the front of the queue
    this.tail = null;    // Reference to the rear of the queue
  }
}
enqueue(data) {
  const newNode = new Node(data);
  if (this.head === null) {    // If the queue is empty
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
}
dequeue() {
  if (this.head === null) {    // If the queue is empty
    return null;
  } else {
    const dequeuedNode = this.head;
    this.head = this.head.next;
    if (this.head === null) {    // If the queue is now empty
      this.tail = null;
    }
    return dequeuedNode.data;
  }
}
isEmpty() {
  return this.head === null;
}
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());    // Output: 1
console.log(queue.dequeue());    // Output: 2
console.log(queue.dequeue());    // Output: 3

console.log(queue.isEmpty());    // Output: true
