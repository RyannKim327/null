// Node class represents each element in the linked list
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

  // Add to the end (tail) of the queue
  enqueue(value: T): void {
    const newNode = new Node(value);

    if (!this.tail) {
      // If queue is empty, head and tail are the same
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Link the new node to the end and move the tail pointer
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // Remove from the front (head) of the queue
  dequeue(): T | null {
    if (!this.head) {
      return null; // Queue is empty
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.size--;

    if (!this.head) {
      // If queue becomes empty, reset tail to null as well
      this.tail = null;
    }

    return value;
  }

  // Check the element at the front of the queue without removing it
  peek(): T | null {
    return this.head ? this.head.value : null;
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.size === 0;
  }

  // Get the size of the queue
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
console.log(queue.dequeue()); // 20
console.log(queue.getSize()); // 1
console.log(queue.isEmpty()); // false
