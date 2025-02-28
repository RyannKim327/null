class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}
function reverseLinkedList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;
    let next: ListNode | null = null;

    while (current !== null) {
        // Store the next node
        next = current.next;
        // Reverse the current node's pointer
        current.next = prev;
        // Move prev and current one step forward
        prev = current;
        current = next;
    }

    return prev; // prev will be the new head of the reversed list
}
// Helper function to print the linked list
function printList(head: ListNode | null): void {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.value + " -> ");
        current = current.next;
    }
    console.log("null");
}

// Creating a linked list: 1 -> 2 -> 3 -> null
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

// Print original list
console.log("Original list:");
printList(head);

// Reverse the linked list
const reversedHead = reverseLinkedList(head);

// Print reversed list
console.log("Reversed list:");
printList(reversedHead);
Original list:
1 -> 2 -> 3 -> null
Reversed list:
3 -> 2 -> 1 -> null
