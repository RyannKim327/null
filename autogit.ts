// Define the structure for a linked list node
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// Function to find the middle of the linked list
function findMiddle(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null; // If the list is empty, return null
    }

    let slow: ListNode | null = head; // Slow pointer
    let fast: ListNode | null = head; // Fast pointer

    while (fast !== null && fast.next !== null) {
        slow = slow.next; // Move slow pointer by one
        fast = fast.next.next; // Move fast pointer by two
    }

    return slow; // When fast pointer reaches the end, slow is at the middle
}

// Example usage:

// Create linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Find and print the middle element
const middleNode = findMiddle(head);
if (middleNode) {
    console.log('Middle element:', middleNode.value); // Output: 3
} else {
    console.log('The linked list is empty.');
}
