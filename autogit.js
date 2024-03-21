// Node class to represent individual elements in the queue
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Queue class to implement the queue using a linked list
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
        const data = this.front.data;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        this.size--;
        return data;
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

// Example usage:
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
console.log(queue.getSize()); // Output: 1

