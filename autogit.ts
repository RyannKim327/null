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
    let next: ListNode | null = null;

    while (current !== null) {
        next = current.next; // Store next node
        current.next = prev; // Reverse the link
        prev = current;      // Move prev to current
        current = next;      // Move to the next node
    }

    return prev; // New head of the reversed list
}
function reverseListRecursive(head: ListNode | null): ListNode | null {
    // Base case: if head is null or only one node
    if (head === null || head.next === null) {
        return head;
    }

    // Reverse the rest of the list
    const newHead = reverseListRecursive(head.next);

    // Adjust the pointers
    head.next.next = head; // Point the next node back to the current node
    head.next = null;      // Set the next of current node to null

    return newHead; // Return new head of the reversed list
}
// Helper function to create a linked list from an array
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

// Helper function to print the linked list
function printLinkedList(head: ListNode | null): void {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.value + " -> ");
        current = current.next;
    }
    console.log("null");
}

// Example array to create a linked list
const arr = [1, 2, 3, 4, 5];
const head = createLinkedList(arr);

// Print original linked list
console.log("Original Linked List:");
printLinkedList(head);

// Reverse linked list iteratively
const reversed = reverseList(head);
console.log("Reversed Linked List (Iterative):");
printLinkedList(reversed);

// You can also use the recursive version
const headForRecursive = createLinkedList(arr);
const reversedRecursive = reverseListRecursive(headForRecursive);
console.log("Reversed Linked List (Recursive):");
printLinkedList(reversedRecursive);
