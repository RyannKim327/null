// Define a class for the Node
class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null; // Initially, the next node is null
    }
}

// Define a class for the LinkedList
class LinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null; // Initially, the list is empty
    }

    // Method to add a new node at the end of the linked list
    append(value: T) {
        const newNode = new Node(value);
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

    // Method to find the length of the linked list
    length(): number {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
}

// Example usage
const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
console.log(list.length()); // Output: 3
