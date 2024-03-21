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
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        const { value } = this.head;
        this.head = this.head.next;
        this.size--;

        if (this.size === 0) {
            this.tail = null;
        }

        return value;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.head.value;
    }

    isEmpty() {
        return this.size === 0;
    }

    printQueue() {
        let current = this.head;
        while (current) {
            console.log(current.value);
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

queue.dequeue();
console.log(queue.peek()); // Output: 3

queue.dequeue();
console.log(queue.isEmpty()); // Output: true
