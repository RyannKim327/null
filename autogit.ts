class ListNode {
    value: number;
    next: ListNode | null = null;

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
    // When the loop ends, prev will be the new head
    return prev;
}

// Example usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

const reversedHead = reverseLinkedList(head);

// Function to print LinkedList
function printList(head: ListNode | null) {
    let current = head;
    while (current) {
        process.stdout.write(`${current.value} -> `);
        current = current.next;
    }
    console.log('null');
}

printList(reversedHead); // Output: 4 -> 3 -> 2 -> 1 -> null
