class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findNthFromEnd(head, n) {
    let firstPointer = head;
    let secondPointer = head;

    // Move firstPointer forward by n nodes
    for (let i = 1; i <= n; i++) {
        if (firstPointer === null) {
            return null; // Out of bounds
        }
        firstPointer = firstPointer.next;
    }

    // Move both pointers together until firstPointer reaches the end
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
let result = findNthFromEnd(head, n);
if (result !== null) {
    console.log(`The ${n}th node from the end is: ${result.value}`);
} else {
    console.log(`Invalid input or out of bounds.`);
}
