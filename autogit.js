// Node class to represent each element in the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Linked List class to manage the linked list
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to insert a new node at the end of the linked list
    insert(data) {
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

    // Method to display all elements in the linked list
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);

linkedList.display();
