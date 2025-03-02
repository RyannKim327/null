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

    while (fast && fast.next) {
        slow = slow?.next;        // Move slow by 1 step
        fast = fast.next.next;    // Move fast by 2 steps

        // If slow and fast meet, there's a cycle
        if (slow === fast) {
            return true;
        }
    }

    return false; // No cycle found
}

// Example usage:
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
// Uncomment the next line to create a cycle for testing
// node4.next = node2; // Create a cycle

console.log(hasCycle(node1)); // Output: true if there is a cycle, false otherwise
