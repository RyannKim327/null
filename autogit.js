class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findNthNodeFromEnd(head, n) {
    let firstPointer = head;
    let secondPointer = head;

    // Move the first pointer forward by n nodes
    for (let i = 0; i < n; i++) {
        if (firstPointer === null) {
            return null; // The linked list is not long enough
        }
        firstPointer = firstPointer.next;
    }

    // Move both pointers until the first pointer reaches the end
    while (firstPointer !== null) {
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }

    return secondPointer;
}

// Example usage
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let n = 2; // Find the 2nd node from the end
let nthNodeFromEnd = findNthNodeFromEnd(head, n);

if (nthNodeFromEnd !== null) {
    console.log(`The ${n}th node from the end is: ${nthNodeFromEnd.value}`);
} else {
    console.log(`The linked list is not long enough to find the ${n}th node from the end.`);
}
