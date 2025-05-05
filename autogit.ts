class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
class Queue<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add an element to the end of the queue
    enqueue(value: T): void {
        const newNode = new Node(value);
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
        this.size++;
    }

    // Remove and return the element from the front of the queue
    dequeue(): T | null {
        if (!this.head) {
            return null; // Queue is empty
        }
        const dequeuedValue = this.head.value;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null; // Queue is empty after dequeue
        }
        this.size--;
        return dequeuedValue;
    }

    // Peek at the front element without removing it
    peek(): T | null {
        return this.head ? this.head.value : null;
    }

    // Get the current size of the queue
    getSize(): number {
        return this.size;
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.size === 0;
    }
}
const queue = new Queue<number>();

// Enqueue elements
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// Peek at the front element
console.log(queue.peek()); // Output: 1

// Dequeue elements
console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

// Check the size
console.log(queue.getSize()); // Output: 1

// Check if the queue is empty
console.log(queue.isEmpty()); // Output: false

// Dequeue the last element
console.log(queue.dequeue()); // Output: 3

// Check if the queue is empty
console.log(queue.isEmpty()); // Output: true
