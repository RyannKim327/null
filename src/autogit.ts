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

    while (current !== null) {
        const nextTemp: ListNode | null = current.next; // Store next node
        current.next = prev; // Reverse the link
        prev = current; // Move prev to current
        current = nextTemp; // Move to the next node
    }

    return prev; // New head of the reversed list
}
// Create a linked list: 1 -> 2 -> 3 -> null
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

// Reverse the linked list
const reversedHead = reverseLinkedList(head);

// Function to print the linked list
function printList(head: ListNode | null): void {
    let current: ListNode | null = head;
    while (current !== null) {
        process.stdout.write(current.value.toString() + " -> ");
        current = current.next;
    }
    console.log("null");
}

// Print the reversed linked list
printList(reversedHead); // Output: 3 -> 2 -> 1 -> null
