// Node class to create nodes for the linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Function to find the nth node from the end of the linked list
function findNthNodeFromEnd(head, n) {
    let slow = head;
    let fast = head;

    // Move the fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        if (fast === null) {
            return null; // If the linked list is shorter than n nodes
        }
        fast = fast.next;
    }

    // Move the slow and fast pointers together until fast reaches the end
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}

// Example usage
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let n = 2; // Find the 2nd node from the end
let nthNodeFromEnd = findNthNodeFromEnd(head, n);

if (nthNodeFromEnd) {
    console.log(`The ${n}th node from the end is: ${nthNodeFromEnd.value}`);
} else {
    console.log(`The linked list is shorter than ${n} nodes.`);
}
