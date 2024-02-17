class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtEnd(data) {
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

    deleteNode(data) {
        if (!this.head) {
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let prev = null;

        while (current && current.data !== data) {
            prev = current;
            current = current.next;
        }

        if (!current) {
            return;
        }

        prev.next = current.next;
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example Usage
const linkedList = new LinkedList();

linkedList.insertAtEnd(1);
linkedList.insertAtEnd(2);
linkedList.insertAtEnd(3);

linkedList.printList(); // Output: 1, 2, 3

linkedList.deleteNode(2);

linkedList.printList(); // Output: 1, 3
