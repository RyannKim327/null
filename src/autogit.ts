class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}
function reverseLinkedListIterative(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    while (current !== null) {
        const next: ListNode | null = current.next; // Store the next node
        current.next = prev; // Reverse the link
        prev = current; // Move prev to current
        current = next; // Move current to next
    }

    return prev; // New head of the reversed list
}
function reverseLinkedListRecursive(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head; // Base case: return the last node as the new head
    }

    // Recursively reverse the rest of the list
    const newHead = reverseLinkedListRecursive(head.next);

    // Adjust the next pointer of the node after head
    head.next.next = head;
    head.next = null;

    return newHead; // Return the new head of the reversed list
}
// Helper function to print the linked list
function printList(head: ListNode | null): void {
    const values: number[] = [];
    let current = head;
    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    console.log(values.join(" -> "));
}

// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original List:");
printList(head);

// Reverse using the iterative approach
const reversedHeadIterative = reverseLinkedListIterative(head);
console.log("Reversed List (Iterative):");
printList(reversedHeadIterative);

// Reverse using the recursive approach
const reversedHeadRecursive = reverseLinkedListRecursive(reversedHeadIterative);
console.log("Reversed List (Recursive):");
printList(reversedHeadRecursive);
Original List:
1 -> 2 -> 3 -> 4 -> 5
Reversed List (Iterative):
5 -> 4 -> 3 -> 2 -> 1
Reversed List (Recursive):
1 -> 2 -> 3 -> 4 -> 5
