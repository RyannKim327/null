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
        this.size--;
        return dequeuedValue;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        if (!this.head) {
            return null;
        }
        return this.head.value;
    }

    print() {
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
queue.print(); // Output: 1, 2, 3
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
