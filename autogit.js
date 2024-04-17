class Node {
    constructor(value) {
        this.value = value;
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

    return prev;
}

// Helper function to print the linked list
function printLinkedList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

// Test the reverseLinkedList function
let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);

n1.next = n2;
n2.next = n3;
n3.next = n4;

console.log("Original Linked List:");
printLinkedList(n1);

let reversedHead = reverseLinkedList(n1);

console.log("\nReversed Linked List:");
printLinkedList(reversedHead);
