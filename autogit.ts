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
  private length = 0;

  enqueue(value: T): void {
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }

    this.length++;
  }

  dequeue(): T | null {
    if (!this.head) return null;

    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null; // Queue is empty now
    }
    this.length--;
    return value;
  }

  peek(): T | null {
    return this.head ? this.head.value : null;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  size(): number {
    return this.length;
  }
}
const queue = new Queue<number>();
queue.enqueue(5);
queue.enqueue(10);
console.log(queue.peek());  // 5
console.log(queue.dequeue()); // 5
console.log(queue.size());    // 1
console.log(queue.isEmpty()); // false
