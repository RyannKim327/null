// Define the structure of a Node in the linked list
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// Function to reverse a linked list
function reverseLinkedList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;  // Initially, there's no previous node
    let current: ListNode | null = head;  // Start from the head of the list
    let next: ListNode | null = null;  // Placeholder for the next node

    while (current !== null) {
        next = current.next;  // Store the next node
        current.next = prev;  // Reverse the link
        prev = current;       // Move prev to current node
        current = next;       // Move to the next node
    }

    // At the end, prev will be the new head of the reversed list
    return prev;
}
// Helper function to print the linked list
function printList(head: ListNode | null): void {
    let current = head;
    const values: number[] = [];
    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    console.log(values.join(" -> "));
}

// Create a sample linked list: 1 -> 2 -> 3 -> null
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

console.log("Original List:");
printList(head);  // Output: 1 -> 2 -> 3

// Reverse the linked list
const reversedHead = reverseLinkedList(head);

console.log("Reversed List:");
printList(reversedHead);  // Output: 3 -> 2 -> 1
