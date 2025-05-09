class ListNode {
    value: number;
    next: ListNode | null = null;

    constructor(value: number) {
        this.value = value;
    }
}
function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head || n <= 0) return null;

    let first: ListNode | null = head;
    let second: ListNode | null = head;

    // Move first pointer n nodes ahead
    for (let i = 0; i < n; i++) {
        if (first === null) return null; // If n is greater than the number of nodes
        first = first.next;
    }

    // Move both pointers until first reaches the end
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    return second; // This will be the nth node from the end
}
// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
    const dummy = new ListNode(0); // Dummy node to simplify list creation
    let current = dummy;
    for (const value of arr) {
        current.next = new ListNode(value);
        current = current.next;
    }
    return dummy.next; // Return the head of the list
}

// Example usage
const values = [1, 2, 3, 4, 5];
const head = createLinkedList(values);
const n = 2; // We want the 2nd node from the end

const nthNode = findNthFromEnd(head, n);
if (nthNode) {
    console.log(`The ${n}th node from the end is ${nthNode.value}`);
} else {
    console.log("Node not found");
}
