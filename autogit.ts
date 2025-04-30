// Define a Node class
class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

// Define the Queue class using Linked List
class Queue<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private size: number = 0;

  // Add an element to the end of the queue
  enqueue(value: T): void {
    const newNode = new Node(value);

    if (!this.tail) {
      // If the queue is empty, head and tail both point to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Attach new node after tail and update tail reference
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Remove and return the element from the front of the queue
  dequeue(): T | undefined {
    if (!this.head) return undefined;

    const dequeuedValue = this.head.value;
    this.head = this.head.next;

    // If after dequeue the queue is empty, reset the tail to null
    if (!this.head) {
      this.tail = null;
    }
    this.size--;
    return dequeuedValue;
  }

  // Peek at the front element without removing it
  peek(): T | undefined {
    return this.head?.value;
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.size === 0;
  }

  // Return the number of elements in the queue
  getSize(): number {
    return this.size;
  }
}
const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // 10
console.log(queue.peek());    // 20
console.log(queue.getSize()); // 2
