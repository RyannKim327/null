class ListNode {
    value: number;
    next: ListNode | null;
    
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null || n <= 0) {
        return null;
    }

    let firstPointer: ListNode | null = head;
    let secondPointer: ListNode | null = head;

    // Move firstPointer n nodes ahead
    for (let i = 0; i < n; i++) {
        if (firstPointer === null) {
            // If n is greater than the length of the linked list
            return null;
        }
        firstPointer = firstPointer.next;
    }

    // Move both pointers until firstPointer reaches the end
    while (firstPointer !== null) {
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }

    // secondPointer will now be at the nth node from the end
    return secondPointer;
}

// Example usage:
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Find the 2nd node from the end
const nthNodeFromEnd = findNthFromEnd(head, 2);
if (nthNodeFromEnd) {
    console.log(nthNodeFromEnd.value); // Output: 4
} else {
    console.log('Node not found!');
}
