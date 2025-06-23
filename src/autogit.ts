// Define the structure of a node in the linked list
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// Function to find the middle element of the linked list
function findMiddle(head: ListNode | null): number | null {
    if (!head) return null; // If the list is empty, return null

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;          // Move slow pointer by 1 step
        fast = fast.next.next;      // Move fast pointer by 2 steps
    }

    // When the loop ends, the slow pointer will be at the middle
    return slow!.value;
}

// Helper function to create a linked list from an array
function createLinkedList(values: number[]): ListNode | null {
    if (values.length === 0) return null;

    const head = new ListNode(values[0]);
    let current = head;

    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }

    return head;
}

// Example usage:
const values = [1, 2, 3, 4, 5]; // Example linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = createLinkedList(values);

const middle = findMiddle(head);
console.log("Middle element:", middle); // Output: Middle element: 3
