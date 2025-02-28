class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function findMiddle(head: ListNode | null): number | null {
    if (!head) return null; // If the linked list is empty, return null

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow.next;       // Move slow one step
        fast = fast.next.next; // Move fast two steps
    }

    return slow.value; // When fast is null or at the end, slow is at the middle
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(findMiddle(head)); // Output: 3
