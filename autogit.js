class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        let newNode = new Node(value);

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

// Example usage
let linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);

console.log("Length of the linked list: " + linkedList.getLength()); // Output: 3
