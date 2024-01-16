class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null; // points to the front of the queue
    this.rear = null; // points to the rear of the queue
  }
}
Queue.prototype.enqueue = function (value) {
  const newNode = new ListNode(value);

  if (this.rear === null) {
    // if the queue is empty, set both front and rear to the new node
    this.front = newNode;
    this.rear = newNode;
  } else {
    // otherwise, add the new node to the rear and update the rear pointer
    this.rear.next = newNode;
    this.rear = newNode;
  }
};
Queue.prototype.dequeue = function () {
  if (this.front === null) {
    // if the queue is empty, return null
    return null;
  }

  const removedNode = this.front;
  this.front = this.front.next;

  if (this.front === null) {
    // if the front becomes null, update the rear to null as well
    this.rear = null;
  }

  return removedNode.value;
};
Queue.prototype.isEmpty = function () {
  return this.front === null;
};
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

console.log(queue.isEmpty()); // Output: false

console.log(queue.dequeue()); // Output: 3

console.log(queue.isEmpty()); // Output: true
