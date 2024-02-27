// Node class to create individual nodes in the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Queue class using linked list
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // Method to add an element to the queue
    enqueue(data) {
        const newNode = new Node(data);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    // Method to remove and return the element at the front of the queue
    dequeue() {
        if (!this.front) {
            return null;
        }

        const removedData = this.front.data;
        this.front = this.front.next;
        this.size--;

        if (this.size === 0) {
            this.rear = null;
        }

        return removedData;
    }

    // Method to get the element at the front of the queue without removing it
    peek() {
        if (!this.front) {
            return null;
        }

        return this.front.data;
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Method to get the size of the queue
    getSize() {
        return this.size;
    }
}

// Usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // Output: 10
console.log(queue.peek());    // Output: 20
console.log(queue.getSize()); // Output: 2
console.log(queue.isEmpty()); // Output: false
