class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findNthNodeFromEnd(head, n) {
    let firstPointer = head;
    let secondPointer = head;

    // Move the firstPointer to nth node from the beginning
    for (let i = 0; i < n; i++) {
        if (firstPointer === null) {
            return null; // N is greater than the length of the linked list
        }
        firstPointer = firstPointer.next;
    }

    // Move both pointers one node at a time until firstPointer reaches the end
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

let n = 2;
let nthNodeFromEnd = findNthNodeFromEnd(head, n);
console.log(`${n}th node from the end: ${nthNodeFromEnd.value}`);
