function reverseLinkedList(head) {
    let previous = null;
    let current = head;

    while (current !== null) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }

    return previous; // new head
}
// Define a sample linked list
class ListNode {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

// Reverse the linked list
let newHead = reverseLinkedList(head);

// Print the reversed linked list
let current = newHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
4
3
2
1
