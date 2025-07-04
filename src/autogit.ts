class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}
function hasCycle(head: ListNode | null): boolean {
    if (!head) {
        return false; // If head is null, there is no cycle
    }

    let slow: ListNode | null = head; // Tortoise
    let fast: ListNode | null = head; // Hare

    while (fast !== null && fast.next !== null) {
        slow = slow.next; // Move tortoise one step
        fast = fast.next.next; // Move hare two steps

        // If they meet, there is a cycle
        if (slow === fast) {
            return true;
        }
    }

    return false; // If we reach the end, there is no cycle
}
// Create a linked list with a cycle for testing
const head = new ListNode(1);
const second = new ListNode(2);
const third = new ListNode(3);
const fourth = new ListNode(4);

// Linking nodes
head.next = second;
second.next = third;
third.next = fourth;

// Creating a cycle
fourth.next = second; // Cycle here

// Check for cycle
console.log(hasCycle(head)); // Output: true

// To test a list without a cycle, you can modify the links
fourth.next = null; // Break the cycle
console.log(hasCycle(head)); // Output: false
