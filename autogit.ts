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
        return null; // Edge case: empty list or invalid n
    }

    let firstPointer: ListNode | null = head;
    let secondPointer: ListNode | null = head;

    // Move firstPointer n nodes ahead
    for (let i = 0; i < n; i++) {
        if (firstPointer === null) {
            return null; // n is larger than the length of the list
        }
        firstPointer = firstPointer.next;
    }

    // Move both pointers until firstPointer reaches the end
    while (firstPointer !== null) {
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }

    // Now secondPointer points to the nth node from the end
    return secondPointer;
}

// Example usage:

// Create Linked List: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Find the 2nd node from the end
const nthNodeFromEnd = findNthFromEnd(head, 2);
if (nthNodeFromEnd) {
    console.log(`The nth node from the end is: ${nthNodeFromEnd.value}`);
} else {
    console.log("Node not found.");
}
