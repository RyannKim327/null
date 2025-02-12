class ListNode {
    value: number;
    next: ListNode | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function findMiddle(head: ListNode | null): ListNode | null {
    if (!head) return null; // Handle empty list

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;        // Move slow by 1
        fast = fast.next.next;  // Move fast by 2
    }

    return slow; // slow will be at the middle node
}

// Example usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const middleNode = findMiddle(head);
console.log(middleNode?.value); // Output: 3
