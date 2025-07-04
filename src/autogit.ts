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
        const nextTemp: ListNode | null = current.next; // Store the next node
        current.next = prev; // Reverse the current node's pointer
        prev = current; // Move prev and current one step forward
        current = nextTemp;
    }

    return prev; // New head of the reversed list
}
// Create a linked list: 1 -> 2 -> 3 -> 4 -> null
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

// Reverse the linked list
const reversedHead = reverseLinkedList(head);

// Function to print the linked list
function printList(head: ListNode | null): void {
    let current: ListNode | null = head;
    while (current !== null) {
        process.stdout.write(current.value + " -> ");
        current = current.next;
    }
    console.log("null");
}

// Print the reversed linked list
printList(reversedHead);
