class Node {
    value: number;
    next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: Node | null;

    constructor() {
        this.head = null;
    }

    // Method to find the length of the linked list
    findLength(): number {
        let currentNode = this.head;
        let length = 0;

        while (currentNode !== null) {
            length++;
            currentNode = currentNode.next;
        }

        return length;
    }

    // Method to add a node at the end of the linked list for testing
    append(value: number) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list.findLength()); // Output: 3
