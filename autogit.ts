class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function findMiddle(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null; // If the list is empty
    }

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow.next;        // Move slow pointer by 1
        fast = fast.next.next;  // Move fast pointer by 2
    }

    return slow; // Slow pointer will be at the middle element
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const middleNode = findMiddle(head);
console.log(middleNode ? middleNode.value : null); // Output: 3
