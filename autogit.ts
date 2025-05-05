class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    // Insert a new node at the end of the list
    insert(data: T): void {
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

    // Remove a node by value
    remove(data: T): boolean {
        if (!this.head) {
            return false; // List is empty
        }

        if (this.head.data === data) {
            this.head = this.head.next; // Handle removal of the head node
            return true;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next; // Bypass the node to remove it
                return true;
            }
            current = current.next;
        }
        return false; // Value not found
    }

    // Display the list
    display(): void {
        let current = this.head;
        const elements: T[] = [];

        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(" -> "));
    }
}
const myList = new LinkedList<number>();

myList.insert(1);
myList.insert(2);
myList.insert(3);
myList.display(); // Output: 1 -> 2 -> 3

myList.remove(2);
myList.display(); // Output: 1 -> 3

myList.remove(1);
myList.display(); // Output: 3

myList.remove(3);
myList.display(); // Output: (empty)
