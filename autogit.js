class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(data) {
        const node = new Node(data);
        if (!this.front) {
            this.front = node;
            this.back = node;
        } else {
            this.back.next = node;
            this.back = node;
        }
        this.size++;
    }

    dequeue() {
        if (!this.front) {
            return null;
        }

        const data = this.front.data;
        this.front = this.front.next;
        this.size--;

        if (!this.front) {
            this.back = null;
        }

        return data;
    }

    peek() {
        if (!this.front) {
            return null;
        }
        return this.front.data;
    }

    isEmpty() {
        return this.size === 0;
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // Output: 1

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

console.log(queue.isEmpty()); // Output: false
