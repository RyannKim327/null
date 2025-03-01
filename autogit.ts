class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;

    // Move fast n steps ahead
    for (let i = 0; i < n; i++) {
        if (fast === null) return null; // n is greater than the length of the list
        fast = fast.next;
    }

    // Move both fast and slow pointers until fast reaches the end
    while (fast !== null) {
        fast = fast.next;
        slow = slow?.next || null; // slow can be null
    }

    return slow; // slow is now pointing to the nth node from the end
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const n = 2;
const nthNodeFromEnd = findNthFromEnd(head, n);
if (nthNodeFromEnd) {
    console.log(nthNodeFromEnd.value); // Should print 4, which is the 2nd node from the end
} else {
    console.log("n is larger than the length of the linked list.");
}
