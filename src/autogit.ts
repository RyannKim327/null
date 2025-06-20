// Define the structure of a linked list node
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Checks if a linked list contains a cycle.
 * 
 * @param head - The head node of the linked list.
 * @returns `true` if there is a cycle, `false` otherwise.
 */
function hasCycle(head: ListNode | null): boolean {
    if (!head || !head.next) {
        // List is empty or has only one node without a cycle
        return false;
    }

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;          // Move slow pointer by 1 step
        fast = fast.next.next;      // Move fast pointer by 2 steps

        if (slow === fast) {
            // Cycle detected
            return true;
        }
    }

    // No cycle found
    return false;
}

// Example Usage:

// Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// No cycle initially
console.log(hasCycle(node1)); // Output: false

// Introduce a cycle: 5 -> 3
node5.next = node3;

// Now, the list has a cycle
console.log(hasCycle(node1)); // Output: true
function hasCycleUsingSet(head: ListNode | null): boolean {
    const seen = new Set<ListNode>();
    let current = head;

    while (current !== null) {
        if (seen.has(current)) {
            return true;
        }
        seen.add(current);
        current = current.next;
    }

    return false;
}
