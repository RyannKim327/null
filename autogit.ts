class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T, next: ListNode<T> | null = null) {
        this.value = value;
        this.next = next;
    }
}

function hasCycle<T>(head: ListNode<T> | null): boolean {
    if (!head) return false;

    let slow: ListNode<T> | null = head;
    let fast: ListNode<T> | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true; // Cycle detected
        }
    }

    return false; // No cycle
}
