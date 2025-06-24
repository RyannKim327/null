// Definition of a linked list node
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Function to find the nth node from the end of a linked list
 * @param head - The head of the linked list
 * @param n - The position from the end (1-based index)
 * @returns The nth node from the end, or null if it doesn't exist
 */
function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head || n <= 0) {
        return null; // Invalid input
    }

    let first: ListNode | null = head;
    let second: ListNode | null = head;

    // Move the first pointer n steps ahead
    for (let i = 0; i < n; i++) {
        if (!first) {
            return null; // The list has fewer than n nodes
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

// Helper function to print a linked list
function printList(head: ListNode | null): void {
    const result: number[] = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Example usage
const list = createLinkedList([1, 2, 3, 4, 5]);
console.log("Linked List:");
printList(list);

const n = 2;
const nthNode = findNthFromEnd(list, n);
if (nthNode) {
    console.log(`The ${n}nd node from the end is: ${nthNode.val}`);
} else {
    console.log(`There is no ${n}nd node from the end.`);
}
Linked List:
1 -> 2 -> 3 -> 4 -> 5
The 2nd node from the end is: 4
