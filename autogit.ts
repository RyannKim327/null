// Define the linked list node
class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T, next: ListNode<T> | null = null) {
        this.value = value;
        this.next = next;
    }
}

// Function to find the middle node
function findMiddle<T>(head: ListNode<T> | null): ListNode<T> | null {
    if (!head) return null;

    let slow: ListNode<T> | null = head;
    let fast: ListNode<T> | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow; // 'slow' is at the middle when 'fast' reaches the end
}

// Example usage:
const list = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5)
            )
        )
    )
);

const middleNode = findMiddle(list);
console.log(middleNode?.value); // Should output 3
