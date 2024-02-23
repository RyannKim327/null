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
            this.tail = this.head;
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
        return !this.head;
    }

    print() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(' -> '));
    }
}

// Example Usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print(); // output: 1 -> 2 - > 3

console.log(queue.dequeue()); // output: 1
queue.print(); // output: 2 -> 3
