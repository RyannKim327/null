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
      // Queue was empty
      this.head = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  dequeue(): T | undefined {
    if (!this.head) return undefined;

    const dequeuedValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      // If queue is now empty, reset tail as well
      this.tail = null;
    }
    this.length--;
    return dequeuedValue;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}

// Example usage:
const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
console.log(queue.size()); // 2
