class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}
function findMiddle(head: ListNode | null): ListNode | null {
    if (!head) return null; // Handle the case of an empty list

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;          // Move slow pointer by one step
        fast = fast.next.next;      // Move fast pointer by two steps
    }

    return slow; // Slow pointer is now at the middle
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

// Helper function to print the linked list
function printLinkedList(head: ListNode | null): void {
    const result: number[] = [];
    let current = head;

    while (current) {
        result.push(current.value);
        current = current.next;
    }

    console.log(result.join(" -> "));
}

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = createLinkedList([1, 2, 3, 4, 5]);

// Find the middle element
const middle = findMiddle(head);

if (middle) {
    console.log("Middle element:", middle.value); // Output: 3
} else {
    console.log("The list is empty.");
}

// Print the linked list
printLinkedList(head); // Output: 1 -> 2 -> 3 -> 4 -> 5
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function findMiddle(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    return slow;
}

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

function printLinkedList(head: ListNode | null): void {
    const result: number[] = [];
    let current = head;

    while (current) {
        result.push(current.value);
        current = current.next;
    }

    console.log(result.join(" -> "));
}

// Test the implementation
const head = createLinkedList([1, 2, 3, 4, 5]);
const middle = findMiddle(head);

if (middle) {
    console.log("Middle element:", middle.value); // Output: 3
} else {
    console.log("The list is empty.");
}

printLinkedList(head); // Output: 1 -> 2 -> 3 -> 4 -> 5
