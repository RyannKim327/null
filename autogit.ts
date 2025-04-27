class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T, next: ListNode<T> | null = null) {
        this.value = value;
        this.next = next;
    }
}

function hasCycle<T>(head: ListNode<T> | null): boolean {
    if (!head || !head.next) return false;

    let slow: ListNode<T> | null = head;
    let fast: ListNode<T> | null = head.next;

    while (fast && fast.next) {
        if (slow === fast) {
            // Fast and slow pointers meet, cycle detected
            return true;
        }
        slow = slow!.next;
        fast = fast.next.next;
    }

    // If fast reaches the end, no cycle
    return false;
}
