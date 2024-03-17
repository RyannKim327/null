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
}

// Create a linked list
const linkedList = new LinkedList();
linkedList.head = new Node(1);
linkedList.head.next = new Node(2);
linkedList.head.next.next = new Node(3);
linkedList.head.next.next.next = new Node(4);

// Print the original list values
let current = linkedList.head;
while (current !== null) {
    console.log(current.value);
    current = current.next;
}

// Reverse the linked list
linkedList.reverse();

// Print the reversed list values
current = linkedList.head;
while (current !== null) {
    console.log(current.value);
    current = current.next;
}
