class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}
function reverseLinkedList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null; // This will become the new tail (null initially)
    let current: ListNode | null = head; // Start from the head of the list

    while (current !== null) {
        const nextNode = current.next; // Store the next node temporarily
        current.next = prev; // Reverse the link
        prev = current; // Move prev to current node
        current = nextNode; // Move to the next node in the original list
    }

    // At the end, prev will be pointing to the new head
    return prev;
}
// Helper function to print the linked list
function printList(head: ListNode | null): void {
    let current = head;
    const result: number[] = [];
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original List:");
printList(head);

// Reverse the linked list
const reversedHead = reverseLinkedList(head);

console.log("Reversed List:");
printList(reversedHead);
Original List:
1 -> 2 -> 3 -> 4 -> 5
Reversed List:
5 -> 4 -> 3 -> 2 -> 1
