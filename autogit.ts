class Node<T> {
  data: T;
  next: Node<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}
class Queue<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private length = 0;

  // Add item to the tail
  enqueue(data: T): void {
    const newNode = new Node(data);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }

    this.length++;
  }

  // Remove item from the head
  dequeue(): T | null {
    if (!this.head) return null;

    const removedData = this.head.data;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null; // queue is empty
    }
    this.length--;
    return removedData;
  }

  // Peek at the front item without removing
  peek(): T | null {
    return this.head ? this.head.data : null;
  }

  // Check if queue is empty
  isEmpty(): boolean {
    return this.length === 0;
  }

  // Get queue size
  size(): number {
    return this.length;
  }
}
const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // 10
console.log(queue.peek());    // 20
console.log(queue.size());    // 2
console.log(queue.isEmpty()); // false
