class Node<T> {
    public value: T;
    public next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
class Queue<T> {
    private front: Node<T> | null = null;
    private back: Node<T> | null = null;
    private length: number = 0;

    // Enqueue method to add an element to the back of the queue
    public enqueue(value: T): void {
        const newNode = new Node<T>(value);
        if (this.back) {
            this.back.next = newNode; // Link the old back node to the new node
        }
        this.back = newNode; // Update back to the new node
        if (this.front === null) {
            this.front = newNode; // If the queue was empty, front is also the new node
        }
        this.length++;
    }

    // Dequeue method to remove an element from the front of the queue
    public dequeue(): T | null {
        if (this.front === null) {
            return null; // If the queue is empty, return null
        }
        const dequeuedValue = this.front.value;
        this.front = this.front.next; // Move front to the next node
        if (this.front === null) {
            this.back = null; // If the queue became empty, set back to null
        }
        this.length--;
        return dequeuedValue; // Return the value of the dequeued node
    }

    // Method to get the value of the front item without removing it
    public peek(): T | null {
        return this.front ? this.front.value : null;
    }

    // Method to check if the queue is empty
    public isEmpty(): boolean {
        return this.length === 0;
    }

    // Method to get the current size of the queue
    public size(): number {
        return this.length;
    }
}
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false
