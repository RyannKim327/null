class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head: ListNode | null): boolean {
    if (head === null) {
        return false; // No nodes, hence no cycle
    }

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next; // Move slow by 1 step
        fast = fast.next.next; // Move fast by 2 steps

        if (slow === fast) {
            return true; // Cycle detected
        }
    }

    return false; // No cycle found
}

// Example usage
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

// Creating a linked list with a cycle
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Cycle here

console.log(hasCycle(node1)); // Output: true

// Creating a linked list without a cycle
node4.next = null; // Removing the cycle
console.log(hasCycle(node1)); // Output: false
