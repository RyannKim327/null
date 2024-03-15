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

    enqueue(value) {
        const newNode = new Node(value);
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
        if (!this.front) {
            return null;
        }

        const removedNode = this.front;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        this.size--;

        return removedNode.value;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        return this.front ? this.front.value : null;
    }

    print() {
        let current = this.front;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' <- '));
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // Output: 1 <- 2 <- 3
queue.dequeue();
queue.print(); // Output: 2 <- 3
console.log(queue.peek()); // Output: 2
console.log(queue.isEmpty()); // Output: false
