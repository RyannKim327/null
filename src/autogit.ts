// Define the structure of a linked list node
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
    if (!head) return null; // Handle empty list case

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;          // Move slow pointer by 1 step
        fast = fast.next.next;      // Move fast pointer by 2 steps
    }

    // When the loop ends, the slow pointer will be at the middle
    return slow!.value;
}

// Example usage
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

// Test the function
const list = createLinkedList([1, 2, 3, 4, 5]);
console.log(findMiddle(list)); // Output: 3

const evenList = createLinkedList([1, 2, 3, 4, 5, 6]);
console.log(findMiddle(evenList)); // Output: 4
