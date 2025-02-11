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

    let slow: ListNode | null = head; // Slow pointer
    let fast: ListNode | null = head; // Fast pointer

    while (fast !== null && fast.next !== null) {
        slow = slow.next;           // Move slow by 1 step
        fast = fast.next.next;     // Move fast by 2 steps

        // If slow and fast meet, there is a cycle
        if (slow === fast) {
            return true;
        }
    }

    // If we reach here, there is no cycle
    return false;
}

// Example usage:

// Creating a linked list with a cycle
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle (node4 -> node2)

// Checking for a cycle
console.log(hasCycle(node1)); // Output: true

// Creating a linked list without a cycle
const node5 = new ListNode(5);
const node6 = new ListNode(6);
node5.next = node6;

// Checking for a cycle
console.log(hasCycle(node5)); // Output: false
