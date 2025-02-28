class Node<T> {
    public value: T;
    public next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}
class Queue<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private size: number = 0;

    // Add an element to the end of the queue
    public enqueue(value: T): void {
        const newNode = new Node(value);
        if (this.tail) {
            this.tail.next = newNode; // Link the new node at the end
        }
        this.tail = newNode; // Update the tail to the new node
        if (!this.head) {
            this.head = newNode; // If the queue was empty, head is also the new node
        }
        this.size++;
    }

    // Remove and return the element from the front of the queue
    public dequeue(): T | null {
        if (!this.head) return null; // Queue is empty
        const dequeuedValue = this.head.value;
        this.head = this.head.next; // Move head to the next node
        if (!this.head) {
            this.tail = null; // If the queue is now empty, reset tail
        }
        this.size--;
        return dequeuedValue;
    }

    // Return the size of the queue
    public getSize(): number {
        return this.size;
    }

    // Check if the queue is empty
    public isEmpty(): boolean {
        return this.size === 0;
    }

    // Peek at the front value without removing it
    public peek(): T | null {
        return this.head ? this.head.value : null;
    }
}
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());     // Output: 2
console.log(queue.getSize());  // Output: 2
console.log(queue.isEmpty());   // Output: false
