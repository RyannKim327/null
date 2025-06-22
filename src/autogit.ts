// Definition of a linked list node
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

// Function to find the nth node from the end
function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head || n <= 0) {
        return null; // Invalid input
    }

    let first: ListNode | null = head;
    let second: ListNode | null = head;

    // Move the first pointer n steps ahead
    for (let i = 0; i < n; i++) {
        if (!first) {
            return null; // Not enough nodes in the list
        }
        first = first.next;
    }

    // Move both pointers until the first pointer reaches the end
    while (first) {
        first = first.next;
        second = second!.next;
    }

    // The second pointer now points to the nth node from the end
    return second;
}
// Helper function to create a linked list from an array
function createLinkedList(values: number[]): ListNode | null {
    if (values.length === 0) return null;
    const head = new ListNode(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print a linked list
function printLinkedList(head: ListNode | null): void {
    const result: number[] = [];
    let current = head;
    while (current) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Example usage
const list = createLinkedList([1, 2, 3, 4, 5]);
console.log("Linked List:");
printLinkedList(list);

const nthNode = findNthFromEnd(list, 2);
if (nthNode) {
    console.log(`The 2nd node from the end is: ${nthNode.value}`);
} else {
    console.log("Invalid input or not enough nodes in the list.");
}
Linked List:
1 -> 2 -> 3 -> 4 -> 5
The 2nd node from the end is: 4
