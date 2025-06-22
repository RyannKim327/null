class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head || n <= 0) {
        throw new Error("Invalid input: head is null or n is non-positive.");
    }

    let first: ListNode | null = head;
    let second: ListNode | null = head;

    // Move first pointer n steps ahead
    for (let i = 0; i < n; i++) {
        if (!first) {
            throw new Error(`List has fewer than ${n} nodes.`);
        }
        first = first.next;
    }

    // Move first to the end, maintaining the gap
    while (first !== null) {
        first = first.next;
        second = second!.next;
    }

    return second;
}

// Example Usage:

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
    const result: number[] = [];
    while (current) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const list = createLinkedList([1, 2, 3, 4, 5]);
console.log("Linked List:");
printLinkedList(list);

// Find the 2nd node from the end
const n = 2;
try {
    const nthNode = findNthFromEnd(list, n);
    if (nthNode) {
        console.log(`The ${n}nd node from the end is:`, nthNode.value);
    } else {
        console.log(`No node found.`);
    }
} catch (error) {
    console.error(error.message);
}
Linked List:
1 -> 2 -> 3 -> 4 -> 5
The 2nd node from the end is: 4
