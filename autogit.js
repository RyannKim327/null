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

    isEmpty() {
        return this.size === 0;
    }

    enqueue(data) {
        const newNode = new Node(data);
        if(this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        if(this.isEmpty()) {
            return null;
        }

        const data = this.front.data;
        this.front = this.front.next;
        this.size--;

        if(this.isEmpty()) {
            this.rear = null;
        }

        return data;
    }

    peek() {
        if(this.isEmpty()) {
            return null;
        }

        return this.front.data;
    }

    printQueue() {
        let current = this.front;
        while(current) {
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

console.log(queue.peek()); // Output: 1

queue.dequeue();

console.log(queue.peek()); // Output: 2

queue.printQueue();
