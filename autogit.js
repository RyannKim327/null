// Define the Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Define the Queue class
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

    // Method to remove and return an element from the queue
    dequeue() {
        if (!this.front) {
            return null;
        }
        const dequeuedNode = this.front;
        this.front = this.front.next;
        this.size--;
        if (!this.front) {
            this.rear = null;
        }
        return dequeuedNode.data;
    }

    // Method to get the element at the front of the queue
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

// Example Usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.isEmpty()); // Output: false
console.log(queue.getSize()); // Output: 2
