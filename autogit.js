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

    dequeue() {
        if (!this.head) {
            return null;
        }
        const dequeuedValue = this.head.value;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        this.size--;
        return dequeuedValue;
    }

    peek() {
        if (!this.head) {
            return null;
        }
        return this.head.value;
    }

    isEmpty() {
        return this.size === 0;
    }

    printQueue() {
        let current = this.head;
        const values = [];
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }
        console.log("Queue: ", values.join(" -> "));
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.printQueue(); // Output: Queue: 1 -> 2 -> 3

queue.dequeue();
queue.printQueue(); // Output: Queue: 2 -> 3

console.log("Front of the queue: ", queue.peek()); // Output: Front of the queue: 2
