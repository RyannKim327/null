class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findNthFromEnd(head, n) {
    let first = head;
    let second = head;

    // Move first pointer n nodes ahead
    for (let i = 0; i < n; i++) {
        if (first === null) {
            return null; // Invalid input
        }
        first = first.next;
    }

    // Move both pointers until first reaches the end
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    return second;
}

// Example usage
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let n = 2;
let nthNode = findNthFromEnd(head, n);
if (nthNode !== null) {
    console.log(`The ${n}th node from the end is: ${nthNode.value}`);
} else {
    console.log(`Invalid input`);
}
