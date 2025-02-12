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
    private size: number = 0;

    // Method to check if the queue is empty
    isEmpty(): boolean {
        return this.size === 0;
    }

    // Method to get the current size of the queue
    getSize(): number {
        return this.size;
    }

    // Method to add an element to the back of the queue
    enqueue(value: T): void {
        const newNode = new Node(value);
        if (this.rear) {
            this.rear.next = newNode; // Link the new node at the end of the queue
        }
        this.rear = newNode; // Update the rear to the new node
        if (this.front === null) {
            this.front = newNode; // If queue was empty, update front as well
        }
        this.size++;
    }

    // Method to remove an element from the front of the queue
    dequeue(): T | null {
        if (this.front === null) {
            return null; // Queue is empty
        }
        const dequeuedValue = this.front.value; // Get the value to return
        this.front = this.front.next; // Move the front pointer to the next node
        if (this.front === null) {
            this.rear = null; // If the queue is now empty, update rear as well
        }
        this.size--;
        return dequeuedValue; // Return the dequeued value
    }

    // Method to peek at the front element without removing it
    peek(): T | null {
        return this.front ? this.front.value : null; // Return the front value or null if empty
    }
}

// Example usage:
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());    // Output: 2
console.log(queue.getSize()); // Output: 2
console.log(queue.isEmpty()); // Output: false
queue.dequeue(); // Removes 2
queue.dequeue(); // Removes 3
console.log(queue.isEmpty()); // Output: true
