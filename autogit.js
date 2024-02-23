// Node class to represent a node in the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// LinkedList class to represent the linked list
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a new node to the end of the linked list
    addNode(data) {
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

    // Method to print all the nodes in the linked list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Usage example
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);

list.printList(); // Output: 1, 2, 3
