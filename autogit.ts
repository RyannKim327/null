class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class Queue<T> {
    private front: Node<T> | null = null;
    private rear: Node<T> | null = null;
    private length: number = 0;

    // Add an element to the end of the queue
    enqueue(value: T): void {
        const newNode = new Node(value);
        if (this.rear) {
            this.rear.next = newNode;
        }
        this.rear = newNode;
        if (!this.front) {
            this.front = newNode;
        }
        this.length++;
    }

    // Remove and return the front element of the queue
    dequeue(): T | null {
        if (!this.front) {
            return null; // Queue is empty
        }
        const dequeuedValue = this.front.value;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null; // Queue is now empty
        }
        this.length--;
        return dequeuedValue;
    }

    // Peek at the front element without removing it
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

// Example usage:
const queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // Outputs: 10
console.log(queue.peek());     // Outputs: 20
console.log(queue.isEmpty());  // Outputs: false
console.log(queue.size());      // Outputs: 1
