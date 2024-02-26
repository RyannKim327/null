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
        const newNode = new Node(value);
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

    reverse() {
        let prev = null;
        let current = this.head;
        let temp = null;

        while (current !== null) {
            temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        this.head = prev;
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Create a linked list
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);

console.log("Original Linked List:");
linkedList.printList();

linkedList.reverse();

console.log("Reversed Linked List:");
linkedList.printList();
