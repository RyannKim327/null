// Define the Node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Define the Queue class
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

    // Method to remove and return the first element from the queue
    dequeue() {
        if (!this.head) {
            return null;
        }
        const removedNode = this.head;
        this.head = removedNode.next;
        if (!this.head) {
            this.tail = null;
        }
        this.size--;
        return removedNode.value;
    }

    // Method to get the size of the queue
    getSize() {
        return this.size;
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Method to peek at the first element in the queue
    peek() {
        if (!this.head) {
            return null;
        }
        return this.head.value;
    }
}

// Example usage
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2
console.log(queue.getSize()); // 2
console.log(queue.isEmpty()); // false
