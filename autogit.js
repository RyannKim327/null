// Node class to represent nodes in a linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// LinkedList class
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

    // Method to find and return the length of the linked list
    getLength() {
        let current = this.head;
        let count = 0;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }
}

// Creating a sample linked list and adding nodes
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);

// Getting the length of the linked list
const length = linkedList.getLength();
console.log("Length of the linked list: ", length);
