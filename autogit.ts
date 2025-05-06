class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
class Queue<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private length: number = 0;

  // Add (enqueue) an element to the end of the queue
  enqueue(value: T): void {
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    // If the queue was empty, then head should also point to the new node
    if (!this.head) {
      this.head = newNode;
    }
    
    this.length++;
  }

  // Remove (dequeue) an element from the front of the queue
  dequeue(): T | null {
    if (!this.head) {
      return null; // Queue is empty
    }

    const removedNode = this.head;
    this.head = this.head.next;

    // If we removed the last element, also reset the tail
    if (!this.head) {
      this.tail = null;
    }

    this.length--;
    return removedNode.value;
  }

  // Peek at the front element without removing it
  peek(): T | null {
    return this.head ? this.head.value : null;
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.length === 0;
  }

  // Get the current size of the queue
  size(): number {
    return this.length;
  }
}
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek());  // Output: 1
console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
console.log(queue.size());    // Output: 1
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 3
console.log(queue.isEmpty()); // Output: true
