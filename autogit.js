// Node class to represent individual nodes in the linked list
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

    // Method to add a new node to the linked list
    append(data) {
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

    // Method to print the linked list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Creating an instance of the LinkedList
const linkedList = new LinkedList();

// Appending nodes to the linked list
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

// Printing the linked list
linkedList.printList();
