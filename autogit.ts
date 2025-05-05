class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}
class Queue<T> {
    private front: Node<T> | null;
    private rear: Node<T> | null;
    private size: number;

    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // Enqueue operation
    enqueue(data: T): void {
        const newNode = new Node(data);
        if (this.rear) {
            this.rear.next = newNode;
        }
        this.rear = newNode;
        if (!this.front) {
            this.front = newNode;
        }
        this.size++;
    }

    // Dequeue operation
    dequeue(): T | null {
        if (this.isEmpty()) {
            return null; // or throw an error
        }
        const dequeuedNode = this.front!;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null; // Queue is now empty
        }
        this.size--;
        return dequeuedNode.data;
    }

    // Peek operation
    peek(): T | null {
        return this.front ? this.front.data : null;
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.size === 0;
    }

    // Get the size of the queue
    getSize(): number {
        return this.size;
    }
}
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // Output: 1
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.getSize()); // Output: 2
console.log(queue.isEmpty()); // Output: false

queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty()); // Output: true
class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class Queue<T> {
    private front: Node<T> | null;
    private rear: Node<T> | null;
    private size: number;

    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(data: T): void {
        const newNode = new Node(data);
        if (this.rear) {
            this.rear.next = newNode;
        }
        this.rear = newNode;
        if (!this.front) {
            this.front = newNode;
        }
        this.size++;
    }

    dequeue(): T | null {
        if (this.isEmpty()) {
            return null;
        }
        const dequeuedNode = this.front!;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        this.size--;
        return dequeuedNode.data;
    }

    peek(): T | null {
        return this.front ? this.front.data : null;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    getSize(): number {
        return this.size;
    }
}

// Example usage:
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2
console.log(queue.getSize()); // 2
console.log(queue.isEmpty()); // false

queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty()); // true
