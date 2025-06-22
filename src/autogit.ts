// Node class to represent each element in the linked list
class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null; // Initially, there's no next node
    }
}

// Queue class implementing FIFO behavior using a linked list
class Queue<T> {
    private front: Node<T> | null; // Points to the front of the queue
    private rear: Node<T> | null;  // Points to the rear of the queue
    private size: number;          // Tracks the number of elements in the queue

    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // Method to add an element to the queue
    enqueue(data: T): void {
        const newNode = new Node(data);

        if (this.isEmpty()) {
            // If the queue is empty, both front and rear point to the new node
            this.front = newNode;
            this.rear = newNode;
        } else {
            // Add the new node at the rear and update the rear pointer
            this.rear!.next = newNode;
            this.rear = newNode;
        }

        this.size++;
    }

    // Method to remove and return the front element from the queue
    dequeue(): T | undefined {
        if (this.isEmpty()) {
            throw new Error("Queue is empty. Cannot dequeue.");
        }

        const dequeuedData = this.front!.data; // Store the data of the front node
        this.front = this.front!.next;       // Move the front pointer to the next node

        if (this.front === null) {
            // If the queue becomes empty, reset the rear pointer as well
            this.rear = null;
        }

        this.size--;
        return dequeuedData;
    }

    // Method to peek at the front element without removing it
    peek(): T | undefined {
        if (this.isEmpty()) {
            throw new Error("Queue is empty. Nothing to peek.");
        }

        return this.front!.data;
    }

    // Method to check if the queue is empty
    isEmpty(): boolean {
        return this.size === 0;
    }

    // Method to get the current size of the queue
    getSize(): number {
        return this.size;
    }
}

// Example usage
const queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.getSize()); // Output: 2
console.log(queue.isEmpty()); // Output: false
