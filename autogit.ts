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

  // Add an element to the end of the queue
  enqueue(value: T): void {
    const newNode = new Node(value);
    if (!this.tail) {
      // Queue is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Remove and return the element at the front of the queue
  dequeue(): T | null {
    if (!this.head) return null;

    const dequeuedValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      // Queue became empty
      this.tail = null;
    }

    this.length--;
    return dequeuedValue;
  }

  // Return the element at the front without removing it
  peek(): T | null {
    return this.head ? this.head.value : null;
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.length === 0;
  }

  // Get the current size of the queue
  size(): number {
    return this.length;
  }
}
