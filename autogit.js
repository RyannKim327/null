// Define the Node class for a linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Function to find the length of a linked list
function findLengthOfLinkedList(head) {
    let length = 0;
    let current = head;

    while (current !== null) {
        length++;
        current = current.next;
    }

    return length;
}

// Define your linked list
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

// Find the length of the linked list
let length = findLengthOfLinkedList(head);
console.log("Length of linked list: " + length);
