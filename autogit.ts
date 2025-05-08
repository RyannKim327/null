class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;

    // Add a new node at the end of the linked list
    append(value: T): void {
        const newNode = new Node(value);
        if (this.tail) {
            this.tail.next = newNode; // Link the new node after the tail
        }
        this.tail = newNode; // Set the new node as the new tail
        if (!this.head) {
            this.head = newNode; // If the list was empty, head is the new node
        }
    }

    // Remove a node from the front of the linked list
    remove(): T | null {
        if (!this.head) {
            return null; // Return null if the list is empty
        }

        const value = this.head.value; // Store the value to return
        this.head = this.head.next; // Move the head pointer to the next node
        if (this.head === null) {
            this.tail = null; // If the list is now empty, set tail to null
        }
        return value; // Return the removed value
    }

    // Check if the linked list is empty
    isEmpty(): boolean {
        return this.head === null;
    }
}
class Queue<T> {
    private linkedList: LinkedList<T>;

    constructor() {
        this.linkedList = new LinkedList<T>();
    }

    // Add an item to the end of the queue
    enqueue(value: T): void {
        this.linkedList.append(value);
    }

    // Remove an item from the front of the queue
    dequeue(): T | null {
        return this.linkedList.remove();
    }

    // Peek at the front item of the queue without removing it
    peek(): T | null {
        if (this.linkedList.isEmpty()) {
            return null; // Return null if the queue is empty
        }
        return this.linkedList['head']!.value; // Access the head value directly
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.linkedList.isEmpty();
    }

    // Get the size of the queue
    size(): number {
        let current = this.linkedList['head'];
        let count = 0;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
}
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // Output: 1
console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
console.log(queue.isEmpty()); // Output: false
console.log(queue.size()); // Output: 1
