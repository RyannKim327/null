class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head: ListNode | null): boolean {
    if (!head || !head.next) {
        return false; // Empty list or a single node
    }

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next; // Move slow pointer by 1
        fast = fast.next.next; // Move fast pointer by 2

        if (slow === fast) {
            return true; // Cycle detected
        }
    }

    return false; // No cycle detected
}
const head = new ListNode(1);
const second = new ListNode(2);
const third = new ListNode(3);
head.next = second;
second.next = third;
third.next = second; // Creates a cycle

console.log(hasCycle(head)); // Outputs: true
