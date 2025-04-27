class ListNode<T> {
    value: T;
    next: ListNode<T> | null;
    
    constructor(value: T, next: ListNode<T> | null = null) {
        this.value = value;
        this.next = next;
    }
}
function findMiddle<T>(head: ListNode<T> | null): ListNode<T> | null {
    if (!head) return null;
    
    let slow: ListNode<T> | null = head;
    let fast: ListNode<T> | null = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // When fast reaches the end, slow is at the middle
    return slow;
}
