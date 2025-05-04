class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    // Method to add an element at the end of the list
    append(value: T): void {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current: Node<T> | null = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to remove an element by value
    remove(value: T): void {
        if (!this.head) {
            return;
        }

        // Handle the case if the head node needs to be removed
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current: Node<T> | null = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Method to print the linked list
    printList(): void {
        let current: Node<T> | null = this.head;
        let output = [];
        while (current) {
            output.push(current.value);
            current = current.next;
        }
        console.log(output.join(' -> '));
    }

    // Additional utility methods can be added here (e.g., search, reverse, etc.)
}
const list = new LinkedList<number>();

list.append(1);
list.append(2);
list.append(3);

console.log("Initial list:");
list.printList(); // Output: 1 -> 2 -> 3

list.remove(2);
console.log("After removing 2:");
list.printList(); // Output: 1 -> 3

list.remove(1);
console.log("After removing 1:");
list.printList(); // Output: 3
