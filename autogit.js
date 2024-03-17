// Define a Node class to represent each node in the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Define a LinkedList class to represent the linked list
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Function to add a new node to the end of the linked list
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

    // Function to calculate the length of the linked list
    getLength() {
        let length = 0;
        let current = this.head;
        while (current) {
            length++;
            current = current.next;
        }
        return length;
    }
}

// Create a new linked list
const linkedList = new LinkedList();

// Add nodes to the linked list
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);

// Calculate the length of the linked list
const length = linkedList.getLength();
console.log("Length of the linked list: " + length);
