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
      // Queue is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Link the new node at the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  dequeue(): T | null {
    if (!this.head) return null; // Queue empty

    const dequeuedValue = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      // Queue is empty now, reset tail as well
      this.tail = null;
    }

    this.length--;
    return dequeuedValue;
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
