// Node class representing each element in the linked list
class Node<T> {
    value: T;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

// Queue class implementing a queue using a linked list
class Queue<T> {
    private head: Node<T> | null = null; // Points to the front of the queue
    private tail: Node<T> | null = null; // Points to the end of the queue
    private length: number = 0;           // To keep track of the number of elements

    // Add an item to the end of the queue
    enqueue(value: T): void {
        const newNode = new Node(value);

        if (this.tail) {
            this.tail.next = newNode; // Link the new node to the end of the queue
        }
        this.tail = newNode; // Update the tail to the new node

        if (!this.head) {
            this.head = newNode; // If the queue was empty, new node is now the head as well
        }

        this.length++;
    }

    // Remove and return the item from the front of the queue
    dequeue(): T | null {
        if (!this.head) {
            return null; // If the queue is empty, return null
        }

        const dequeuedValue = this.head.value; // Get the value from the head
        this.head = this.head.next; // Move head to the next node

        if (!this.head) {
            this.tail = null; // If the queue becomes empty, also reset tail
        }

        this.length--;
        return dequeuedValue; // Return the value that was removed
    }

    // Peek at the front item without removing it
    peek(): T | null {
        return this.head ? this.head.value : null; // Return the value of the head if it exists
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.length === 0; // Returns true if length is 0
    }

    // Get the size of the queue
    size(): number {
        return this.length; // Return the number of elements in the queue
    }
}

// Example usage
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());     // Output: 2
console.log(queue.isEmpty());  // Output: false
console.log(queue.size());     // Output: 2
