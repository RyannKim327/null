class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class Queue<T> {
  private head: Node<T> | null = null; // front of the queue
  private tail: Node<T> | null = null; // end of the queue
  private size = 0;

  enqueue(value: T): void {
    const newNode = new Node(value);
    if (!this.tail) {
      // If queue is empty, head and tail both point to the new node
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue(): T | null {
    if (!this.head) return null; // queue is empty
    const dequeuedValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      // If the queue became empty, tail should also be null
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
