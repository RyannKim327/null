class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findNthFromEnd(head, n) {
    let p1 = head;
    let p2 = head;

    // Move p2 n nodes ahead
    for (let i = 0; i < n; i++) {
        if (p2 === null) {
            return null; // n is greater than the length of the list
        }
        p2 = p2.next;
    }

    // Move p1 and p2 simultaneously until p2 reaches the end
    while (p2 !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p1;
}

// Example linked list
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let n = 2;
let nthNodeFromEnd = findNthFromEnd(head, n);
if (nthNodeFromEnd !== null) {
    console.log(`The ${n}th node from end is: ${nthNodeFromEnd.value}`);
} else {
    console.log(`N is greater than the length of the list`);
}
