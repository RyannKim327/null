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

    let first: ListNode | null = head;
    let second: ListNode | null = head;

    // Move first n steps ahead
    for (let i = 0; i < n; i++) {
        if (first === null) {
            return null; // n is greater than the length of the list
        }
        first = first.next;
    }

    // Move both pointers until first reaches the end
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    // second now points to the nth node from the end
    return second;
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const nthNodeFromEnd = findNthFromEnd(head, 2); // should return the node with value 4
console.log(nthNodeFromEnd?.value); // Output: 4
