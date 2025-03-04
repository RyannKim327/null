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
        // Store the next node
        let next: ListNode | null = current.next;
        // Reverse the current node's pointer
        current.next = prev;
        // Move the pointers one position ahead
        prev = current;
        current = next;
    }

    return prev; // New head of the reversed list
}
function printLinkedList(head: ListNode | null): void {
    let current = head;
    while (current) {
        process.stdout.write(current.value + ' -> ');
        current = current.next;
    }
    console.log('null');
}

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Print original linked list
console.log('Original linked list:');
printLinkedList(head);

// Reverse the linked list
const reversedHead = reverseLinkedList(head);

// Print the reversed linked list
console.log('Reversed linked list:');
printLinkedList(reversedHead);
