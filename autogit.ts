class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head: ListNode | null): boolean {
    if (!head) return false;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next; // Move slow pointer by 1
        fast = fast.next.next; // Move fast pointer by 2

        if (slow === fast) {
            return true; // Cycle detected
        }
    }

    return false; // No cycle
}

// Example usage:
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

// Creating a cycle for testing
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle

console.log(hasCycle(node1)); // Output: true

// Creating a non-cyclic linked list for testing
node4.next = null; // Break the cycle
console.log(hasCycle(node1)); // Output: false
