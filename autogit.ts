class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let first: ListNode | null = head;
    let second: ListNode | null = head;

    // Move the first pointer n nodes ahead
    for (let i = 0; i < n; i++) {
        if (first === null) return null; // n is larger than the length of the list
        first = first.next;
    }

    // Move both pointers until the first pointer reaches the end
    while (first !== null) {
        first = first.next;
        second = second?.next || null;
    }

    return second; // second pointer is now at the nth node from the end
}

// Example usage:
// Create a linked list 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Find the 2nd node from the end
const result = findNthFromEnd(head, 2);
console.log(result ? result.value : 'Node not found');
