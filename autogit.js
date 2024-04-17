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
        this.size = 0;
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

        this.size++;
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

        this.size--;

        return data;
    }

    peek() {
        if (!this.head) {
            return null;
        }

        return this.head.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    print() {
        let current = this.head;
        const result = [];

        while (current) {
            result.push(current.data);
            current = current.next;
        }

        console.log(result.join(' <- '));
    }
}

// Example Usage
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print(); // Output: 1 <- 2 <- 3

console.log(queue.dequeue()); // Output: 1

queue.print(); // Output: 2 <- 3
