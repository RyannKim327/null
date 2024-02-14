class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null; // reference to the front of the queue
    this.tail = null; // reference to the end of the queue
  }

  // Add an item to the end of the queue
  enqueue(value) {
    const newNode = new Node(value);
    
    if (this.isEmpty()) {
      // If the queue is empty, update both head and tail references
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the queue is not empty, update the tail reference
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Remove and return the item from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return null; // If the queue is empty, return null
    }

    const removedNode = this.head;
    this.head = this.head.next; // Move the head reference to the next node

    if (this.head === null) {
      // If the head becomes null after dequeue, update the tail reference
      this.tail = null;
    }
    
    return removedNode.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.head === null;
  }
}
const queue = new Queue();

queue.enqueue(1);    // [1]
queue.enqueue(2);    // [1, 2]
queue.enqueue(3);    // [1, 2, 3]

console.log(queue.dequeue());    // 1, [2, 3]
console.log(queue.dequeue());    // 2, [3]

console.log(queue.isEmpty());    // false

queue.enqueue(4);    // [3, 4]

console.log(queue.dequeue());    // 3, [4]
console.log(queue.dequeue());    // 4, []

console.log(queue.isEmpty());    // true
