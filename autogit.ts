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

    while (current) {
        const nextTemp: ListNode | null = current.next; // Store the next node
        current.next = prev; // Reverse the link
        prev = current; // Move prev to current
        current = nextTemp; // Move to the next node
    }

    return prev; // New head of the reversed linked list
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

const reversedHead = reverseLinkedList(head);

// Function to print the linked list
function printList(head: ListNode | null) {
    let current = head;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

// Print the reversed linked list
printList(reversedHead);
