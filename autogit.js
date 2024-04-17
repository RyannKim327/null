// Node class to create individual nodes in the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Linked List class to create the linked list
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a node to the end of the linked list
    append(data) {
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

    // Method to print all the nodes in the linked list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example of how to use the Linked List class
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.printList();
