class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function findMiddle(head: ListNode | null): ListNode | null {
    if (!head) return null; // If the list is empty

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow.next; // Move slow by one step
        fast = fast.next.next; // Move fast by two steps
    }

    return slow; // Slow is now at the middle
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const middleNode = findMiddle(head);
if (middleNode) {
    console.log(`The middle element is: ${middleNode.value}`); // Output: The middle element is: 3
}
