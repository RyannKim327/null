// Node class to represent each element in the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Queue class to implement the queue using linked list
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    // Method to add an element to the end of the queue
    enqueue(data) {
        const newNode = new Node(data);
        
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    // Method to remove and return the element at the front of the queue
    dequeue() {
        if (!this.front) {
            return null;
        }
        
        const removedNode = this.front;
        this.front = this.front.next;

        if (!this.front) {
            this.rear = null;
        }

        return removedNode.data;
    }

    // Method to check if the queue is empty
    isEmpty() {
        return !this.front;
    }
}

// Example usage
const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.dequeue()); // Output: 1
console.log(myQueue.dequeue()); // Output: 2
console.log(myQueue.isEmpty()); // Output: false
console.log(myQueue.dequeue()); // Output: 3
console.log(myQueue.isEmpty()); // Output: true
