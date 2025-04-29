// Define the linked list node
class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T, next: ListNode<T> | null = null) {
        this.value = value;
        this.next = next;
    }
}

function getNthFromEnd<T>(head: ListNode<T> | null, n: number): ListNode<T> | null {
    let fast: ListNode<T> | null = head;
    let slow: ListNode<T> | null = head;

    // Move fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        if (fast === null) return null; // n is larger than list length
        fast = fast.next;
    }

    // Move both pointers until fast reaches the end
    while (fast !== null) {
        fast = fast.next;
        slow = (slow as ListNode<T>).next;
    }

    return slow;
}
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5)
            )
        )
    )
);

// Find the 2nd node from the end (which should be node with value 4)
const node = getNthFromEnd(head, 2);
console.log(node?.value); // Output: 4
