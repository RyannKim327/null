// Define the Node class
class Node<T> {
    public data: T;
    public next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null; // Initially, there is no next node
    }
}

// Define the Queue class
class Queue<T> {
    private front: Node<T> | null; // Points to the front of the queue
    private back: Node<T> | null;  // Points to the back of the queue
    private size: number;          // Tracks the number of elements in the queue

    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    // Enqueue: Add an element to the back of the queue
    enqueue(data: T): void {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            // If the queue is empty, both front and back point to the new node
            this.front = newNode;
            this.back = newNode;
        } else {
            // Otherwise, add the new node to the back and update the back pointer
            if (this.back) {
                this.back.next = newNode;
            }
            this.back = newNode;
        }
        this.size++;
    }

    // Dequeue: Remove and return the element at the front of the queue
    dequeue(): T | undefined {
        if (this.isEmpty()) {
            throw new Error("Queue is empty. Cannot dequeue.");
        }
        const removedData = this.front?.data; // Save the data of the front node
        this.front = this.front?.next;       // Move the front pointer to the next node
        if (!this.front) {
            // If the queue becomes empty, update the back pointer as well
            this.back = null;
        }
        this.size--;
        return removedData;
    }

    // Peek: Return the element at the front of the queue without removing it
    peek(): T | undefined {
        if (this.isEmpty()) {
            throw new Error("Queue is empty. Nothing to peek.");
        }
        return this.front?.data;
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.size === 0;
    }

    // Get the size of the queue
    getSize(): number {
        return this.size;
    }
}

// Example Usage
const queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.getSize()); // Output: 2
console.log(queue.isEmpty()); // Output: false
