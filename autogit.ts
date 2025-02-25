class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head || n <= 0) return null;

    let first: ListNode | null = head;
    let second: ListNode | null = head;

    // Move `first` n steps ahead
    for (let i = 0; i < n; i++) {
        if (first === null) return null; // If n is greater than the length of the list
        first = first.next;
    }

    // Move both pointers until `first` reaches the end
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    return second; // `second` is now at the nth node from the end
}

// Example usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const nthNode = findNthFromEnd(head, 2);
console.log(nthNode ? nthNode.value : "Node not found");
