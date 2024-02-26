// Node class to represent each element in the linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Queue class to implement a queue using a linked list
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Method to add an element to the queue
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // Method to remove and return the front element from the queue
    dequeue() {
        if (!this.head) {
            return null;
        }
        const removedValue = this.head.value;
        this.head = this.head.next;
        this.size--;
        return removedValue;
    }

    // Method to return the front element of the queue
    peek() {
        if (!this.head) {
            return null;
        }
        return this.head.value;
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Method to return the size of the queue
    getSize() {
        return this.size;
    }
}

// Example usage of the Queue class
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());    // Output: 2
console.log(queue.getSize()); // Output: 2
console.log(queue.isEmpty()); // Output: false
