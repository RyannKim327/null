class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
class Queue<T> {
    private head: Node<T> | null = null; // The first node in the queue
    private tail: Node<T> | null = null; // The last node in the queue
    private length: number = 0;           // Size of the queue

    // Enqueue a new element
    enqueue(value: T): void {
        const newNode = new Node(value);
        if (this.tail) {
            this.tail.next = newNode; // Link the new node to the last node
        }
        this.tail = newNode; // Update the tail to the new node

        if (!this.head) {
            this.head = newNode; // If the queue was empty, head is also the new node
        }

        this.length++; // Increment the size of the queue
    }

    // Dequeue an element
    dequeue(): T | null {
        if (!this.head) {
            return null; // Return null if the queue is empty
        }

        const dequeuedValue = this.head.value; // Store the value to return
        this.head = this.head.next; // Move the head to the next node

        if (!this.head) {
            this.tail = null; // If the queue is now empty, reset tail
        }

        this.length--; // Decrement the size of the queue
        return dequeuedValue; // Return the dequeued value
    }

    // Return the size of the queue
    size(): number {
        return this.length;
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.length === 0;
    }

    // Peek at the front element of the queue without removing it
    peek(): T | null {
        return this.head ? this.head.value : null;
    }
}
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Outputs: 1
console.log(queue.peek());     // Outputs: 2
console.log(queue.size());     // Outputs: 2
console.log(queue.isEmpty());  // Outputs: false

queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty());  // Outputs: true
