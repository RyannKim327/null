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
    private rear: Node<T> | null;
    private size: number;

    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // Adds an element to the end of the queue
    enqueue(value: T): void {
        const newNode = new Node(value);
        if (this.rear) {
            this.rear.next = newNode; // Link the old rear to the new node
        }
        this.rear = newNode; // Update rear to new node
        if (this.front === null) {
            this.front = newNode; // If the queue was empty, front is also the new node
        }
        this.size++;
    }

    // Removes an element from the front of the queue
    dequeue(): T | null {
        if (this.front === null) {
            return null; // Queue is empty
        }
        const dequeuedNode = this.front;
        this.front = this.front.next; // Move front to the next node
        if (this.front === null) {
            this.rear = null; // If the queue is now empty, ensure rear is also null
        }
        this.size--;
        return dequeuedNode.value;
    }

    // Peek at the front element without removing it
    peek(): T | null {
        return this.front ? this.front.value : null;
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.size === 0;
    }

    // Return the size of the queue
    getSize(): number {
        return this.size;
    }
}

// Example usage:
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.getSize()); // Output: 2
console.log(queue.isEmpty()); // Output: false
