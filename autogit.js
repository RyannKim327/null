// Node class to represent each node in the linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Linked list class to manage the list
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Method to add a new node to the end of the list
    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Method to print the linked list
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Usage example
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print();
