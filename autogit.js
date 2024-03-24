// Node class to represent each element in the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Queue class with linked list implementation
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // Method to add an element to the back of the queue
    enqueue(data) {
        const newNode = new Node(data);

        if (!this.rear) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }

        this.size++;
    }

    // Method to remove and return the element from the front of the queue
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

    // Method to peek at the element at the front of the queue without removing it
    peek() {
        if (!this.front) {
            return null;
        }

        return this.front.data;
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.getSize()); // Output: 2
console.log(queue.isEmpty()); // Output: false
