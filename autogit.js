class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Method to add an element to the queue
    enqueue(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    // Method to remove an element from the queue and return its value
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        const value = this.head.value;

        if (this.head === this.tail) {
            this.tail = null;
        }
        
        this.head = this.head.next;
        this.size--;

        return value;
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Method to get the size of the queue
    getSize() {
        return this.size;
    }

    // Method to get the front element of the queue
    front() {
        if (this.isEmpty()) {
            return null;
        }

        return this.head.value;
    }

    // Method to print the elements of the queue
    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
        } else {
            let current = this.head;
            let elements = [];

            while (current) {
                elements.push(current.value);
                current = current.next;
            }

            console.log(elements.join(" -> "));
        }
    }
}

// Example usage:
const queue = new Queue();

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);

queue.print(); // Output: 5 -> 10 -> 15

console.log(queue.dequeue()); // Output: 5
console.log(queue.dequeue()); // Output: 10

queue.print(); // Output: 15
