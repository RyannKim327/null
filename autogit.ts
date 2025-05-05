class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null; // Initially, the next pointer is null
    }
}
class LinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null; // The list starts empty
    }

    // Method to append a node to the end of the list
    append(data: T): void {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode; // If the list is empty, set the head to the new node
            return;
        }
        
        let current = this.head;
        while (current.next) {
            current = current.next; // Traverse to the last node
        }
        current.next = newNode; // Set the next of the last node to be the new node
    }

    // Method to print the list contents
    printList(): void {
        let current = this.head;
        while (current) {
            console.log(current.data); // Print the node's data
            current = current.next; // Move to the next node
        }
    }

    // Method to remove a node by value
    remove(data: T): void {
        if (!this.head) return; // If the list is empty, do nothing

        // If the head node is the one to remove
        if (this.head.data === data) {
            this.head = this.head.next; // Move the head to the next node
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next; // Bypass the node to remove it
                return;
            }
            current = current.next; // Move to the next node
        }
    }
}
const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.printList(); // Output: 1, 2, 3

list.remove(2);
list.printList(); // Output: 1, 3
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

    printList(): void {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    remove(data: T): void {
        if (!this.head) return;

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
}

// Example usage
const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.printList(); // Output: 1, 2, 3

list.remove(2);
list.printList(); // Output: 1, 3
