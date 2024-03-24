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

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    addToHead(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage
let linkedList = new LinkedList();
linkedList.addToHead(3);
linkedList.addToHead(2);
linkedList.addToHead(1);

console.log("Original Linked List:");
linkedList.printList();

linkedList.reverse();

console.log("\nReversed Linked List:");
linkedList.printList();
