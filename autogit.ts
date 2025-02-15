class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (head === null) return true;

    // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next!;
    }

    // Step 2: Reverse the second half of the linked list
    let prev: ListNode | null = null;
    while (slow) {
        let nextTemp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextTemp;
    }

    // Step 3: Compare both halves
    let left = head;
    let right = prev; // This is the head of the reversed second half

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
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // Output: true
