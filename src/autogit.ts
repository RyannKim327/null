// Node class to represent each element in the linked list
class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

// Queue class implemented using a linked list
class Queue<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private count: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    // Enqueue: Add an element to the rear of the queue
    enqueue(value: T): void {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            // If the queue is empty, set both head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Otherwise, add the new node to the end and update the tail
            this.tail!.next = newNode;
            this.tail = newNode;
        }

        this.count++;
    }

    // Dequeue: Remove an element from the front of the queue
    dequeue(): T | undefined {
        if (this.isEmpty()) {
            throw new Error("Queue is empty. Cannot dequeue.");
        }

        const dequeuedValue = this.head!.value;
        this.head = this.head!.next;

        // If the head becomes null, the queue is empty, so reset the tail
        if (this.head === null) {
            this.tail = null;
        }

        this.count--;
        return dequeuedValue;
    }

    // Peek: Return the value of the front element without removing it
    peek(): T | undefined {
        if (this.isEmpty()) {
            throw new Error("Queue is empty. Nothing to peek.");
        }

        return this.head!.value;
    }

    // isEmpty: Check if the queue is empty
    isEmpty(): boolean {
        return this.head === null;
    }

    // Size: Return the number of elements in the queue
    size(): number {
        return this.count;
    }
}

// Example usage
const queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false
