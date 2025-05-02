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
    if (!this.tail) {
      // Queue is empty, both head and tail point to new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Append to the end and update tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue(): T | null {
    if (!this.head) {
      // Queue is empty
      return null;
    }

    const dequeuedValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      // If head is null now, tail should also be null
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

// Example usage:
const q = new Queue<number>();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.dequeue()); // 10
console.log(q.peek());    // 20
console.log(q.size());    // 2
