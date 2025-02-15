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
        slow = slow.next;         // Move slow pointer by 1
        fast = fast.next.next;   // Move fast pointer by 2

        if (slow === fast) {     // Check if both pointers meet
            return true;
        }
    }

    return false;  // No cycle found
}

// Example usage:
// Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
// Creating a cycle: 5 -> 3
head.next.next.next.next.next = head.next.next;

console.log(hasCycle(head)); // Output: true
