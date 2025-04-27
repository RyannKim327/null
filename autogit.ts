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

    // Method to add a new node with the specified data
    add(data: T): void {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to remove a node with the specified data
    remove(data: T): void {
        if (!this.head) return;

        // Handle removing the head
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Method to display the linked list
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
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
list.display(); // Output: 1 -> 2 -> 3

list.remove(2);
list.display(); // Output: 1 -> 3

list.remove(1);
list.display(); // Output: 3

list.remove(3);
list.display(); // Output: (no output, list is empty)
