class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    remove() {
        if (!this.head) {
            return null;
        }

        const data = this.head.data;
        this.head = this.head.next;
        return data;
    }
}

class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(data) {
        this.list.append(data);
    }

    dequeue() {
        return this.list.remove();
    }

    peek() {
        return this.list.head ? this.list.head.data : null;
    }

    isEmpty() {
        return this.list.head === null;
    }

    print() {
        let current = this.list.head;
        const elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(' <- '));
    }
}

// Example usage:
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print(); // Output: 1 <- 2 <- 3

console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());    // Output: 2

queue.print(); // Output: 2 <- 3
