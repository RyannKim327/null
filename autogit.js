class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findNthNodeFromEnd(head, n) {
    if (head === null || n <= 0) {
        return null;
    }

    let pointer1 = head;
    let pointer2 = head;

    // Move pointer2 ahead by n nodes
    for (let i = 0; i < n; i++) {
        if (pointer2 === null) {
            return null; // Not enough nodes in the list
        }
        pointer2 = pointer2.next;
    }

    // Move both pointers until pointer2 reaches the end
    while (pointer2 !== null) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    return pointer1;
}

// Example usage
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const n = 2;
const nthNodeFromEnd = findNthNodeFromEnd(head, n);
if (nthNodeFromEnd !== null) {
    console.log(`The ${n}th node from the end is: ${nthNodeFromEnd.value}`);
} else {
    console.log(`The list doesn't have ${n} nodes from the end.`);
}
