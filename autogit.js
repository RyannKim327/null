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
        let count = 0;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }
}

// Create a linked list
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);

console.log("Length of linked list: ", linkedList.getLength());
