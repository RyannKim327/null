// Define a Node class for the linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Function to find the nth node from the end of a linked list
function findNthNodeFromEnd(head, n) {
    let pointer1 = head;
    let pointer2 = head;

    // Move pointer2 to the nth node from the beginning
    for (let i = 0; i < n; i++) {
        if (pointer2 === null) {
            return null; // Invalid input
        }
        pointer2 = pointer2.next;
    }

    // Move both pointers until pointer2 reaches the end
    while (pointer2 !== null) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    // At this point, pointer1 is pointing to the nth node from the end
    return pointer1;
}

// Example linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let n = 2;
let nthNodeFromEnd = findNthNodeFromEnd(head, n);
if (nthNodeFromEnd !== null) {
    console.log(`Value of the ${n}th node from the end: ${nthNodeFromEnd.value}`);
} else {
    console.log(`Invalid input`);
}
