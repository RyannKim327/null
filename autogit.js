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

    isEmpty() {
        return this.size === 0;
    }

    enqueue(data) {
        const newNode = new Node(data);
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

        const data = this.head.data;
        this.head = this.head.next;
        this.size--;

        if (this.isEmpty()) {
            this.tail = null;
        }

        return data;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        
        return this.head.data;
    }

    printQueue() {
        let current = this.head;
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

console.log('Printing queue:');
queue.printQueue();

console.log('Dequeuing:', queue.dequeue());
console.log('Dequeuing:', queue.dequeue());

console.log('Printing queue:');
queue.printQueue();
