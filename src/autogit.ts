class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
class Queue<T> {
    private head: Node<T> | null = null; // The front of the queue
    private tail: Node<T> | null = null; // The end of the queue
    private length: number = 0; // To keep track of the number of elements in the queue

    // Method to add an element to the queue
    enqueue(value: T): void {
        const newNode = new Node(value);
        if (this.tail) {
            this.tail.next = newNode; // Link the current tail to the new node
        }
        this.tail = newNode; // Move the tail to the new node
        if (!this.head) {
            this.head = newNode; // If the queue was empty, head should also point to the new node
        }
        this.length++;
    }

    // Method to remove and return the front element of the queue
    dequeue(): T | null {
        if (!this.head) {
            return null; // Return null if the queue is empty
        }
        const dequeuedValue = this.head.value; // Store the value to return
        this.head = this.head.next; // Move the head to the next node
        if (!this.head) {
            this.tail = null; // If the queue is now empty, set tail to null
        }
        this.length--;
        return dequeuedValue; // Return the value of the removed element
    }

    // Method to get the front element without removing it
    peek(): T | null {
        return this.head ? this.head.value : null;
    }

    // Method to check if the queue is empty
    isEmpty(): boolean {
        return this.length === 0;
    }

    // Method to get the size of the queue
    size(): number {
        return this.length;
    }
}
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // 1
console.log(queue.peek());     // 2
console.log(queue.isEmpty());  // false
console.log(queue.size());     // 2
