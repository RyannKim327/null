class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Reference to the next node
  }
}
class Queue {
  constructor() {
    this.front = null; // Pointer to the front of the queue
    this.rear = null; // Pointer to the rear of the queue
  }
}
class Queue {
  // ...

  enqueue(value) {
    const newNode = new Node(value);
    if (this.rear === null) {
      // The queue was empty, so both front and rear point to the new node
      this.front = newNode;
      this.rear = newNode;
    } else {
      // Append the new node to the rear and update the rear pointer
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }
}
class Queue {
  // ...

  dequeue() {
    if (this.front === null) {
      // The queue is empty
      return null;
    }
    
    const removedNode = this.front;
    this.front = this.front.next;

    // If the front becomes null, the queue is now empty, so update rear as well
    if (this.front === null) {
      this.rear = null;
    }

    return removedNode.value;
  }
}
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20
console.log(queue.dequeue()); // Output: 30
console.log(queue.dequeue()); // Output: null, as the queue is now empty
