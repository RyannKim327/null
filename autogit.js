class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

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

    dequeue() {
        if (!this.head) {
            return null;
        }

        const data = this.head.data;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }

        return data;
    }

    isEmpty() {
        return this.head === null;
    }

    peek() {
        if (!this.head) {
            return null;
        }

        return this.head.data;
    }
}

// Usage example:
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.isEmpty()); // Output: false
