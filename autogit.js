class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function findNthFromEnd(head, n) {
    let fast = head;
    let slow = head;

    // Move fast pointer n nodes ahead
    for (let i = 0; i < n; i++) {
        if (fast === null) {
            return null; // List length is less than n
        }
        fast = fast.next;
    }

    // Move both pointers until fast reaches the end
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow;
}

// Example usage
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let n = 2;
let nthNodeFromEnd = findNthFromEnd(head, n);
if (nthNodeFromEnd !== null) {
    console.log(`The ${n}th node from the end is: ${nthNodeFromEnd.data}`);
} else {
    console.log(`List length is less than ${n}`);
}
