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

    addNode(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = newNode;
        }
    }

    getLength() {
        let current = this.head;
        let length = 0;

        while (current !== null) {
            length++;
            current = current.next;
        }

        return length;
    }
}

// Usage
let linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);

console.log(linkedList.getLength()); // Output: 3
