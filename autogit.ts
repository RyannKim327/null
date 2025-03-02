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

    let firstPointer: ListNode | null = head;
    let secondPointer: ListNode | null = head;

    // Move firstPointer n nodes ahead
    for (let i = 0; i < n; i++) {
        if (firstPointer === null) return null; // n is larger than the length of the list
        firstPointer = firstPointer.next;
    }

    // Move both pointers until firstPointer reaches the end
    while (firstPointer) {
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }

    // secondPointer now points to the nth node from the end
    return secondPointer;
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const n = 2;
const nthNode = findNthFromEnd(head, n);

if (nthNode) {
    console.log(`The ${n}th node from the end is: ${nthNode.value}`);
} else {
    console.log(`The list is shorter than ${n} nodes.`);
}
