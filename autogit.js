// Node class to represent individual elements in the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Queue class that uses a linked list to implement a queue
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Method to add an element to the queue
    enqueue(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Method to remove and return the element at the front of the queue
    dequeue() {
        if (!this.head) {
            return null;
        }

        const dequeued = this.head;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = null;
        }

        return dequeued.data;
    }

    // Method to check if the queue is empty
    isEmpty() {
        return !this.head;
    }

    // Method to get the element at the front of the queue without removing it
    peek() {
        if (!this.head) {
            return null;
        }

        return this.head.data;
    }
}

// Example usage of the Queue class
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());    // Output: 2
console.log(queue.isEmpty()); // Output: false
