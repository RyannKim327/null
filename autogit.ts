// Define a Node class to hold data and a pointer to the next node
class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

// Queue class using a linked list
class Queue<T> {
  private head: Node<T> | null = null; // front of the queue
  private tail: Node<T> | null = null; // end of the queue
  private length: number = 0;

  // Add element to the tail
  enqueue(value: T): void {
    const newNode = new Node(value);
    if (!this.tail) {
      // If queue is empty, head and tail are the new node
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Remove and return element from the head
  dequeue(): T | undefined {
    if (!this.head) return undefined; // queue is empty
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      // If queue is now empty, reset tail to null
      this.tail = null;
    }
    this.length--;
    return value;
  }

  // Peek at the front without removing
  peek(): T | undefined {
    return this.head?.value;
  }

  // Check if empty
  isEmpty(): boolean {
    return this.length === 0;
  }

  // Get the size of the queue
  size(): number {
    return this.length;
  }
}
const q = new Queue<number>();
q.enqueue(10);
q.enqueue(20);
console.log(q.dequeue()); // 10
console.log(q.peek()); // 20
console.log(q.size()); // 1
console.log(q.isEmpty()); // false
