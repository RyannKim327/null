class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}
class Queue<T> {
  private front: Node<T> | null = null;
  private rear: Node<T> | null = null;
  private length: number = 0;

  enqueue(value: T): void {
    const newNode = new Node(value);

    if (!this.rear) {
      // Empty queue
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.length++;
  }

  dequeue(): T | null {
    if (!this.front) {
      return null; // Queue is empty
    }

    const dequeuedValue = this.front.value;
    this.front = this.front.next;

    // If the queue is now empty, reset rear as well
    if (!this.front) {
      this.rear = null;
    }

    this.length--;
    return dequeuedValue;
  }

  peek(): T | null {
    return this.front ? this.front.value : null;
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}
const queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // 10
console.log(queue.peek());    // 20
console.log(queue.size());    // 2
