class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head: ListNode | null): boolean {
    if (head === null) return false;

    let slow: ListNode | null = head; // Tortoise
    let fast: ListNode | null = head; // Hare

    while (fast !== null && fast.next !== null) {
        slow = slow.next;               // Move tortoise one step
        fast = fast.next.next;         // Move hare two steps

        if (slow === fast) {
            return true;                // Cycle detected
        }
    }

    return false; // No cycle found
}

// Example usage
const head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next; // Create a cycle

console.log(hasCycle(head)); // Expected output: true
