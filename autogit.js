class ListNode {
    constructor(value) {
        this.val = value;
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

    return slowPtr.val;
}

// Create a sample linked list
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(findMiddleElement(head)); // Output: 3
