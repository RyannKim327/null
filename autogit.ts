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
    } else {
      this.head = newNode; // First node being added
    }
    this.tail = newNode;
    this.length++;
  }

  dequeue(): T | null {
    if (!this.head) {
      return null; // Queue is empty
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null; // Empty queue after dequeuing
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
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
console.log(queue.peek());    // 2
console.log(queue.isEmpty()); // false
console.log(queue.size());    // 1
