class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function findMiddleElement(head) {
    let slowPtr = head;
    let fastPtr = head;

    while (fastPtr !== null && fastPtr.next !== null) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }

    return slowPtr.data;
}

// Example of creating a linked list
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Call the function to find the middle element
let middleElement = findMiddleElement(head);
console.log('Middle element of the linked list: ' + middleElement);
