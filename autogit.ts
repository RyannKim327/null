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

    // Add element to the queue
    enqueue(value: T): void {
        const newNode = new Node(value);
        if (this.rear) {
            this.rear.next = newNode;
        }
        this.rear = newNode;
        if (!this.front) {
            this.front = newNode;
        }
        this.size++;
    }

    // Remove element from the queue
    dequeue(): T | null {
        if (!this.front) {
            return null; // Queue is empty
        }
        const dequeuedValue = this.front.value;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null; // Queue is empty after dequeue
        }
        this.size--;
        return dequeuedValue;
    }

    // Get the front element
    peek(): T | null {
        return this.front ? this.front.value : null;
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
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Outputs: 1
console.log(queue.peek());     // Outputs: 2
console.log(queue.getSize());  // Outputs: 2
console.log(queue.isEmpty());   // Outputs: false
