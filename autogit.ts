class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    while (current) {
        // Store the next node
        const next = current.next;
        // Reverse the current node's pointer
        current.next = prev;
        // Move `prev` and `current` one step forward
        prev = current;
        current = next;
    }

    return prev; // New head of the reversed list
}
function reverseListRecursive(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head; // Base case: empty list or the last node
    }

    const newHead = reverseListRecursive(head.next);
    head.next.next = head; // Reverse the pointer
    head.next = null; // Set the current node's next to null

    return newHead; // Return new head of the reversed list
}
// Utility function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Utility function to print the linked list
function printLinkedList(head: ListNode | null): void {
    let current = head;
    while (current) {
        process.stdout.write(current.value + " -> ");
        current = current.next;
    }
    console.log("null");
}

// Sample Usage
const head = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original List:");
printLinkedList(head);

const reversedHead = reverseList(head); // Or use reverseListRecursive(head);
console.log("Reversed List:");
printLinkedList(reversedHead);
