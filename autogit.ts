class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
class Queue<T> {
    private head: Node<T> | null = null; // represents the front of the queue
    private tail: Node<T> | null = null; // represents the end of the queue
    private length: number = 0; // tracks the number of elements

    // Enqueues an item to the end of the queue
    enqueue(value: T): void {
        const newNode = new Node(value);
        if (this.tail) {
            this.tail.next = newNode; // link the new node to the last node
        }
        this.tail = newNode; // update the tail reference
        if (!this.head) {
            this.head = newNode; // if the queue was empty, the head is now the new node
        }
        this.length++;
    }

    // Dequeues an item from the front of the queue
    dequeue(): T | null {
        if (!this.head) {
            return null; // queue is empty
        }
        const value = this.head.value;
        this.head = this.head.next; // move the head to the next node
        if (!this.head) {
            this.tail = null; // if the queue is now empty, update the tail
        }
        this.length--;
        return value;
    }

    // Peeks at the front of the queue without removing it
    peek(): T | null {
        return this.head ? this.head.value : null; // return the value at the head
    }

    // Checks if the queue is empty
    isEmpty(): boolean {
        return this.length === 0; // returns true if length is 0
    }

    // Returns the size of the queue
    size(): number {
        return this.length; // return the current size
    }
}
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2
console.log(queue.size()); // 2
console.log(queue.isEmpty()); // false

queue.dequeue(); // removes 2
queue.dequeue(); // removes 3
console.log(queue.isEmpty()); // true
