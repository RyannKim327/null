class Node<T> {
    value: T;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}
class Queue<T> {
    private head: Node<T> | null = null; // Points to the front of the queue
    private tail: Node<T> | null = null; // Points to the end of the queue
    private length: number = 0; // Track the size of the queue

    // Add an item to the end of the queue
    enqueue(value: T): void {
        const newNode = new Node(value);
        if (this.tail) {
            this.tail.next = newNode; // Link the current tail to the new node
        }
        this.tail = newNode; // Move the tail to the new node
        if (!this.head) {
            this.head = newNode; // If the queue was empty, now the head is the new node
        }
        this.length++; // Increase the size of the queue
    }

    // Remove and return the item from the front of the queue
    dequeue(): T | null {
        if (!this.head) {
            return null; // Queue is empty
        }
        const value = this.head.value; // Get value from the head node
        this.head = this.head.next; // Move head to the next node
        if (!this.head) {
            this.tail = null; // If the queue is now empty, tail should also be null
        }
        this.length--; // Decrease the size of the queue
        return value; // Return the dequeued value
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.length === 0;
    }

    // Get the size of the queue
    size(): number {
        return this.length;
    }

    // Peek at the front item without removing it
    peek(): T | null {
        return this.head ? this.head.value : null;
    }
}
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Outputs: 1
console.log(queue.dequeue()); // Outputs: 2
console.log(queue.peek());     // Outputs: 3
console.log(queue.isEmpty());  // Outputs: false
console.log(queue.size());      // Outputs: 1
