class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
class Queue<T> {
  private front: ListNode<T> | null;
  private rear: ListNode<T> | null;

  constructor() {
    this.front = null;
    this.rear = null;
  }

  // Add an element to the end of the queue
  enqueue(value: T): void {
    const newNode = new ListNode(value);
    if (this.rear === null) {
      // Queue is empty
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  // Remove and return the element at the front of the queue
  dequeue(): T | null {
    if (this.front === null) {
      return null; // Queue is empty
    }
    const dequeuedValue = this.front.value;
    this.front = this.front.next;
    if (this.front === null) {
      // Queue is now empty
      this.rear = null;
    }
    return dequeuedValue;
  }

  // Peek at the front element without removing it
  peek(): T | null {
    return this.front ? this.front.value : null;
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.front === null;
  }
}
const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek()); // Output: 10

console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20

console.log(queue.isEmpty()); // Output: false

console.log(queue.dequeue()); // Output: 30
console.log(queue.isEmpty()); // Output: true
