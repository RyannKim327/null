// Define the structure for a node in the linked list
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// Define the LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Function to add a node to the linked list
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

    // Function to find the length of the linked list
    getLength() {
        let current = this.head;
        let length = 0;
        while (current) {
            length++;
            current = current.next;
        }
        return length;
    }
}

// Creating a linked list
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);

// Finding the length of the linked list
const length = list.getLength();
console.log("Length of the linked list: ", length);
