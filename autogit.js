function hasCycle(head) {
    if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        if (slow === fast) {
            return true; // Cycle detected
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return false; // No cycle detected
}
// Define the ListNode class
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Create a linked list with a cycle
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node1; // Create a cycle

let hasCycleResult = hasCycle(node1);
console.log(hasCycleResult); // Output: true, the linked list contains a cycle
