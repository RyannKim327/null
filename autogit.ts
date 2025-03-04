// Define a Node class
class Node<T> {
    value: T;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

// Define a Queue class
class Queue<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private size: number = 0;

    // Add an element to the end of the queue (enqueue)
    enqueue(value: T): void {
        const newNode = new Node(value);
        if (this.tail) {
            this.tail.next = newNode; // Link the old tail to the new node
        }
        this.tail = newNode; // Update the tail to the new node

        // If the queue was empty, update the head as well
        if (!this.head) {
            this.head = newNode;
        }
        this.size++;
    }

    // Remove and return the element from the front of the queue (dequeue)
    dequeue(): T | null {
        if (!this.head) {
            return null; // Queue is empty
        }
        const dequeuedNode = this.head;
        this.head = this.head.next; // Move head to the next node
        if (!this.head) {
            this.tail = null; // If queue is now empty, reset tail as well
        }
        this.size--;
        return dequeuedNode.value; // Return dequeued value
    }

    // Peek at the front element of the queue without removing it
    peek(): T | null {
        return this.head ? this.head.value : null; // Return the head value if present
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.size === 0;
    }

    // Get the current size of the queue
    getSize(): number {
        return this.size;
    }
}

// Example usage
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());    // Output: 2
console.log(queue.isEmpty()); // Output: false
console.log(queue.getSize()); // Output: 2
