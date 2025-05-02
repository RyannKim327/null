class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T, next: ListNode<T> | null = null) {
        this.value = value;
        this.next = next;
    }
}
function reverseLinkedList<T>(head: ListNode<T> | null): ListNode<T> | null {
    let prev: ListNode<T> | null = null;
    let current = head;

    while (current !== null) {
        // Keep track of the next node
        const nextTemp = current.next;
        // Reverse the `next` pointer
        current.next = prev;
        // Move `prev` and `current` one step forward
        prev = current;
        current = nextTemp;
    }

    return prev; // New head of the reversed list
}
