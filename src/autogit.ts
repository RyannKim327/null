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
    if (!head || !head.next) {
        // If the list is empty or has only one node, there can't be a cycle
        return false;
    }

    let slow: ListNode | null = head; // Moves one step at a time
    let fast: ListNode | null = head; // Moves two steps at a time

    while (fast !== null && fast.next !== null) {
        slow = slow!.next; // Move slow pointer by one step
        fast = fast.next.next; // Move fast pointer by two steps

        if (slow === fast) {
            // If slow and fast meet, there is a cycle
            return true;
        }
    }

    // If we exit the loop, there is no cycle
    return false;
}
// Create a linked list with a cycle
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle

console.log(hasCycle(node1)); // Output: true

// Create a linked list without a cycle
const nodeA = new ListNode(1);
const nodeB = new ListNode(2);
const nodeC = new ListNode(3);

nodeA.next = nodeB;
nodeB.next = nodeC;

console.log(hasCycle(nodeA)); // Output: false
