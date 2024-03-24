// Node class to represent a node in the linked list
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// LinkedList class to manage the linked list
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert a new node at the beginning of the linked list
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    // Insert a new node at the end of the linked list
    insertLast(data) {
        let newNode = new Node(data);
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

    // Print all the elements of the linked list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Usage example
const linkedList = new LinkedList();
linkedList.insertFirst(5);
linkedList.insertFirst(10);
linkedList.insertLast(15);
linkedList.printList();
