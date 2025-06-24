class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null; // By default, the next node is null
    }
}
class LinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null; // Initially, the list is empty
    }

    // Method to add a new node to the end of the list
    append(data: T): void {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
}
class LinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    append(data: T): void {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to get the length of the linked list
    getLength(): number {
        let length = 0;
        let current = this.head;

        while (current) {
            length++;
            current = current.next;
        }

        return length;
    }
}
const list = new LinkedList<number>();
list.append(10);
list.append(20);
list.append(30);

console.log("Length of the linked list:", list.getLength()); // Output: 3
