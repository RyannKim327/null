// Node class to represent each element in the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Queue class to define the queue operations
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
        this.size--;
        
        if (!this.head) {
            this.tail = null;
        }

        return data;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        if (!this.head) {
            return null;
        }
        return this.head.data;
    }

    print() {
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
queue.print(); // Output: 1, 2, 3
console.log("Dequeued item:", queue.dequeue()); // Output: 1
console.log("Peek item:", queue.peek()); // Output: 2
console.log("Is queue empty?", queue.isEmpty()); // Output: false
