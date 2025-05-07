// Node class to represent each element in the linked list
class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

// Queue class using linked list
class Queue<T> {
  private head: Node<T> | null = null;  // front of the queue
  private tail: Node<T> | null = null;  // rear of the queue
  private length: number = 0;

  // Add element to the end of the queue
  enqueue(value: T): void {
    const newNode = new Node(value);

    if (!this.tail) {
      // If the queue is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Remove element from the front of the queue
  dequeue(): T | undefined {
    if (!this.head) return undefined;

    const value = this.head.value;
    this.head = this.head.next;

    // If the queue becomes empty, reset tail as well
    if (!this.head) {
      this.tail = null;
    }

    this.length--;
    return value;
  }

  // Peek at the front element without removing it
  peek(): T | undefined {
    return this.head?.value;
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.length === 0;
  }

  // Get the size of the queue
  size(): number {
    return this.length;
  }
}
