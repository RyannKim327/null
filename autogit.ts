class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
class Queue<T> {
    private head: Node<T> | null = null; // Points to the front of the queue
    private tail: Node<T> | null = null; // Points to the end of the queue
    private length: number = 0; // To keep track of the number of elements in the queue

    // Enqueue operation
    enqueue(value: T): void {
        const newNode = new Node(value);
        if (this.tail) {
            this.tail.next = newNode; // Link the old tail to the new node
        }
        this.tail = newNode; // Update the tail to the new node
        if (!this.head) {
            this.head = newNode; // If the queue was empty, head is also the new node
        }
        this.length++;
    }

    // Dequeue operation
    dequeue(): T | null {
        if (!this.head) {
            return null; // Queue is empty
        }
        const dequeuedValue = this.head.value; // Get the value from the head
        this.head = this.head.next; // Move the head to the next node
        if (!this.head) {
            this.tail = null; // If the queue is now empty, set tail to null
        }
        this.length--;
        return dequeuedValue;
    }

    // Peek operation (view the front element without removing it)
    peek(): T | null {
        return this.head ? this.head.value : null;
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
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());     // Output: 2
console.log(queue.size());     // Output: 2
console.log(queue.isEmpty());  // Output: false

queue.dequeue();
queue.dequeue();

console.log(queue.isEmpty());  // Output: true
