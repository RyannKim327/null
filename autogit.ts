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
        // Save the next node.
        const next: ListNode | null = current.next;

        // Reverse the link.
        current.next = prev;

        // Move the pointers one position forward.
        prev = current;
        current = next;
    }

    // At the end, prev will be the new head of the reversed list.
    return prev;
}
// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;

    const head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

// Helper function to print the linked list
function printLinkedList(head: ListNode | null): void {
    let current = head;
    const values: number[] = [];

    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }

    console.log(values.join(' -> '));
}

// Example
const originalList = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original linked list:");
printLinkedList(originalList);

const reversedList = reverseLinkedList(originalList);
console.log("Reversed linked list:");
printLinkedList(reversedList);
