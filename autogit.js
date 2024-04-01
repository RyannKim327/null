class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findMiddleElement(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// Create a linked list
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Find the middle element of the linked list
let middleElement = findMiddleElement(head);
console.log(middleElement.value); // Output: 3
