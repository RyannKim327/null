// Node class representing each element in the linked list
class Node {
    constructor(data) {
        this.data = data; // value of the node
        this.next = null; // reference to the next node
    }
}

// Linked list class to manage the nodes
class LinkedList {
    constructor() {
        this.head = null; // first node in the list
        this.tail = null; // last node in the list
    }

    // Add a new node to the end of the linked list
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Print all the nodes in the linked list
    print() {
        let currentNode = this.head;

        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    // Get the length of the linked list
    length() {
        let count = 0;
        let currentNode = this.head;

        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }

        return count;
    }

    // Insert a new node at a specific position in the linked list
    insertAt(position, data) {
        if (position < 0 || position > this.length()) {
            throw new Error('Invalid position');
        }

        const newNode = new Node(data);

        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let previousNode = null;
            let currentNode = this.head;
            let currentPosition = 0;

            while (currentPosition < position) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentPosition++;
            }

            newNode.next = currentNode;
            previousNode.next = newNode;
        }
    }

    // Remove a node at a specific position in the linked list
    removeAt(position) {
        if (position < 0 || position >= this.length()) {
            throw new Error('Invalid position');
        }

        let previousNode = null;
        let currentNode = this.head;
        let currentPosition = 0;

        if (position === 0) {
            this.head = currentNode.next;
        } else {
            while (currentPosition < position) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentPosition++;
            }

            previousNode.next = currentNode.next;

            if (position === this.length() - 1) {
                this.tail = previousNode;
            }
        }
    }

    // Clear the linked list
    clear() {
        this.head = null;
        this.tail = null;
    }
}

// Usage example:
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.print(); // Output: 10 20 30

linkedList.insertAt(1, 15);
linkedList.print(); // Output: 10 15 20 30

linkedList.removeAt(2);
linkedList.print(); // Output: 10 15 30
