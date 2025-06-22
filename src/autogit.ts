// Define the structure of a linked list node
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// Function to detect a cycle in a linked list
function hasCycle(head: ListNode | null): boolean {
    // Initialize two pointers
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    // Traverse the list
    while (fast !== null && fast.next !== null) {
        slow = slow!.next;          // Move slow pointer one step
        fast = fast.next.next;      // Move fast pointer two steps

        // Check if the two pointers meet
        if (slow === fast) {
            return true;            // Cycle detected
        }
    }

    return false;                   // No cycle detected
}
// Helper function to create a linked list with a cycle
function createLinkedListWithCycle(values: number[], cycleIndex: number): ListNode | null {
    if (values.length === 0) return null;

    const nodes = values.map(value => new ListNode(value));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }

    // Create a cycle if cycleIndex is valid
    if (cycleIndex >= 0 && cycleIndex < nodes.length) {
        nodes[nodes.length - 1].next = nodes[cycleIndex];
    }

    return nodes[0]; // Return the head of the list
}

// Test case 1: Linked list without a cycle
const list1 = createLinkedListWithCycle([1, 2, 3, 4, 5], -1); // No cycle
console.log(hasCycle(list1)); // Output: false

// Test case 2: Linked list with a cycle
const list2 = createLinkedListWithCycle([1, 2, 3, 4, 5], 2); // Cycle back to index 2
console.log(hasCycle(list2)); // Output: true
