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

    while (current) {
        // Store the next node
        next = current.next;
        // Reverse the current node's pointer
        current.next = prev;
        // Move pointers one position forward
        prev = current;
        current = next;
    }

    return prev; // The new head of the reversed list
}

// Example usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

let reversedHead = reverseLinkedList(head);

// Function to print the list
function printList(head: ListNode | null): void {
    let current = head;
    while (current) {
        process.stdout.write(current.value.toString() + " -> ");
        current = current.next;
    }
    console.log("null");
}

printList(reversedHead);
