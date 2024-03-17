class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    head = prev;
    return head;
}

// Create a linked list
let head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);
head.next.next.next = new LinkedListNode(4);

// Print the original linked list
let current = head;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}

// Reverse the linked list
head = reverseLinkedList(head);

// Print the reversed linked list
current = head;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}
