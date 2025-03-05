// Node class
class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

// Queue class
class Queue<T> {
    private head: Node<T> | null = null; // points to the first element
    private tail: Node<T> | null = null; // points to the last element
    private length: number = 0; // tracks the number of elements in the queue

    // Enqueue method to add an element to the end of the queue
    enqueue(value: T): void {
        const newNode = new Node(value);
        if (this.tail) {
            this.tail.next = newNode; // Link the old tail to the new node
        }
        this.tail = newNode; // Set the new node as the tail
        if (!this.head) {
            this.head = newNode; // If the queue was empty, set the head to the new node
        }
        this.length++; // Increase the length of the queue
    }

    // Dequeue method to remove and return the front element of the queue
    dequeue(): T | null {
        if (!this.head) {
            return null; // If the queue is empty
        }
        const removedNode = this.head; // Get the current head
        this.head = this.head.next; // Move the head to the next node
        if (!this.head) {
            this.tail = null; // If the queue is now empty
        }
        this.length--; // Decrease the length of the queue
        return removedNode.value; // Return the value of the removed node
    }

    // Peek method to return the front element without removing it
    peek(): T | null {
        return this.head ? this.head.value : null; // Return the head value if it exists
    }

    // isEmpty method to check if the queue is empty
    isEmpty(): boolean {
        return this.length === 0;
    }

    // Size method to get the number of elements in the queue
    size(): number {
        return this.length;
    }
}

// Example usage:
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Outputs: 1
console.log(queue.peek()); // Outputs: 2
console.log(queue.size()); // Outputs: 2
console.log(queue.isEmpty()); // Outputs: false

queue.dequeue();
queue.dequeue();

console.log(queue.isEmpty()); // Outputs: true
