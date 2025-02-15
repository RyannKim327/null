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

    // Move first pointer n nodes ahead
    for (let i = 0; i < n; i++) {
        if (first === null) return null; // If n is greater than the length of the list
        first = first.next;
    }

    // Move both pointers until first reaches the end
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    return second; // second now points to the nth node from the end
}

// Example usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const n = 2;
const resultNode = findNthFromEnd(head, n);
if (resultNode) {
    console.log(resultNode.value); // Output the value of the nth node from the end
} else {
    console.log("The list is shorter than n.");
}
