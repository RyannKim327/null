// Define the structure of a linked list node
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// Function to find the nth node from the end
function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head || n <= 0) {
        return null; // Invalid input
    }

    let fast: ListNode | null = head;
    let slow: ListNode | null = head;

    // Move the fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        if (!fast) {
            return null; // n is larger than the length of the list
        }
        fast = fast.next;
    }

    // Move both pointers until fast reaches the end
    while (fast) {
        slow = slow!.next;
        fast = fast.next;
    }

    // Slow is now pointing to the nth node from the end
    return slow;
}

// Example Usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const n = 2;
const result = findNthFromEnd(head, n);

if (result) {
    console.log(`The ${n}th node from the end is: ${result.value}`);
} else {
    console.log("Invalid input or n is out of bounds.");
}
