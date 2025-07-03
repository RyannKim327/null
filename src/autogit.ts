class ListNode {
    val: number;
    next: ListNode | null;
    
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let first: ListNode | null = head;
    let second: ListNode | null = head;

    // Move first pointer n steps ahead
    for (let i = 0; i < n; i++) {
        if (!first) return null; // If n is greater than the length of the list
        first = first.next;
    }

    // Move both pointers until first reaches the end
    while (first) {
        first = first.next;
        second = second.next;
    }

    // Now second points to the nth node from the end
    return second;
}

// Example usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const n = 2;
const nthNode = findNthFromEnd(head, n);
if (nthNode) {
    console.log(`The value of the ${n}th node from the end is: ${nthNode.val}`);
} else {
    console.log(`The ${n}th node from the end does not exist.`);
}
