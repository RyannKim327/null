class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

function hasCycle(head: ListNode | null): boolean {
    if (!head) return false;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;          // Move slow pointer by 1
        fast = fast.next.next;    // Move fast pointer by 2

        if (slow === fast) {
            return true;           // Cycle detected
        }
    }
    
    return false; // No cycle detected
}
const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
// Uncomment the following line to create a cycle
// node4.next = node2;

console.log(hasCycle(node1)); // Outputs: true or false depending on cycle
