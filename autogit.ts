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
        slow = slow.next;               // Move slow pointer one step
        fast = fast.next.next;         // Move fast pointer two steps

        if (slow === fast) {
            return true;               // Cycle detected
        }
    }
    return false;                     // No cycle found
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

// Creating a cycle for testing
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Cycle here

console.log(hasCycle(node1)); // Output: true
