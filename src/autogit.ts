class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
class Queue<T> {
    private head: Node<T> | null; // Front of the queue
    private tail: Node<T> | null; // Rear of the queue
    private size: number;         // Number of elements in the queue

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add an element to the rear of the queue
    enqueue(value: T): void {
        const newNode = new Node(value);

        if (this.tail === null) {
            // If the queue is empty, set both head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Otherwise, add the new node to the end and update the tail
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    // Remove and return the element from the front of the queue
    dequeue(): T | undefined {
        if (this.head === null) {
            // If the queue is empty, return undefined
            return undefined;
        }

        const removedNode = this.head;
        this.head = this.head.next;

        // If the queue becomes empty, also update the tail to null
        if (this.head === null) {
            this.tail = null;
        }

        this.size--;
        return removedNode.value;
    }

    // Return the element at the front of the queue without removing it
    peek(): T | undefined {
        return this.head?.value;
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.size === 0;
    }

    // Get the number of elements in the queue
    getSize(): number {
        return this.size;
    }
}
const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.getSize()); // Output: 2
console.log(queue.isEmpty()); // Output: false

queue.dequeue();
queue.dequeue();

console.log(queue.isEmpty()); // Output: true
console.log(queue.dequeue()); // Output: undefined
