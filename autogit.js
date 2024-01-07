class ListNode {
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
  const newNode = new ListNode(value);

  if (!this.head) {
    // If the queue is empty, set the new node as both head and tail
    this.head = newNode;
    this.tail = newNode;
  } else {
    // Otherwise, add the new node to the tail and update the tail
    this.tail.next = newNode;
    this.tail = newNode;
  }
}
dequeue() {
  if (!this.head) {
    // If the queue is empty, return null
    return null;
  }

  const removedNode = this.head;
  this.head = this.head.next;

  if (!this.head) {
    // If the queue becomes empty, update the tail to null
    this.tail = null;
  }

  return removedNode.value;
}
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20
