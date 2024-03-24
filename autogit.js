function hasCycle(head) {
    if (!head || !head.next) {
        return false; // Empty list or list with only one node
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

    return false; // No cycle found
}

// Example usage:
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Create a linked list with a cycle
let head = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);
head.next = second;
second.next = third;
third.next = head; // Creating a cycle

console.log(hasCycle(head)); // Outputs: true
