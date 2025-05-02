class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class Queue<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private length: number = 0;

  enqueue(value: T): void {
    const newNode = new Node(value);
    if (!this.tail) {
      // Empty queue
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue(): T | null {
    if (!this.head) return null; // Empty queue
    const dequeuedValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      // Queue is now empty, reset tail as well
      this.tail = null;
    }
    this.length--;
    return dequeuedValue;
  }

  peek(): T | null {
    return this.head ? this.head.value : null;
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
console.log(queue.dequeue()); // 10
console.log(queue.peek());    // 20
console.log(queue.size());    // 1
console.log(queue.isEmpty()); // false
