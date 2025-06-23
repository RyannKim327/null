class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null; // Initialize previous node as null
    let current: ListNode | null = head; // Start with the head of the list

    while (current !== null) {
        const nextTemp: ListNode | null = current.next; // Store the next node
        current.next = prev; // Reverse the link
        prev = current; // Move prev to current
        current = nextTemp; // Move to the next node
    }

    // At the end, prev will be pointing to the new head of the reversed list
    return prev;
}
// Helper function to print the linked list
function printList(head: ListNode | null): void {
    let current = head;
    const result: number[] = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

console.log("Original List:");
printList(head);

// Reverse the list
const reversedHead = reverseList(head);

console.log("Reversed List:");
printList(reversedHead);
Original List:
1 -> 2 -> 3 -> 4 -> 5
Reversed List:
5 -> 4 -> 3 -> 2 -> 1
