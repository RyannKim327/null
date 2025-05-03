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
  private size: number = 0;

  enqueue(value: T): void {
    const newNode = new Node(value);
    if (!this.tail) {
      // Queue is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Append to tail and update tail pointer
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue(): T | null {
    if (!this.head) {
      return null; // Queue is empty
    }
    const dequeuedValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      // If queue became empty, update tail as well
      this.tail = null;
    }
    this.size--;
    return dequeuedValue;
  }

  peek(): T | null {
    return this.head ? this.head.value : null;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }
}
const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek()); // 10
console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
console.log(queue.getSize()); // 2
