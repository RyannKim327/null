// Define a Node class
class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

// Define the Queue class
class Queue<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private length: number = 0;

    // Add an element to the end of the queue
    enqueue(value: T): void {
        const newNode = new Node(value);
        if (!this.tail) {
            // If the queue is empty, set head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Otherwise, append the new node to the end and update the tail
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // Remove and return the element from the front of the queue
    dequeue(): T | null {
        if (!this.head) {
            return null; // Queue is empty
        }
        const value = this.head.value;
        this.head = this.head.next; // Move the head to the next node
        if (!this.head) {
            // If the queue is now empty, reset the tail
            this.tail = null;
        }
        this.length--;
        return value;
    }

    // Return the front element of the queue without removing it
    peek(): T | null {
        if (!this.head) {
            return null; // Queue is empty
        }
        return this.head.value;
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.length === 0;
    }

    // Return the size of the queue
    size(): number {
        return this.length;
    }
}

// Example Usage
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Outputs: 1
console.log(queue.peek());    // Outputs: 2
console.log(queue.size());     // Outputs: 2
console.log(queue.isEmpty());  // Outputs: false
