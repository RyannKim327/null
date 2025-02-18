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
        return false;
    }

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;         // Move slow by 1
        fast = fast.next.next;     // Move fast by 2

        if (slow === fast) {
            return true;           // Cycle detected
        }
    }
    
    return false;                  // No cycle
}

// Example usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
// Creating a cycle for testing
head.next.next.next = head.next; // 3 points to 2, creating a cycle

console.log(hasCycle(head)); // Should print true
