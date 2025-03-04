// Definition for singly-linked list node
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// Function to find the middle element of the linked list
function findMiddle(head: ListNode | null): ListNode | null {
    if (!head) return null; // If the list is empty

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    // Traverse the list with two pointers
    while (fast && fast.next) {
        slow = slow.next;        // Move slow pointer by one step
        fast = fast.next.next;   // Move fast pointer by two steps
    }

    // slow pointer is now at the middle element
    return slow;
}

// Example usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const middleNode = findMiddle(head);
if (middleNode) {
    console.log(`The middle element is: ${middleNode.value}`); // Output: 3
} else {
    console.log('The linked list is empty.');
}
