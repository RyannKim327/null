class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);

        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }

        this.size++;
    }

    dequeue() {
        if (!this.front) return null;

        const data = this.front.data;

        if (this.front === this.rear) {
            this.front = null;
            this.rear = null;
        } else {
            this.front = this.front.next;
        }

        this.size--;

        return data;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    printQueue() {
        let current = this.front;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Dequeuing...", queue.dequeue());
console.log("Dequeuing...", queue.dequeue());

console.log("Queue size:", queue.getSize());
console.log("Is queue empty?", queue.isEmpty());

queue.printQueue();
