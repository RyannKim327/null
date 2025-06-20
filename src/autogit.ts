// Define the structure of a linked list node
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// Function to check if a linked list contains a cycle
function hasCycle(head: ListNode | null): boolean {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next; // Move slow pointer by 1 step
        fast = fast.next.next; // Move fast pointer by 2 steps

        if (slow === fast) {
            return true; // Cycle detected
        }
    }

    return false; // No cycle detected
}
// Create nodes for a linked list
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

// Link the nodes to form a list with a cycle
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle back to node2

// Check if the list contains a cycle
console.log(hasCycle(node1)); // Output: true

// Create a non-cyclic linked list
const head = new ListNode(5);
head.next = new ListNode(6);
head.next.next = new ListNode(7);

// Check if the list contains a cycle
console.log(hasCycle(head)); // Output: false
