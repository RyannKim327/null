// Node class to represent each node in the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// LinkedList class to implement the linked list
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a new node to the linked list
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

    // Method to display the linked list
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Creating a new linked list
const linkedList = new LinkedList();

// Adding nodes to the linked list
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);

// Displaying the linked list
linkedList.display();
