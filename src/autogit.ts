// Definition of a linked list node
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// Function to check if a linked list has a cycle
function hasCycle(head: ListNode | null): boolean {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next; // Move slow pointer by 1 step
        fast = fast.next.next; // Move fast pointer by 2 steps

        if (slow === fast) {
            // Cycle detected
            return true;
        }
    }

    // No cycle detected
    return false;
}
function hasCycleUsingSet(head: ListNode | null): boolean {
    const seen = new Set<ListNode>();
    let current = head;

    while (current !== null) {
        if (seen.has(current)) {
            return true; // Cycle detected
        }
        seen.add(current);
        current = current.next;
    }

    return false; // No cycle detected
}
