class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.front.value;
        this.front = this.front.next;
        this.size--;
        if (this.size === 0) {
            this.rear = null;
        }
        return value;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.front.value;
    }

    printQueue() {
        let current = this.front;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Queue elements:");
queue.printQueue();

console.log("Dequeued element: ", queue.dequeue());
console.log("Peeked element: ", queue.peek());
