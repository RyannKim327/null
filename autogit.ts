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
        const next: ListNode | null = current.next; // store the next node
        current.next = prev; // reverse the link
        prev = current; // move prev to current node
        current = next; // move to the next node
    }

    return prev; // return the new head of the reversed list
}
// Creating a linked list: 1 -> 2 -> 3 -> null
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

// Reversing the linked list
const reversedHead = reverseLinkedList(head);

// Function to print the linked list
function printList(node: ListNode | null) {
    let current = node;
    while (current) {
        process.stdout.write(`${current.value} -> `);
        current = current.next;
    }
    console.log('null');
}

// Output the reversed list
printList(reversedHead); // Should print: 3 -> 2 -> 1 -> null
