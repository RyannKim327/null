class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head) return true;

    // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next!;
    }

    // Step 2: Reverse the second half of the linked list
    let prev = null;
    while (slow) {
        const nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }

    // Step 3: Compare the two halves
    let left = head;
    let right = prev; // The reversed second half
    while (right) {
        if (left.value !== right.value) {
            return false;
        }
        left = left.next!;
        right = right.next;
    }

    return true;
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // Output: true
