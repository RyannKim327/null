class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findMiddleElement(head) {
    if (!head) {
        return null;
    }

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.value;
}

// Example:
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(findMiddleElement(head)); // Output: 3
