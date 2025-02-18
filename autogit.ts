class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class Queue<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private count: number = 0;

    // Adds an item to the end of the queue
    enqueue(value: T): void {
        const newNode = new Node<T>(value);
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
        this.count++;
    }

    // Removes and returns the item at the front of the queue
    dequeue(): T | null {
        if (!this.head) {
            return null; // Queue is empty
        }
        const dequeuedValue = this.head.value;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null; // Queue is empty after dequeue
        }
        this.count--;
        return dequeuedValue;
    }

    // Returns the item at the front of the queue without removing it
    peek(): T | null {
        return this.head ? this.head.value : null;
    }

    // Returns the number of items in the queue
    size(): number {
        return this.count;
    }

    // Checks if the queue is empty
    isEmpty(): boolean {
        return this.count === 0;
    }
}

// Example usage:
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
console.log(queue.peek());    // 2
console.log(queue.size());     // 1
console.log(queue.isEmpty());  // false
