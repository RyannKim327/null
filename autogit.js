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
        
        const dequeuedValue = this.front.value;
        this.front = this.front.next;
        this.size--;

        if (this.isEmpty()) {
            this.rear = null;
        }

        return dequeuedValue;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.front.value;
    }

    print() {
        let current = this.front;
        const queueValues = [];
        while (current) {
            queueValues.push(current.value);
            current = current.next;
        }
        console.log(queueValues);
    }
}

// Example Usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // Output: [1, 2, 3]

queue.dequeue();
queue.print(); // Output: [2, 3]

console.log(queue.peek()); // Output: 2
