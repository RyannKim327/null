// Node class to create nodes for the linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Queue class to implement the queue using a linked list
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Method to add element to the end of the queue
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

    // Method to remove and return element from the front of the queue
    dequeue() {
        if (!this.head) {
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    // Method to get the size of the queue
    getSize() {
        return this.size;
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Method to print the elements of the queue
    printQueue() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.printQueue(); // Output: 1, 2, 3

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

queue.printQueue(); // Output: 3
