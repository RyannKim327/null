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
        
        if (this.isEmpty()) {
            this.front = newNode;
        } else {
            this.rear.next = newNode;
        }
        
        this.rear = newNode;
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        const data = this.front.data;
        this.front = this.front.next;
        this.size--;

        if (this.isEmpty()) {
            this.rear = null;
        }

        return data;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.front.data;
    }

    print() {
        let current = this.front;
        let values = [];

        while (current !== null) {
            values.push(current.data);
            current = current.next;
        }

        console.log(values.join(' -> '));
    }
}

// Example usage:
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // Output: 1

queue.print(); // Output: 1 -> 2 -> 3

queue.dequeue();

queue.print(); // Output: 2 -> 3
