// Definition for a singly-linked list node
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Function to find the length of a linked list
function findLengthOfLinkedList(head) {
    let length = 0;
    let current = head;

    while (current !== null) {
        length++;
        current = current.next;
    }

    return length;
}

// Example linked list
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Find the length of the linked list
const length = findLengthOfLinkedList(head);
console.log("Length of the linked list: " + length); // Output: Length of the linked list: 5
