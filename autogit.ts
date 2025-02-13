class Node<T> {
    public data: T;
    public next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
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

    // Add an item to the back of the queue
    enqueue(data: T): void {
        const newNode = new Node(data);
        if (this.rear) {
            this.rear.next = newNode; // Link the old rear to the new node
        }
        this.rear = newNode; // Update the rear to the new node
        if (!this.front) {
            this.front = newNode; // If the queue was empty, front will also point to the new node
        }
        this.size++;
    }

    // Remove an item from the front of the queue
    dequeue(): T | null {
        if (!this.front) {
            return null; // If the queue is empty, return null
        }
        const dequeuedNode = this.front; // Store the current front node
        this.front = this.front.next; // Move front to the next node
        if (!this.front) {
            this.rear = null; // If the queue is now empty, set rear to null
        }
        this.size--;
        return dequeuedNode.data; // Return the dequeued data
    }

    // Peek at the front item of the queue without removing it
    peek(): T | null {
        return this.front ? this.front.data : null;
    }

    // Return the size of the queue
    getSize(): number {
        return this.size;
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.size === 0;
    }

    // Print the queue for debugging purposes
    print(): void {
        let current = this.front;
        const elements: T[] = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(" <- "));
    }
}
const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front of the queue:", queue.peek()); // Output: 10

queue.print(); // Output: 10 <- 20 <- 30

console.log("Dequeued:", queue.dequeue()); // Output: 10
console.log("New front of the queue:", queue.peek()); // Output: 20

queue.print(); // Output: 20 <- 30

console.log("Queue size:", queue.getSize()); // Output: 2
console.log("Is queue empty?", queue.isEmpty()); // Output: false
