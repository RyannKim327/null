class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
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

// Example Usage
const list = new LinkedList();
list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtEnd(3);

const length = list.getLength();
console.log("Length of the linked list: " + length); // Output: Length of the linked list: 3
