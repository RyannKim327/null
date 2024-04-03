// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Function to find the nth node from the end of a linked list
function findNthFromEnd(head, n) {
    let pointer1 = head;
    let pointer2 = head;
    
    // Move pointer2 to nth node from the start
    for (let i = 0; i < n; i++) {
        if (pointer2 === null) {
            return null; // n is greater than the length of the list
        }
        pointer2 = pointer2.next;
    }
    
    // Move both pointers until pointer2 reaches the end of the list
    while (pointer2 !== null) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
    
    return pointer1;
}

// Create a linked list
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Find the 2nd node from the end
let n = 2;
let nthNode = findNthFromEnd(head, n);

if (nthNode !== null) {
    console.log(`The ${n}th node from the end is: ${nthNode.data}`);
} else {
    console.log(`There are less than ${n} nodes in the linked list.`);
}
