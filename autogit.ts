class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
class Queue<T> {
    private front: Node<T> | null;
    private back: Node<T> | null;
    private length: number;

    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    // Add an item to the back of the queue
    enqueue(value: T): void {
        const newNode = new Node(value);
        if (this.back) {
            this.back.next = newNode; // Link the old back to the new node
        }
        this.back = newNode; // Update the back to the new node
        if (!this.front) {
            this.front = newNode; // If the queue was empty, set front to the new node
        }
        this.length++;
    }

    // Remove and return the item from the front of the queue
    dequeue(): T | null {
        if (!this.front) {
            return null; // Queue is empty
        }
        const value = this.front.value; // Get the value from the front node
        this.front = this.front.next; // Move the front pointer to the next node
        if (!this.front) {
            this.back = null; // If the queue is now empty, set back to null
        }
        this.length--;
        return value;
    }

    // Peek at the front item without removing it
    peek(): T | null {
        return this.front ? this.front.value : null;
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
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());     // Output: 2
console.log(queue.size());     // Output: 2
console.log(queue.isEmpty());  // Output: false

queue.dequeue();
queue.dequeue();

console.log(queue.isEmpty());  // Output: true
