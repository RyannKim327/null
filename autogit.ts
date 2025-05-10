// Define the node structure
class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

// Queue implemented using a linked list
class Queue<T> {
  private front: Node<T> | null = null;
  private rear: Node<T> | null = null;
  private size: number = 0;

  // Add an element to the rear of the queue
  enqueue(value: T): void {
    const newNode = new Node(value);
    if (!this.rear) {
      // Queue is empty
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  // Remove and return the element at the front of the queue
  dequeue(): T | null {
    if (!this.front) return null;
    const removedValue = this.front.value;
    this.front = this.front.next;
    if (!this.front) {
      // Queue became empty
      this.rear = null;
    }
    this.size--;
    return removedValue;
  }

  // Look at the front element without removing it
  peek(): T | null {
    return this.front ? this.front.value : null;
  }

  // Return the number of elements in queue
  getSize(): number {
    return this.size;
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.size === 0;
  }
}

// Example usage:
const queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // 10
console.log(queue.peek());    // 20
console.log(queue.getSize()); // 2
console.log(queue.isEmpty()); // false
